const fetch = require('node-fetch')
const { sticker5 } = require('../lib/sticker')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Usage:\n${usedPrefix + command} <text>\n\nContoh:\n${usedPrefix + command} spongebob`
    let res = await fetch(API('zeks', '/api/searchsticker', { q: text }, 'apivinz'))
    if (!res.ok) throw error
    let json = await res.json()
    if (!json.status) throw json
    let result = json.sticker.map((v, i) => `${i + 1}. ${v}`).join('\n')
    m.reply(`*${json.title}*
*Estimated completion:* ${json.sticker.length * 1.5} seconds
`.trim())

    for (let i of json.sticker) {
        stickers = await sticker5(false, i, packname, author)
        await conn.sendFile(m.chat, stickers, ", ", m, 0, { asSticker: true })
    }
    m.reply('_*End*_')

}
handler.help = ['stikerly <text>']
handler.tags = ['sticker']
handler.command = /^(stic?kerly)$/i

handler.limit = 3

module.exports = handler
