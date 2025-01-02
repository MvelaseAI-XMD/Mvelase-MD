const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "☎",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━━〔 *${config.BOT_NAME}* 〕━━━┈⊷
┃⚆╭─────╾╾╾╾─────⚆
┃⚆│ Owner : *${config.BOT_NAME}*
┃⚆│ Baileys : *Multi Device*
┃⚆│ Type : *NodeJs*
┃⚆│ Platform : *Heroku*
┃⚆│ Mode : *${config.MODE}*
┃⚆│ Prifix : *${config.PREFIX}*
┃⚆│ Version : *v 2.0.0*
┃⚆╰─────╾╾╾╾─────⚆
╰━━━━━━━━━━━━━━━┈⊷
*╭━━〔 *Menu List* 〕━━┈⊷*
*┃⚆╭─────┉┉┉─────⚆*
*┃⚆┃• 🔔🇫🇷aimenu🔔🇫🇷*
*┃⚆┃• 🩹anmiemenu🩹*
*┃⚆┃• ❣️convertmenu❣️*
*┃⚆┃• 🤹🏻funmenu🤹🏻*
*┃⚆┃• 🩹dlmenu🩹*
*┃⚆┃• 👻listcmd👻*
*┃⚆┃• 🤙mainmenu🤙*
*┃⚆┃• 🩹groupmenu🩹*
*┃⚆┃• 🎳allmenu🎳*
*┃⚆┃• 💀ownermenu💀*
*┃⚆┃• ⛱️othermenu⛱️*
*┃⚆┃• ❣️repo❣️*
*┃⚆└───────────┈⊷*
*╰──────────────┈⊷*
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/7a63r4.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363321103874131@newsletter',
                        newsletterName: 'ᴍᴠᴇʟᴀsᴇ ᴍᴅ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/sigma.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// dlmenu

