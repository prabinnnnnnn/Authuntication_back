import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: function () {
        return !this.githubId;
      },
      minlength: [8, "Password must be at least 8 characters long"],
      maxlength: 64,
      validate: {
        validator: function (v) {
          // If password is not provided (undefined), then skip validation.
          if (!v && this.githubId) return true;
          return v && v.length >= 8;
        },
        message: "Password must be at least 8 characters long",
      },
    },
    githubId: {
      type: String,
      unique: true,
      sparse: true,
    },
    avatar: {
      type: String,
      default: "/assets/avatar.avif"
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);
export default User;
