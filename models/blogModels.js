import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      min: [5, "Title must be at least 5 characters"],
    },
    content: {
      type: String,
      trim: true,
      required: true,
      min: [5, "Content must be at least 5 characters"],
    },
    author: {
      type: String,
      trim: true,
      required: true,
      min: [5, "Author must be at least 5 characters"],
    },
    tags: {
      type: [String],
    },
    datePublished: {
      type: Date,
      required: true,
      default: new Date(),
    },
    // comments: {
    //   text: String,
    //   author: String,
    //   date: Date,
    // },
    image: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
