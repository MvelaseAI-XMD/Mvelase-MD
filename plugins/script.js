const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "☎",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──━━╼╼╼╼╼╼╼━━──━⚆*
> *𝘔𝘷𝘦𝘭𝘢𝘴𝘦 𝘔𝘋 𝘖𝘸𝘯𝘦𝘳:*

*𝘒𝘩𝘶𝘭𝘦𝘬𝘢𝘯𝘪 𝘋𝘶𝘣𝘦*

> *𝘔𝘷𝘦𝘭𝘢𝘴𝘦 𝘔𝘋 𝘎𝘪𝘵𝘩𝘶𝘣 𝘙𝘦𝘱𝘰:*

*https://github.com/MvelaseAI-XMD/Mvelase-MD*

> *𝘔𝘷𝘦𝘭𝘢𝘴𝘦 𝘔𝘋 𝘚𝘶𝘱𝘱𝘰𝘳𝘵 𝘊𝘩𝘢𝘯𝘯𝘦𝘓:*

*https://whatsapp.com/channel/0029VajdbH511ulTyGysZq17*

*╰──━━╼╼╼╼╼╼╼━━──━⚆*

> *🇫🇷𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363321103874131@newsletter',
      newsletterName: "Mᴠᴇʟᴀsᴇ ᴍᴅ",
      serverMessageId: 144
    },
externalAdReply: { 
title: 'Mᴠᴇʟᴀsᴇ ᴍᴅ',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/MvelaseAI-XMD/Mvelase-MD" ,
thumbnailUrl: "https://files.catbox.moe/7a63r4.png" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
