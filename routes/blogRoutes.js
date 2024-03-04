import express from "express";
import {
  createBlogs,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
} from "../controller/blogController.js";
const router = express.Router();

//create blog
//POST => http://localhost:5000/api/v1/blog
router.post("/", createBlogs);

//getAllBlogs
//GET => http://localhost:5000/api/v1/blog
router.get("/", getAllBlogs);

//getBlogById
//GET => http://localhost:5000/api/v1/blog/:id
router.get("/:id", getBlogById);

//updateBlogById
//PUT => http://localhost:5000/api/v1/blog/:id
router.put("/:id", updateBlogById);

//deleteBlogById
//DELETE => http://localhost:5000/api/v1/blog/:id
router.delete("/:id", deleteBlogById);

export default router;
