import express from "express";
import { protectRoute } from "../middleware/protectRoute";
import { followUnfollowUser, getUSerProfile } from "../controllers/user.controller";

const router = express.Router();


router.get("/profile/:username", protectRoute, getUSerProfile)
router.get("/suggested", protectRoute, getUserProfile)
router.post("/follow/:id", protectRoute,followUnfollowUser)
router.post("/update", protectRoute, updateUserProfile)

export default router;