import express from "express";
import {
  deleteUser,
  updateUser,
  getSingleUser,
  getAllUsers,
} from "../controllers/userContoller.js";
const router = express.Router();

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

// update user

router.put("/:id", verifyUser, updateUser);

//delete user

router.delete("/:id", verifyUser, deleteUser);

//get single user

router.get("/:id", verifyUser, getSingleUser);

//get all users

router.get("/", verifyAdmin, getAllUsers);

export default router;
