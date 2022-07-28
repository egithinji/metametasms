const AfricasTalking = require('africastalking');
require('dotenv').config();
// TODO: Initialize Africa's Talking
const africastalking = AfricasTalking({
  apiKey: process.env.API_KEY, 
  username: 'sandbox'
});


module.exports = async function sendSMS(tel_num,message) {
    
    // TODO: Send message
    try {
        const result=await africastalking.SMS.send({
            to: tel_num, 
            message: message,
            from: 'METAMETA'
        });
        console.log(result);
    } catch(ex) {
        console.error(ex);
    } 
};
