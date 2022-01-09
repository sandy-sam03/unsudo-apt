let fetch = require("node-fetch")
let axios = require("axios")
let handler = async (m, { conn, text }) => {
  let chat = global.db.data.chats[m.chat]
      if (!text) return m.reply("sahi se likh bc")
      await m.reply(global.wait)
     try {
      let res = await axios.get(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=1cb304dc7ca35c53cee66a60&query=japanese`)
      let json = res.data
      //let ress = json.result
      let hsl = `*MUTH MOVEMENT*\n\n`
      for (let i = 0; i < json.result.length; i++) {
hsl += `*Title:* ${json.result[i].title}\n`
hsl += `*Link:*\n${json.result[i].link}\n\n`
hsl += `*Duration:* ${json.result[i].duration}\n`
hsl += `*Views:* ${json.result[i].views}\n`
hsl += `*Rating:* ${json.result[i].rating}\n`
         }
           hsl += '*© Araaa•BOT*'
        conn.reply(m.chat, hsl, m)
    }catch(e){
        m.reply("ERROR")
        console.log(e)
    }
   }
handler.help = ['xhamstersearch <milf>']
handler.command = /^(xhamster|xhamstersearch|xs)$/
module.exports = handler
