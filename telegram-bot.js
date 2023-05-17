require('dotenv').config();
const token = process.env.TELEGRAM_BOT_TOKEN;

const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(token, {
    polling: true
});

bot.onText(/\echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, resp)
})

bot.onText(/\/subscribe (.+)/, (msg, match) => {

    console.log(match);
    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, `Вы успешно подписались на обновления о группе ${resp}`)
})