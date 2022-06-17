import express from "express";
import { createUser, editUser, deleteUser, getAUser, getUsers } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/check", verifyToken, (req, res, next) => {
//     res.send("Hello User, you are logged in...")
// });

// router.get('/checkUser/:id', verifyUser, (req, res, next) => {
//     res.send("Hello user, you are logged in and you can delete your account...")
// });

// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello Admin, you are logged in and you can delete all your accounts...");
// });

// CREATE
router.post('/', verifyUser, createUser)

// UPDATE
router.put('/:id', verifyUser, editUser);

// DELETE
router.delete('/:id', verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getAUser);

// GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;
