import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  publishDate: {
    type: Date,
    default: Date.now
  },
  pages: {
    type: Number,
    required: true
  },
  genre: {
    type: String,
    trim: true
  },
  language: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  price:{
    type:Number,
    default:0,
  }
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
