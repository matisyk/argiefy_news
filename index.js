require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const channelId = process.env.TELEGRAM_CHANNEL_ID;

const mensaje = "Mensaje de prueba";

function enviarMensaje() {
  bot
    .sendMessage(channelId, mensaje)
    .then(() => {
      console.log("Mensaje enviado con éxito");
    })
    .catch((error) => {
      console.error("Error al enviar mensaje:", error);
    });
}

setInterval(enviarMensaje, 36000);
