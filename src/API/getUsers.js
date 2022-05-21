/**
 * @name getUsers
 * @description METHOD FOR GET API ENDPOINT FOR /users
 * @returns {Promise} res 
 */
const getUsers = async () => {
    try {
        const res = await fetch("https://kyupid-api.vercel.app/api/users");
        return res;
    }
    catch (err) {
        console.error("ERROR OCCURED WHILE GETTING AREA DATA", err);
        return null;
    }
};

export default getUsers;