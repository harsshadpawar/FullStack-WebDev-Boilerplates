import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already Exists",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });
    console.log(user);
    if (!user) {
      return res.status(400).json({
        message: "User not registered",
      });
    }

    await user.save();
  } catch (error) {
    res.status(400).json({
      message: "User not registered ",
      error,
      success: false,
    });
  }
};

export { registerUser };
