import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went while creating access and refresh token"
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  // Fetching the data from req
  const { username, email, password, fullname } = req.body;

  if (
    [username, email, password, fullname].some((field) => field?.trim === "")
  ) {
    throw new ApiError(400, "Some required fields are left empty");
  }

  const existedUser = await User.findOne({ $or: [{ email }, { username }] });
  if (existedUser) {
    throw new ApiError(409, "User with email and/or username already exist");
  }

  const avtarLocalPath = await req.files.avtar[0].path;

  let coverImageLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.coverImage) &&
    req.files.coverImage.length > 0
  ) {
    coverImageLocalPath = await req.files.coverImage[0].path;
  }

  if (!avtarLocalPath) {
    throw new ApiError(400, "Avtar is required");
  }

  const avtar = await uploadOnCloudinary(avtarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avtar) {
    throw new ApiError(400, "Avtar is required!");
  }

  const user = await User.create({
    username: username.toLowerCase(),
    email: email,
    password: password,
    fullname: fullname,
    avtar: avtar.url,
    coverImage: coverImage?.url || "",
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "User creation faild");
  }

  res
    .status(200)
    .json(new ApiResponse(200, createdUser, "User registered successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username && !email) {
    throw new ApiError(400, "Username or email is required");
  }

  const user = await User.findOne({ $or: [{ email }, { username }] });

  if (!user) {
    throw new ApiError(404, "User doesn't exist");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(404, "Invalid password");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };  

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        {
          message: "User logged in successfully",
        }
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  console.log("in logout");
  
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out"));
});

export { registerUser, loginUser, logoutUser };
