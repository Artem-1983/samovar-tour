import express from "express";
import {
  createTour,
  deleteTour,
  getAllTours,
  getFeaturedTours,
  getTourCount,
  getSingleTour,
  getTourBySearch,
  updateTour,
} from "../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// More specific routes before generic
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTours);
router.get("/search/getTourCount", getTourCount);

// CRUD
router.post("/", verifyAdmin, createTour);
router.put("/:id", verifyAdmin, updateTour);
router.delete("/:id", verifyAdmin, deleteTour);
router.get("/", getAllTours);
router.get("/:id", getSingleTour);
export default router;
