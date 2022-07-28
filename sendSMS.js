const AfricasTalking = require('africastalking');
require('dotenv').config();
const africastalking = AfricasTalking({
  //apiKey: process.env.API_KEY, 
  apiKey: 'd63d6fa687536d7551f0c7bc0d3ee6c1885a39ac2b35e9c8a16c5305f793bfe0',
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
