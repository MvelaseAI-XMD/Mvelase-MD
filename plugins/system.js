const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    react: "♤",
    alias: ["uptime","status","runtime"],
    desc: "cheack uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `*╭──━━╼╼╼╼╼╼╼━━──━⚆*
*𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗 𝗦𝘆𝘀𝘁𝗲𝗺 𝗨𝗽𝗱𝗮𝘁𝗲✅*

*𝗨𝗽𝘁𝗶𝗺𝗲* ➜ ${𝐫𝐮𝐧𝐭𝐢𝐦𝐞(process.uptime())}

*𝗥𝗮𝗺 𝗨𝘀𝗮𝗴𝗲* ➜ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB

*𝗛𝗼𝘀𝘁𝗻𝗮𝗺𝗲* ➜ ${𝐨𝐬.𝐡𝐨𝐬𝐭𝐧𝐚𝐦𝐞()}

*𝗢𝘄𝗻𝗲𝗿* ➜ *𝗞𝗵𝘂𝗹𝗲𝗸𝗮𝗻𝗶 𝗗𝘂𝗯𝗲*
*╰──━━╼╼╼╼╼╼╼━━──━⚆*
`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:`${status}`},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
