const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid.");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (value.includes("password")) {
        throw new Error(
          "Password isn't allowed to contain the word 'password'."
        );
      }
      if (value.length <= 6) {
        throw new Error("Password must at least be 7 characters.");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number.");
      }
    },
  },
});

// const me = new User({
//   name: "    Roxane    ",
//   email: " ROXANE@SCHEEREN.NL   ",
//   password: "Lekkerweertje",
// });

// me.save()
//   .then((me) => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });

const Task = mongoose.model("Task", {
  description: {
    type: String,
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const firstTasks = new Task({
  description: "Take a shower",
  completed: false,
});

firstTasks
  .save()
  .then((task) => {
    console.log(task);
  })
  .catch((error) => {
    console.log("Error!", error);
  });
