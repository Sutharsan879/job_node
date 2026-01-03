import app from "./app.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// const app = require("./app");
// import app from "./app.js";

// const PORT = process.env.PORT || 8080;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
