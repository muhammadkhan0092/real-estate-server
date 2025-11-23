import {
  agentImages,
  galleryImages,
  propertiesImages,
  reviewImages,
} from "./seedImages.js";
import models from "../models/index.js"
const agentModel = models.agentModel;
const apartmentModel = models.apartmentModel;
const reviewsModel = models.reviewModel;

const propertyTypes = [
  "House",
  "Townhouse",
  "Condo",
  "Duplex",
  "Studio",
  "Villa",
  "Apartment",
  "Other",
];

const facilities = [
  "Laundry",
  "Parking",
  "Gym",
  "Wifi",
  "Pet-Friendly",
];
const agentNames = [
    "John",
    "Paul",
    "Fedrick",
    "Frey",
    "Robert"
];
const agentDesignations = [
    "Owner",
    "Manager",
    "Assistant",
    "Sales Manager",
    "Employee"
]
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
const seed = async()=>{
    console.log("Agent Creation Started");
    for (let index = 0; index < 5; index++) {
        const contactNumber = getRandomInt(920000,930000);
        const randomIndex = getRandomInt(0,4);
        const contactName = agentNames[index];
        const agentDesignation = agentDesignations[index];
        const img = agentImages[index];
        agentModel.create({
        name:contactName,
        agentImage:agentImages,
        designation:agentDesignation,
        contactNumber:contactNumber
    });
}
console.log("Agents Creation Completed");
}

export default seed;