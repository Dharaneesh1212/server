import Blog from "../models/blogModels.js";

//createBlog
// export const createBlog = async (req, res) => {
//   try {
//     const blog = await new Blog(req.body).save();
//     res.status(201).json({ success: true, data: blog });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error });
//   }
// };

export const createBlogs = async (req, res) => {
  try {
    const blogs = await new Blog(req.body).save();
    res.status(201).json({ success: true, data: blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//getAllBlogs
export const getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await Blog.find();
    res.status(200).json({ success: true, data: allBlogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

//getBlogById
export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

//updateBlogById
export const updateBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateBlog = await Blog.findByIdAndUpdate(id, req.body);
    res.status(200).json({ success: true, data: updateBlog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


//deleteBlogById
export const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};
