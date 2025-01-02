const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "enter your mvelase-md session-id",
    CAPTION: process.env.CAPTION || "*𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿/𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆☎*",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "true", // Added auto-read configuration
    AUTO_TYPING: process.env.AUTO_TYPING || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "false",
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/7a63r4.png",
    ALIVE_MSG: process.env.ALIVE_MSG || "Hɪɪ ᴅᴇᴀʀ ɪᴍ ᴏɴʟɪɴᴇ ɪᴍ ᴍᴠᴇʟᴀsᴇ ᴍᴅ ᴡʜᴀᴛsᴀᴘᴘ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ ☎",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗☭",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "`𝑦𝑜𝑢𝑟 𝑠𝑡𝑎𝑡𝑖𝑠 𝑠𝑒𝑒𝑛 𝑗𝑢𝑠𝑡 𝑛𝑜𝑤 𝑏𝑦 𝑚𝑣𝑒𝑙𝑎𝑠𝑒-𝑚𝑑`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
