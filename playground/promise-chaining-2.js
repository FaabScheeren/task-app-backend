require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("5ec1869b355c081310d36416")
//   .then((task) => {
//     console.log("Task", task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((count) => {
//     console.log("Count:", count);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });

  return count;
};

deleteTaskAndCount("5ec2279c927f93095b0f206a")
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });
