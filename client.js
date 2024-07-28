const axios = require('axios');

const SERVER_URL = 'http://task-management-api:3000';

async function sendData() {
    const data = document.getElementById('tas-input').value;
    try {
        const response = await axios.post(`${SERVER_URL}/post_data`, {
            timestamp: new Date(),
            data: data
        });
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error sending data:', error);
    }
}

async function getData() {
    const responseElem = document.getElementById('response-container');
    try {
        const response = await axios.get(`${SERVER_URL}/get_data`);
        responseElem.innerHTML = response.data;
        console.log('Data:', response.data);
    } catch (error) {
        console.error('Error retrieving data:', error);
    }
}

// Send and retrieve data for demonstration
sendData().then(() => getData());
