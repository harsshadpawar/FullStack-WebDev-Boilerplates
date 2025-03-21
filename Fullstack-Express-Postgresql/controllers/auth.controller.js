import { PrismaClient } from "@prisma/client";
import { makeTypedQueryFactory } from "@prisma/client/runtime/library";
import bcryptjs from "bcryptjs";
import crypto from "crypto";
const prisma = new PrismaClient();

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    console.log("Data is missing");
    return res.status(400).json({
      status: false,
      message: "All fields are reuqired",
    });
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({
        status: false,
        message: "User already exists",
      });
    }
    //hash the pass

    const hashedPassword = await bcrypt.hash(password, 10);

    //token creation
    const verificationToken = crypto.randomBytes(32).toString("hex");

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        verificationToken,
      },
    });
    // sending email TODO

    res.status(201).json({
      status: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      error,
      message: "Registration Failed",
    });
  }
};
