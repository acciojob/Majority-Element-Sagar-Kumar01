const express = require("express");
const app = express();
app.use(express.json());

// Function to find majority element
function majorElement(arr) {
  const map = new Map();

  arr.forEach((v) => {
    map.set(v, (map.get(v) || 0) + 1);
  });

  for (let [key, value] of map) {
    if (value > Math.floor(arr.length / 2)) {
      return key;
    }
  }
  return -1; // if no majority element
}