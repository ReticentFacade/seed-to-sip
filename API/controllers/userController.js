// Contains 2 funcs: signUp & login

// // TODO: USE BCRYPT TO HASH PASSWORDS

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const data = {
      username,
      email,
      password: await bcrypt.hash(password, 10),
    };

    const user = await User.create(data);

    if (user) {
      let token = jwt.sign(
        {
          id: user.id,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: 1000 * 60 * 60 * 24,
        }
      );

      res.cookie("jwt", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      console.log("User created successfully", JSON.stringify(user, null, 2)); // null & 2 are for better formatting
      console.log();
      console.log("Token created successfully: ", token);

      return res.status(201).send({
        authStatus: "user registered",
        message: {
          username: data.username,
          email: data.email,
          hashedPass: data.password,
        },
      });
    } else {
      return res.status(401).send({
        authStatus: "unable to register user",
        message: "Some error occurred", // it's better NOT to give away what the error is
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const userData = await User.findOne({
      // findOne = obtains the 1st entry/result it finds (that fulfills the query options, if any)
      where: {
        username: req.body.username,
      },
    });
    if (userData) {
      // after bcrypt, change it to: const isSame = await bcrypt.compare(req.body.password, userData.password);
      const isSame = await bcrypt.compare(req.body.password, userData.password);

      if (isSame) {
        let token = jwt.sign(
          {
            id: userData.id,
          },
          process.env.SECRET_KEY,
          {
            expiresIn: 1 * 24 * 60 * 60 * 1000,
          }
        );

        res.cookie("jwt", token, {
          maxAge: 1 * 24 * 60 * 60 * 1000,
          httpOnly: true,
        });

        console.log(
          "User logged in successfully",
          JSON.stringify(userData, null, 2)
        );
        console.log();
        console.log("Token created successfully: ", token);

        return res.status(200).send({
          authStatus: "user logged in",
          message: {
            username: userData.username,
            email: userData.email,
            hashedPass: userData.password,
          },
        });
      } else {
        return res.status(401).send({
          authStatus: "unable to login user",
          message: "Password is incorrect",
        });
      }
    } else {
      return res.status(401).send({
        authStatus: "unable to login user",
        message: "Invalid user details",
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { 
    signUp, 
    login 
};