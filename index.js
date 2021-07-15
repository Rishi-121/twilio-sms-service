require("dotenv").config();
const twilio = require("twilio");

const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(twilioAccountSid, twilioAuthToken);

const sendSms = (contactNumber) => {
    client.messages.create({
        to: contactNumber,
        from: process.env.SENDER,
        body: 'Hello World',
    })
        .then((message) => console.log(message.sid))
        .catch((err) => console.log(err));
};

sendSms(); // Send a text message to a number

