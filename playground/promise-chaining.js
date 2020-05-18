require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("5ec18cdf880dc5136f0bac6b", { age: 1 })
//   .then((user) => {
//     console.log("User:", user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((users) => {
//     console.log("Users:", users);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });

  return count;
};

updateAgeAndCount("5ec18cdf880dc5136f0bac6b", 2)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
