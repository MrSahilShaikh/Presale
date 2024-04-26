import React from "react";

const getTagColor = (tag) => {
  switch (tag) {
    case "Launchpad / IDO":
      return "aqua";
    case "Refused Policy":
      return "lightgreen";
    case "KOL/ Influencer":
      return "yellow";
    case "Private & Seed Rounds":
      return "orange";
    // Add more cases as needed for additional tags
    default:
      return "black"; // Default color
  }
};

export default getTagColor;
