const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '1227872265:AAGaVwFprzTA0YFHYlo-8E3po1deaBAHWjI';

const bot = new TelegramBot(TOKEN, {
    polling: true
})

// bot.on('message', (msg) => {
//     console.log(msg)
//     setInterval(sayHi, 5000);
// })

// function sayHi(){
//     bot.sendMessage(msg.chat.id, 'hi, ' + msg.from.first_name)
// } /run@UserOfTheDayBot

bot.onText(/\/start/, msg => {
    const { id } = msg.chat
    function sayHi(){
        bot.sendMessage(id, "/pidor@UserOfTheDayBot")
    }
    function sayBy(){
        bot.sendMessage(id, "/run@UserOfTheDayBot")
    }
    setInterval(sayHi, 86400000);
    setInterval(sayBy, 86403000);
});

bot.onText(/\/test (.+)/, (msg, [source, match]) => {
    const { id } = msg.chat
    bot.sendMessage(id, `${match}`)
})

// bot.onText(/\/test/, msg => {
//     const { id } = msg.chat
//     function sayHi(){
//         bot.sendMessage(id, "/pidor@UserOfTheDayBot")
//     }
//     function sayBy(){
//         bot.sendMessage(id, "/run@UserOfTheDayBot")
//     }
//     sayBy();
// });