const axios = require('axios');


async function makeZapRequest(data) {
    try {
        const response = await axios.post('https://hooks.zapier.com/hooks/catch/17339037/3ecjqrn/', data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const data = { 'id': 'bruh', 'name': 'Dyllan', 'email': 'dyllan@berkeley.edu' };
// Call your function with sample data or replace it with actual data
makeZapRequest(data).then(console.log).catch(console.error);

// If you intend to use this function in another file, uncomment the line below
// module.exports = makeZapRequest;
