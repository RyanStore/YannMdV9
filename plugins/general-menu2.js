import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 ɪɴᴛʀᴏᴅᴜᴄᴛɪᴏɴ 』*', `ᴋᴇᴛɪᴋ #ᴍᴇɴᴜ ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ ʙᴏᴛ 

1# <ɴᴏᴛ ꜱᴘᴀᴍ ʙᴏᴛ>
2# <ɴᴏᴛ ꜱᴇɴᴅ ᴠɪʀᴛᴇx ᴛᴏ ʙᴏᴛ>
3# <ᴊɪᴋᴀ ᴀᴅᴀ ʙᴜɢ ʜᴀʀᴀᴘ ʟᴀᴘᴏʀ ᴏᴡɴᴇʀ ᴀɢᴀʀ ᴅɪ ꜰɪx>

® ᴋᴀʟᴀᴜ ᴋᴀʟɪᴀɴ ʟᴀɢɪ ᴄᴀʀɪ ᴊᴀꜱᴀ ᴀᴅᴍɪɴ ʀᴇᴋʙᴇʀ ʙɪꜱᴀ ɴɪʜ ʙʀᴇᴇ ᴘᴀᴋᴇ ᴊᴀꜱᴀ ᴀᴅᴍɪɴ ɢᴡ ᴀɢᴀʀ ᴛᴇʀʜɪɴᴅᴀʀ ᴅᴀʀɪ ᴘᴇɴɪᴘᴜᴀɴ ᴅᴀʟᴀᴍ ᴊᴜᴀʟ ʙᴇʟɪ ᴀᴋᴜɴ.

® ʀᴀɢᴜ? ʀᴜɢɪᴍᴜ

® ɴʏᴀʀɪ ᴛᴇꜱᴛɪᴍᴏɴɪ ? ʙᴀɴʏᴀᴋ ᴏᴍ ✓

ᴀᴅᴍɪɴ ʀᴇᴋʙᴇʀ ᴀꜱʟɪ ʜᴀɴʏᴀ : 082252285143 

® ᴡᴀꜱᴘᴀᴅᴀ ᴄʟᴏɴᴇ !!!,\nꜱɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ ᴛᴏᴍʙᴏʟ ᴍᴇɴᴜ ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ʙᴏᴛ\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'https://toss.vn/s/rlqSFBzn', 'REFERAL CODE', null, null, [
[`ᴍᴇɴᴜ`, '.m'],
[`\nɢᴡᴇʜ ꜱᴀᴍɴɢᴇ ᴅᴇɴɢᴀɴ ᴀɴɪᴍᴇʜ`, 'Bilek']
], m, {asLocation: true})
}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler