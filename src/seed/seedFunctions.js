import {
  agentImages,
  galleryImages,
  propertiesImages,
  reviewImages,
} from "./seedImages.js";
import models from "../models/index.js"
import constants from "../utils/constants.js";
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
];
const apartmentNames = [
  "Green Villa",
  "New York Apartment",
  "Apartment Neo",
  "Villa",
  "DHA",
  "Bahria Apartments"
];
const overView = [
  "This is A Nice Apartment",
  "This is Good",
  "Beutifull Apartment",
  "nice",
  "good",
  "Nice Location"
];
const facilitiesList = [
   constants.carParking,
   constants.swimming,
            constants.gymAndFitness,
            constants.restraunt,
            constants.wifiAndNetwork,
            constants.petCenter,
            constants.sportsCenter,
            constants.laundry
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
        const contactName = agentNames[index];
        const agentDesignation = agentDesignations[index];
        const img = agentImages[index];
        await agentModel.create({
        name:contactName,
        agentImage:img,
        designation:agentDesignation,
        contactNumber:contactNumber
    });
  }
  console.log("Agents Creation Completed");
  for(let index = 0;index<100;index++){
    const agentId = getRandomInt(1,3);
    const apartmentIndex = getRandomInt(0,5);
    const apartment = apartmentNames[apartmentIndex];   
    const overviewIndex = overView[getRandomInt(0,5)];
    const price = getRandomInt(500,7000);
    const bedRooms = getRandomInt(2,5);
    const bathRooms = getRandomInt(1,bedRooms);
    const facility = facilitiesList[getRandomInt(0,6)];
  const pI = propertiesImages.slice(0,getRandomInt(1,13)).toString();
  const GI = propertiesImages.slice(0,getRandomInt(1,13)).toString();
  const result = await apartmentModel.create({
    agentIdF:agentId,
    apartmentName:apartment,
    overview:overviewIndex,
    price:price,
    bathRooms:bathRooms,
    bedRooms:bedRooms,
    facility:facility,
    image:pI,
    galleryImages:GI
  });
  console.log("Result is ",result);
  }
}

export default seed;