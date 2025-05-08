import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { followUnfollowUser, getSuggestedUsers, getUSerProfile, updateUser } from "../controllers/user.controller.js";

const router = express.Router();


router.get("/profile/:username", protectRoute, getUSerProfile)

router.get("/suggested", protectRoute, getSuggestedUsers)

router.post("/follow/:id", protectRoute,followUnfollowUser)

router.post("/update", protectRoute, updateUser)

export default router;