const AfricasTalking = require('africastalking');

// TODO: Initialize Africa's Talking
const africastalking = AfricasTalking({
  apiKey: 'a87df16b6f4932f6afd0180c51456bb3b359fccf6f9eedb75cc955f7fe46e52f', 
  username: 'sandbox'
});


module.exports = async function sendSMS(tel_num,message) {
    
    // TODO: Send message
    try {
        const result=await africastalking.SMS.send({
            //to: '+254727984598', 
            to: tel_num, 
            message: message,
            from: 'METAMETA'
        });
        console.log(result);
    } catch(ex) {
        console.error(ex);
    } 
};
