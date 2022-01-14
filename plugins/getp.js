let fs = require('fs');

let handler = async(m, { conn, text, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `Silahkan masukan query voice notes`, m)
  await m.reply('Searching...')

     conn.sendFile(m.chat, fs.readFileSync(`./src/${text}`), 'getvn.opus', null, m, true)
     conn.sendFile(m.chat, fs.readFileSync(`./src/avatar_contact.png`), 'getvn.opus', null, m, true)
     conn.sendFile(m.chat, fs.readFileSync('./desi/(part one) Indian couple Jeet & Pinki Bhabhi fucking - XVIDEOS_com.mp4'), 'getvn.opus', null, m, true)
     conn.sendFile(m.chat, fs.readFileSync('./desi/33. pregnent bhabhi ki chut me land mera - XVIDEOS_com.mp4'), 'getvn.opus', null, m, true)
     conn.sendFile(m.chat, fs.readFileSync('./desi/7552233 desi doodhwali bhabhi ji secretly breast feeding milk devar - XVIDEOS_com.mp4'), 'getvn.opus', null, m, true)
     conn.sendFile(m.chat, fs.readFileSync('./desi/Alone Bhabhi With Devar Hot Sex Scene - XVIDEOS.COM.mp4'), 'getvn.opus', null, m, true)
    } else {
        conn.reply(m.chat, `Query tidak tersedia!\n\nSilahkan ketik ${usedPrefix}listvn untuk lihat query vn yang tersedia.`, m)
    }
}
handler.help = ['getvn <query>']
handler.tags = ['sound']
handler.command = /^(getb)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
