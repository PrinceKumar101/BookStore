import mongoose from "mongoose";
import express from "express"

const connect = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("connected");
  } catch (err) {
    console.log(err.message);
  }
};

export default connect;
