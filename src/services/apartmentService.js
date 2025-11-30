import { getAllApartmentWithNameAndPrice, getSingleApartmentByApartmentIdWithAgentAndAllReviews } from "../repositories/apartmentRepository.js"

export const getSingleApartment = async()=>{
    const item = await getSingleApartmentByApartmentIdWithAgentAndAllReviews(1);
        const aptId = item.apartmentId;
        const aptName = item.apartmentName;
        const fac = item.facilities;
        const overV = item.overview;
        const price = item.price;
        const beds = item.bedRooms;
        const baths = item.bathRooms
        const gallery = item.galleryImg;
        const img = item.image;
        const firstReview = item.reviews[0]?item.reviews[0]:null;
        const noOfReviews = item.reviews.length;
        const ratings = item.reviews.map((reviewItem)=>reviewItem.rating);
        const avgRating = ratings && ratings.length>0?(ratings.reduce((total,current)=>total+current,0)/ratings.length):0;
        return {
            aptId,
            aptName,
            fac,
            overV,
            price,
            beds,
            baths,
            gallery,
            img,
            firstReview,
            noOfReviews,
            avgRating
        }
};
export const getAllApartments= async()=>{
    const result  = await getAllApartmentWithNameAndPrice();
    const mappedResult = result.map(item => {
    const ratings = item.reviews.map(r => r.rating);
    const avg = ratings.length ? ratings.reduce((accumulativeResult,currentRating) => accumulativeResult + currentRating, 0) / ratings.length : 0;
    return {
        apartmentId: item.apartmentId,
        apartmentName: item.apartmentName,
        price: item.price,
        averageRating: avg
    }});
    console.log(JSON.stringify(mappedResult, null, 2));
};
export const getSearchedApartments = async()=>{

};