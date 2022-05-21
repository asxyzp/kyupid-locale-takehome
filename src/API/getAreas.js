/**
 * @name getAreas
 * @description METHOD FOR GET API ENDPOINT FOR /areas
 * @returns {Promise} res 
 */
const getAreas = async () => {
    try{
        const res = await fetch("https://kyupid-api.vercel.app/api/areas");
        return res;
    }
    catch(err){
        console.error("ERROR OCCURED WHILE GETTING AREA DATA", err);
        return null;
    }
};

export default getAreas;