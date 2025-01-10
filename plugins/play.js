const config = require('../config')
const {eypz , commands} = require('../command')

eypz({
    pattern: "play",
    desc: "instagram.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{


const yts = require('yt-search')


if(!q){return m.reply("_Enter a Query for download !_")}

let ing = await conn.sendMessage(from, {text:"_Searching...!_"}, {quoted : mek });

const search = await yts(q)
const ydata = search.videos[0];
const yturl = ydata.url



let he = await fetch (`https://api.siputzx.my.id/api/d/ytmp4?url=${yturl}`)

let adata = await he.json();
let data = adata.data
let url = data.dl
let tit = data.title

const ajsal = (`_Downloadiing : ${tit}_\n\n> It may take a few seconds`)

await conn.sendMessage(from, { text: ajsal , edit: ing.key });


await conn.sendMessage(from,{audio: {url:url},mimetype:"audio/mpeg"},{quoted:mek})


}catch(e){
console.log(e)
reply(`${e}`)
}
})
