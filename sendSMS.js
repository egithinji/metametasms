const AfricasTalking = require('africastalking');
require('dotenv').config();
const africastalking = AfricasTalking({
  apiKey: process.env.API_KEY, 
  username: 'metameta'
});

module.exports = async function sendSMS(tel_num,message) {
    try {
        const result=await africastalking.SMS.send({
            to: tel_num, 
            message: message,
            from: 'AT'
        });
        //console.log(result);
    } catch(ex) {
        //console.error(ex);
    } 
};
