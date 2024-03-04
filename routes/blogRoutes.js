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
//POST => https://mushy-dress-bull.cyclic.app/api/v1/blog
router.post("/", createBlogs);

//getAllBlogs
//GET => https://mushy-dress-bull.cyclic.app/api/v1/blog
router.get("/", getAllBlogs);

//getBlogById
//GET => https://mushy-dress-bull.cyclic.app/api/v1/blog/:id
router.get("/:id", getBlogById);

//updateBlogById
//PUT => https://mushy-dress-bull.cyclic.app/api/v1/blog/:id
router.put("/:id", updateBlogById);

//deleteBlogById
//DELETE => https://mushy-dress-bull.cyclic.app/api/v1/blog/:id
router.delete("/:id", deleteBlogById);

export default router;