cmd({
    pattern: "dlmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Download Menu* 〕━━┈⊷
┃◇╭─────┉┉┉─────⚆
┃◇┃• facebook
┃◇┃• mediafire
┃◇┃• tiktok
┃◇┃• twitter
┃◇┃• Insta
┃◇┃• apk
┃◇┃• img
┃◇┃• play
┃◇┃• play2
┃◇┃• audio
┃◇┃• video
┃◇┃• video2
┃◇┃• ytmp3
┃◇┃• ytmp4
┃◇┃• song
┃◇┃• darama
┃◇┃• gdrive
┃◇┃• smovie
┃◇┃• baiscope 
┃◇┃• ginisilia 
┃◇└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/7a63r4.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363321103874131@newsletter',
                        newsletterName: 'ᴍᴠᴇʟᴀsᴇ ᴍᴅ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// group menu

cmd({
    pattern: "groupmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try
       {
        let dec = `╭━━〔 *Group Menu* 〕━━┈⊷
┃⚆╭─────┉┉┉─────⚆
┃⚆┃• grouplink
┃⚆┃• add
┃⚆┃• remove
┃⚆┃• kick
┃⚆┃• promote 
┃⚆┃• demote
┃⚆┃• dismiss 
┃⚆┃• revoke
┃⚆┃• setgoodbye
┃⚆┃• setwelcome
┃⚆┃• delete 
┃⚆┃• getpic
┃⚆┃• ginfo
┃⚆┃• delete 
┃⚆┃• disappear on
┃⚆┃• disappear off
┃⚆┃• disappear 7D,24H
┃⚆┃• allreq
┃⚆┃• updategname
┃⚆┃• updategdesc
┃⚆┃• joinrequests
┃⚆┃• senddm
┃⚆┃• nikal
┃⚆┃• mute
┃⚆┃• unmute
┃⚆┃• lockgc
┃⚆┃• unlockgc
┃⚆┃• invite
┃⚆┃• tag
┃⚆┃• hidetag
┃⚆┃• tagall
┃⚆┃• tagadmins
┃⚆└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/7a63r4.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363321103874131@newsletter',
                        newsletterName: 'ᴍᴠᴇʟᴀsᴇ ᴍᴅ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// fun menu

cmd({
    pattern: "funmenu",
    desc: "menu the bot",
    category: "menu",
    react: "😎",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        let dec = `╭━━〔 *Fun Menu* 〕━━┈⊷
┃⚈╭─────╾╾╾╾╾────☯
┃⚈┃• insult
┃⚈┃• hack
┃⚈┃• joke
┃⚈┃• heart 
┃⚈┃• happy 
┃⚈┃• sad
┃⚈┃• angry 
┃⚈┃• shy
┃⚈┃• kiss
┃⚈┃• moon
┃⚈┃• cunfuzed
┃⚈┃• hand
┃⚈┃• nikal
┃⚈└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/7a63r4.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363321103874131@newsletter',
                        newsletterName: 'ᴍᴠᴇʟᴀsᴇ ᴍᴅ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// other menu

cmd({
    pattern: "othermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Other Menu* 〕━━┈⊷
┃⸔╭─────╾╾╾╾╾────☯
┃⸔┃• fact
┃⸔┃• font
┃⸔┃• define
┃⸔┃• news
┃⸔┃• movie
┃⸔┃• weather
┃⸔┃• srepo
┃⸔┃• insult
┃⸔┃• save
┃⸔┃• wikipedia
┃⸔┃• gpass
┃⸔┃• githubstalk
┃⸔┃• yts
┃⸔┃• ytv
┃⸔└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/7a63r4.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363321103874131@newsletter',
                        newsletterName: 'ᴍᴠᴇʟᴀsᴇ ᴍᴅ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// main menu

cmd({
    pattern: "mainmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🗿",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Main Menu* 〕━━┈⊷
┃⸕╭─────╾╾╾╾╾────☯
┃⸕┃• ping
┃⸕┃• alive
┃⸕┃• runtime
┃⸕┃• uptime 
┃⸕┃• repo
┃⸕┃• owner
┃⸕┃• menu
┃⸕┃• menu2
┃⸕┃• restart
┃⸕└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/7a63r4.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363321103874131@newsletter',
                        newsletterName: 'ᴍᴠᴇʟᴀsᴇ ᴍᴅ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// owner menu

cmd({
    pattern: "ownermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🔰",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Owner Menu* 〕━━┈⊷
┃◉╭─────╾╾╾╾╾────☯
┃◉┃• owner
┃◉┃• menu
┃◉┃• menu2
┃◉┃• listcmd
┃◉┃• allmenu
┃◉┃• repo
┃◉┃• block
┃◉┃• unblock
┃◉┃• fullpp
┃◉┃• setpp
┃◉┃• restart
┃◉┃• shutdown
┃◉┃• updatecmd
┃◉┃• alive
┃◉┃• ping 
┃◉┃• gjid
┃◉┃• jid
┃◉└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/7a63r4.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363321103874131@newsletter',
                        newsletterName: 'ᴍᴠᴇʟᴀsᴇ ᴍᴅ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// convert menu

cmd({
    pattern: "convertmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🥀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Convert Menu* 〕━━┈⊷
┃⚈╭─────╾╾╾╾╾────☯
┃⚈┃• sticker
┃⚈┃• sticker2
┃⚈┃• fancy
┃⚈┃• take
┃⚈┃• tomp3
┃⚈┃• tts
┃⚈┃• trt
┃⚈└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/7a63r4.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363321103874131@newsletter',
                        newsletterName: 'ᴍᴠᴇʟᴀsᴇ ᴍᴅ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// anmie menu 

cmd({
    pattern: "animemenu",
    desc: "menu the bot",
    category: "menu",
    react: "🧚",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
          let dec = `╭━━〔 *Anime Menu* 〕━━┈⊷
┃⚈╭─────╾╾╾╾╾────☯
┃⚈┃• dog
┃⚈┃• king
┃⚈┃• animegirl
┃⚈┃• animegirl
┃⚈┃• animegirl1
┃⚈┃• animegirl2
┃⚈┃• animegirl3
┃⚈┃• animegirl4
┃⚈┃• animegirl5
┃⚈└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/7a63r4.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363321103874131@newsletter',
                        newsletterName: 'ᴍᴠᴇʟᴀsᴇ ᴍᴅ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// ai menu 

cmd({
    pattern: "aimenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Ai Menu* 〕━━┈⊷
┃⚈╭─────╾╾╾╾╾────☯
┃⚈┃• ai
┃⚈┃• gpt
┃⚈┃• meta
┃⚈┃• blackbox
┃⚈┃• gpt4
┃⚈┃• bing
┃⚈┃• copilot
┃⚈└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/7a63r4.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363321103874131@newsletter',
                        newsletterName: 'ᴍᴠᴇʟᴀsᴇ ᴍᴅ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

