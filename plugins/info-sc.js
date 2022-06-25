import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://github.com/FahriAdison/Sad-Multi-Device*\nJoim Untuk Mengetahui Update Selanjutnya:https://chat.whatsapp.com/B9cQxA0NWrXHtFclMS5awJ\nSilahkan follow github saya ,Terimakasih`
conn.sendButtonDoc(m.chat, str, wm, 'Thanks','Bilek', ftextt, m)
}
handler.command = handler.help = ['sc']
handler.tags = ['info']

export default handler