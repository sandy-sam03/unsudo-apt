let fetch = require("node-fetch")
let axios = require("axios")
let handler = async (m, { conn, text }) => {
  let api = (kntl.lolkey)
  let chat = global.DATABASE.data.chats[m.chat]
   if (chat.nsfw) { 
      if (!text) return m.reply("kuch likh")
      await m.reply(global.wait)
     try {
      let res = await axios.get(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=1cb304dc7ca35c53cee66a60&query=${text}`)
      let json = res.data
      //let ress = json.result
      let hsl = `*XNXX SEARCH*\n\n`
      for (let i = 0; i < json.result.length; i++) {
           hsl += `*Title:* ${json.result[i].title}\n`
           hsl += `*Views:* ${json.result[i].views}\n`
           hsl += `*Duration:* ${json.result[i].duration}\n`
           hsl += `*Uploader:* ${json.result[i].uploader}\n`
           hsl += `*Link:*\n${json.result[i].link}\n\n`
         }
           hsl += '*SGDC-BOT*'
        conn.reply(m.chat, hsl, m)
    }catch(e){
        m.reply("ERROR")
        console.log(e)
     }
    } else {
       m.reply('```Perlu Mengaktifkan Mode NSFW```')
    }
   }
handler.command = /^(xnxxsearch|searchxnxx|xnxx)$/
module.exports = handler
