import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    roomNumbers: [{ number: Number, availableDates: [{ type: [Date] }] }],
  },
  { timestamps: true }
);

const Room = mongoose.model("Room", roomSchema);

export default Room;
