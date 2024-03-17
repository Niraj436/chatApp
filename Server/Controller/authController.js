import User from "../Model/userModel.js";
import bcrypt from "bcryptjs";
import generateTokenandSetCookie from "../Utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, gender, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username alreasy exists" });
    }

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      username,
      gender,
      password: hashedPassword,
      profilePic: gender == "male" ? boyProfilePic : girlProfilePic,
    });
    if (newUser) {
      generateTokenandSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id:newUser._id,
        fullName:newUser.fullName,
        username:newUser.username,
        profilePic:newUser.profilePic,
      })
    } else {
      return res.status(400).json({ error: "User data invalid!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res
        .status(400)
        .json({ error: "Username or password is incorrect" });
    }
    generateTokenandSetCookie(user._id, res);
    res.status(201).json({
      _id:user._id,
      fullName:user.fullName,
      username:user.username,
      profilePic:user.profilePic,
    })
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.send({ message: "User logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
