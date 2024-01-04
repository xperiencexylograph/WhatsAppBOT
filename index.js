const BotName = '🤖 Odzay Osbourne BOT 🤖';
const instagramlu = 'https://www.instagram.com/odzayrose';
const whatsapplu = 'wa.me/+6285891027666';
const kapanbotaktif = 'Jam 7 Pagi - 11 Malam';
const grupch1 = 'Tidak Tersedia';
const grupch2 = 'Tidak Tersedia';
const grupch3 = 'Tidak Tersedia';

const qrcode = require("qrcode-terminal");
const moment = require("moment");
const cheerio = require("cheerio");
const get = require('got')
const fs = require("fs");
const dl = require("./lib/downloadImage.js");
const fetch = require('node-fetch');
const urlencode = require("urlencode");
const axios = require("axios");
const imageToBase64 = require('image-to-base64');
const menu = require("./lib/menu.js");
const donate = require("./lib/donate.js");
const info = require("./lib/info.js");

const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey,
} = require("@adiwajshing/baileys");
var jam = moment().format("HH:mm");

function foreach(arr, func)
{
   for (var i in arr)
   {
      func(i, arr[i]);
   }
}
const conn = new WAConnection()
conn.on('qr', qr =>
{
   qrcode.generate(qr,
   {
      small: true
   });
   console.log(`[ ${moment().format("HH:mm:ss")} ] WhatsApp BOT Ready Scan QR Now!`);
});

conn.on('credentials-updated', () =>
{
   console.log(`credentials updated$`)
   const authInfo = conn.base64EncodedAuthInfo()
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && conn.loadAuthInfo('./session.json')

conn.connect();

conn.on('user-presence-update', json => console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by @_sadboy.ig`))
conn.on('message-status-update', json =>
{
   const participant = json.participant ? ' (' + json.participant + ')' : ''
   console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by @_sadboy.ig`)
})

conn.on('message-new', async(m) =>
{
   const messageContent = m.message
   const text = m.message.conversation
   let id = m.key.remoteJid
   const messageType = Object.keys(messageContent)[0]
   let imageMessage = m.message.imageMessage;
   console.log(`[ ${moment().format("HH:mm:ss")} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`);

if (text.includes("#buatgrup"))
   {
var nama = text.split("#buatgrup")[1].split("-nomor")[0];
var nom = text.split("-nomor")[1];
var numArray = nom.split(",");
for ( var i = 0; i < numArray.length; i++ ) {
    numArray[i] = numArray[i] +"@s.whatsapp.net";
}
var str = numArray.join("");
console.log(str)
const group = await conn.groupCreate (nama, str)
console.log ("created group with id: " + group.gid)
conn.sendMessage(group.gid, "Hello Everyone", MessageType.extendedText)

}

// FF ODZAY OD
if(text.includes("$cek")){
var num = text.replace(/$cek/ , "")
var idn = num.replace("0","+62");

console.log(id);
const gg = idn+'@c.us'

const exists = await conn.isOnWhatsApp (gg)
console.log(exists);
conn.sendMessage(id ,`${gg} ${exists ? " exists " : " does not exist"} on WhatsApp`, MessageType.text)
}

//Chat ODZAY ID
else if (text == 'salam'){
conn.sendMessage(id, 'Waalaikumsalam, Ketik #help/#info/#donasi.' ,MessageType.text);
}
else if (text == 'Salam'){
conn.sendMessage(id, 'Waalaikumsalam, Ketik #help/#info/#donasi.' ,MessageType.text);
}
else if (text == 'assalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam, Ketik #help/#info/#donasi.' ,MessageType.text);
}
else if (text == 'Assalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam, Ketik #help/#info/#donasi.' ,MessageType.text);
}
else if (text == 'p'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi.' ,MessageType.text);
}
else if (text == 'P'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi.' ,MessageType.text);
}
else if (text == 'Halo'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi.' ,MessageType.text);
}
else if (text == 'Asu'){
conn.sendMessage(id, 'Gak boleh kasar lu Asw.' ,MessageType.text);
}
else if (text == '$owner'){
conn.sendMessage(id, 'Owner wa.me/+6285891027666' ,MessageType.text);
}
else if (text == '$creator'){
conn.sendMessage(id, 'Creator wa.me/+6285891027666' ,MessageType.text);
}
else if (text == 'odzay'){
conn.sendMessage(id, 'Aku BOT nya Odzay Osbourne.' ,MessageType.text);
}
else if (text == 'Odzay'){
conn.sendMessage(id, 'Aku BOT nya Odzay Osbourne.' ,MessageType.text);
}
else if (text == 'ngentod'){
conn.sendMessage(id, 'Ngentod Bapak kau_-' ,MessageType.text);
}
else if (text == 'Ngentod'){
conn.sendMessage(id, 'Ngentod Bapak kau_-' ,MessageType.text);
}
else if (text == 'anjing'){
conn.sendMessage(id, 'Jangan toxic anjing.' ,MessageType.text);
}
else if (text == 'Anjing'){
conn.sendMessage(id, 'Jangan toxic anjing.' ,MessageType.text);
}
else if (text == 'bacot'){
conn.sendMessage(id, 'lu bacot_-' ,MessageType.text);
}
else if (text == 'Bacot'){
conn.sendMessage(id, 'lu bacot_-' ,MessageType.text);
}
else if (text == 'Test'){
conn.sendMessage(id, 'Test 1,2,3 ketik #help' ,MessageType.text);
}
else if (text == 'test'){
conn.sendMessage(id, 'Test 1,2,3 ketik #help' ,MessageType.text);
}
else if (text == 'kontol'){
conn.sendMessage(id, 'Siapa yang kontol?' ,MessageType.text);
}
else if (text == 'Kontol'){
conn.sendMessage(id, 'Siapa yang kontol?' ,MessageType.text);
}
else if (text == 'bot'){
conn.sendMessage(id, 'Aku Bot...ketik #help.'  ,MessageType.text);
}
else if (text == 'Bot'){
conn.sendMessage(id, 'Aku Bot...ketik #help.'  ,MessageType.text);
}
else if (text == 'Hai'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi.' ,MessageType.text);
}
else if (text == 'Woi'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi.' ,MessageType.text);
}
else if (text == 'Eoy'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi.' ,MessageType.text);
}
else if (text == 'Hi'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi.' ,MessageType.text);
}
else if (text == 'Gan'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi.' ,MessageType.text);
}
else if (text == 'Sis'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi.' ,MessageType.text);
}
else if (text == 'Bro'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi.' ,MessageType.text);
}
else if (text == 'Min'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi.' ,MessageType.text);
}
else if (text == 'Sayang'){
conn.sendMessage(id, 'Iyah Sayang ><' ,MessageType.text);
}
else if (text == 'Ayang'){
conn.sendMessage(id, 'Iyah Sayangku ><' ,MessageType.text);
}
else if (text == 'I love u'){
conn.sendMessage(id, 'love you too sayang' ,MessageType.text);
}
else if (text == 'Mas'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi.' ,MessageType.text);
}
else if (text == 'Mba'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi.' ,MessageType.text);
}
else if (text == 'Bre'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi.' ,MessageType.text);
}
else if (text == 'Cuy'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi.' ,MessageType.text);
}
else if (text == 'Euy'){
conn.sendMessage(id, 'Ya?, Ketik #help/#info/#donasi.' ,MessageType.text);
}
else if (text == 'makasi'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Makasi'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'makasih'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Makasih'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'thank'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Thank'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'thanks'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Thanks'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'daus'){
conn.sendMessage(id, 'NGENTOT' ,MessageType.text);
}
else if (text == 'Daus'){
conn.sendMessage(id, 'ANJINK' ,MessageType.text);
}
else if (text == 'DAUS'){
conn.sendMessage(id, 'BANGSAT' ,MessageType.text);
}
else if (text == 'pecel'){
conn.sendMessage(id, 'Gas' ,MessageType.text);
}
else if (text == 'Pecel'){
conn.sendMessage(id, 'Gas' ,MessageType.text);
}

// Fitur ODZAY OD

if (text.includes('$nulis')){
  const text = text.replace(/$nulis /, '')
    axios.get('http://salism3.pythonanywhere.com/write?text=${text}') .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[ WAIT ] Sedang Di Proses⏳', MessageType.text)
            const buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}


if (text.includes("$say")){
  const teks = text.replace(/$say /, "")
conn.sendMessage(id, teks, MessageType.text)
}

if (text.includes("$ytmp3")){
const teks = text.replace(/$ytmp3 /, "")
axios.get(`https://alfians-api.herokuapp.com/api/yta?url=${teks}`).then((res) => {
	conn.sendMessage(id, '[ WAIT ] Sedang Di Proses⏳', MessageType.text)
    let hasil = `✅Lagu Berhasil Di Buat.\nKlik Link Dibawah🗡️\n\nJudul: ${res.data.title}\n\nUkuran Audio: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("$ytmp4")){
const teks = text.replace(/$ytmp4 /, "")
axios.get(`https://alfians-api.herokuapp.com/api/ytv?url=${teks}`).then((res) => {
	conn.sendMessage(id, '[ WAIT ] Sedang Di Proses⏳', MessageType.text)
    let hasil = `✅Video Berhasil Di Buat.\nKlik Link Dibawah🗡️\n\nJudul: ${res.data.title}\n\nUkuran Video: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("$twt")){
const teks = text.replace(/$twt /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/twit?url=${teks}&apiKey=zFuV88pxcIiCWuYlwg57`).then((res) => {
	conn.sendMessage(id, '[ WAIT ] Sedang Di Proses⏳', MessageType.text)
    let hasil = `✅Berhasil$ Silahkan Download Hasilnya.\nKlik Link Dibawah🗡️\n\nSize: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("$tts")){
const teks = text.replace(/$tts /, "")
const gtts = (`https://rest.farzain.com/api/tts.php?id=${teks}&apikey=O8mUD3YrHIy9KM1fMRjamw8eg`)
   conn.sendMessage(id, 'Copy All And Search On Google', MessageType.text)
 conn.sendMessage(id, gtts ,MessageType.text);
}

if (text.includes("$tiktok")) {
const tictoc = text.replace(/$tiktok /, "")
axios.get(`https://st4rz.herokuapp.com/api/tiktok?url=${tictoc}`).then((res) => {
	 conn.sendMessage(id, '[ WAIT ] Sedang Di Proses⏳', MessageType.text)
     let titoe = `✅Berhasil$$$ Silahkan Download Hasilnya.\nKlik link Dibawah🗡️\n\nJudul: ${res.data.deskripsi} \n\nDurasi: ${res.data.durasi}\n\nNama: ${res.data.nama}\n\nUrl: ${res.data.urlvideo}`;
conn.sendMessage(id, titoe, MessageType.text);
})
}

if (text.includes("$fb")){
const teks = text.replace(/$fb /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/epbe?url=${teks}&apiKey=zFuV88pxcIiCWuYlwg57`).then((res) => {
    let hasil = `Download Link Dibawah.\n\nJudul: ${res.data.title}\n\nSize: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("$ig")){
const teks = text.replace(/$ig /, "")
axios.get(`https://st4rz.herokuapp.com/api/ig?url=${teks}`).then((res) => {
    let hasil = `Download Link Dibawah.\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("$wiki")){
const teks = text.replace(/$wiki /, "")
axios.get(`https://st4rz.herokuapp.com/api/wiki?q=${teks}`).then((res) => {
	conn.sendMessage(id, '[ WAIT ] Sedang Di Proses⏳', MessageType.text)
    let hasil = `📝Menurut Wikipedia:\n\n${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("$sholat")){
  const teks = text.replace(/$sholat /, "")
  axios.get(`https://api.haipbis.xyz/jadwalsholat?daerah=${teks}`).then ((res) =>{
  conn.sendMessage(id, '[ WAIT ] Sedang Di Proses⏳', MessageType.text)
  let hasil = `Jadwal Sholat Di ${teks} Hari ini adalah\n\n⚡Imsyak : ${res.data.Imsyak}\n⚡Subuh : ${res.data.Subuh} WIB\n⚡Dzuhur : ${res.data.Dzuhur}WIB\n⚡Ashar : ${res.data.Ashar} WIB\n⚡Maghrib : ${res.data.Maghrib}\n⚡Isya : ${res.data.Isya} WIB\n⚡Tengah Malam : ${res.data.Dhuha} WIB`;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
else if (text == '$quran'){
axios.get('https://api.banghasan.com/quran/format/json/acak').then((res) => {
    const sr = /{(.*?)}/gi;
    const hs = res.data.acak.id.ayat;
    const ket = `${hs}`.replace(sr, '');
    let hasil = `[${ket}]   ${res.data.acak.ar.teks}\n\n${res.data.acak.id.teks}(QS.${res.data.surat.nama}, Ayat ${ket})`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text == '#help'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, menu.menu(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == '#donate'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) ,MessageType.text);
}
else if (text == '$donasi'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) ,MessageType.text);
}
else if (text == '#DONATE'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) ,MessageType.text);
}
else if (text == '#DONASI'){
  const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) ,MessageType.text);
}
else if (text == '#info'){
  const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, info.info(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == '$foto'){
conn.sendMessage(id, 'Kirim $foto Cewek/Cowok\n\nContoh: $foto cewek' ,MessageType.text);
}
   if (messageType == 'imageMessage')
   {
      let caption = imageMessage.caption.toLocaleLowerCase()
      const buffer = await conn.downloadMediaMessage(m)
      if (caption == '$sticker')
      {
      	
         const stiker = await conn.downloadAndSaveMediaMessage(m)

         const
         {
            exec
         } = require("child_process");
         exec('cwebp -q 50 ' + stiker + ' -o temp/' + jam + '.webp', (error, stdout, stderr) =>
         {
         	conn.sendMessage(id, '[ WAIT ] Sedang Di Proses⏳', MessageType.text)
            let stik = fs.readFileSync('temp/' + jam + '.webp')
            conn.sendMessage(id, stik, MessageType.sticker)
         });
      }
   }

   if (messageType === MessageType.text)
   {
      let is = m.message.conversation.toLocaleLowerCase()

      if (is == '$pantun')
      {

         fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-pantun-pakboy.txt')
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               let pjr = tod[Math.floor(Math.random() * tod.length)];
               let pantun = pjr.replace(/pjrx-line/g, "\n");
               conn.sendMessage(id, pantun, MessageType.text)
            });
      }

   }
   if (text.includes("$covid"))
   {
const get = require('got')
    const body = await get.post('https://api.kawalcorona.com/indonesia', {

    }).json();
    var positif = (body[0]['positif']);
    var sembuh  = (body[0]['sembuh']);
    var meninggal = (body[0]['meninggal']);
    var dirawat = (body[0]['dirawat']);
    console.log(body[0]['name'])
    conn.sendMessage(id,`🗂️DATA WABAH COVID-19 TERBARU DI INDONESIA\n\n📈Positif ==> ${positif} \n📉Sembuh ==> ${sembuh} \n📋Meninggal ==> ${meninggal}\n🗒️Dirawat ==> ${dirawat}`, MessageType.text);
}
   if (text.includes("$quotes"))
   {
      var url = 'https://jagokata.com/kata-bijak/acak.html'
      axios.get(url)
         .then((result) =>
         {
            let $ = cheerio.load(result.data);
            var author = $('a[class="auteurfbnaam"]').contents().first().text();
            var kata = $('q[class="fbquote"]').contents().first().text();

            conn.sendMessage(
               id,
               `
_${kata}_
        
    
	*~${author}*
         `, MessageType.text
            );

         });
   }
   else if (text.includes("$nama ")) 
  {
    const cheerio = require('cheerio');
    const request = require('request');
    var nama = text.split("$nama ")[1];
    var req = nama.replace(/ /g,"+");
    request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://www.primbon.com/arti_nama.php?nama1='+ req +'&proses=+Submit%21+',
      },function(error, response, body){
          let $ = cheerio.load(body);
          var y = $.html().split('arti:')[1];
          var t = y.split('method="get">')[1];
          var f = y.replace(t ," ");
          var x = f.replace(/<br\s*[\/]?>/gi, "\n");
          var h  = x.replace(/<[^>]*>?/gm, '');
      console.log(""+ h);
      conn.sendMessage(id,
            `
      Arti dari namamu adalah



❣️❣️❣️❣️❣️❣️❣️❣️❣️

         Nama _*${nama}*_ ${h}
         
❣️❣️❣️❣️❣️❣️❣️❣️❣️

`,
 MessageType.text);
  });
  }
  else if (text.includes("$pasangan ")) {
    const request = require('request');
    var gh = text.split("$pasangan ")[1];
    var namamu = gh.split("&")[0];
    var pasangan = gh.split("&")[1];
    request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://www.primbon.com/kecocokan_nama_pasangan.php?nama1='+ namamu +'&nama2='+ pasangan +'&proses=+Submit%21+',

    },function(error, response, body){
        let $ = cheerio.load(body);
      var y = $.html().split('<b>KECOCOKAN JODOH BERDASARKAN NAMA PASANGAN</b><br><br>')[1];
        var t = y.split('.<br><br>')[1];
        var f = y.replace(t ," ");
        var x = f.replace(/<br\s*[\/]?>/gi, "\n");
        var h  = x.replace(/<[^>]*>?/gm, '');
        var d = h.replace("&amp;", '&')
      console.log(""+ d);
      conn.sendMessage(id, `

💘💘💘💘💘💘💘💘

 *Kecocokan berdasarkan nama*


 ${d}

💘💘💘💘💘💘💘💘
    `, MessageType.text);
  });
  }
   if (text.includes("$foto cewek"))
   {
    var items = ["ullzang girl", "cewe cantik", "hijab cantik", "korean girl", "remaja cantik", "cewek korea", "cewek jepang"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;
    
    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek)
        .then(
            (response) => {
    conn.sendMessage(id, '[ WAIT ] Sedang Di Proses⏳', MessageType.text)
	var buf = Buffer.from(response, 'base64');
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }

   if (text.includes("$foto cowok"))
   {
    var items = ["cowo ganteng", "cogan", "korean boy", "chinese boy", "japan boy", "cowok indo ganteng", "cowok korea"];
    var cowo = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cowo;
    
    axios.get(url)
      .then((result) => {
        var z = JSON.parse(JSON.stringify(result.data));
        var cowok =  z[Math.floor(Math.random() * z.length)];
        imageToBase64(cowok) 
        .then(
            (response) => {
  conn.sendMessage(id, '[ WAIT ] Sedang Di Proses⏳', MessageType.text)
  var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }

if (text.includes("$fotoanime"))
   {
    var items = ["anime girl", "anime cantik", "anime", "anime aesthetic", "anime hd", "gambar anime hd"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
    conn.sendMessage(id, '[ WAIT ] Sedang Di Proses⏳', MessageType.text)
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }
 
if (text.includes("$lirik")){
	const teks = text.split("$lirik")[1]
	axios.get(`http://scrap.terhambar.com/lirik?word=${teks}`).then ((res) => {
	     conn.sendMessage(id, '[ WAIT ] Sedang Di Proses⏳', MessageType.text)
	 	let hasil = `🎵Lirik Lagu🎵${teks} \n\n\n ${res.data.result.lirik}`
	conn.sendMessage(id, hasil, MessageType.text)
	})
}
if (text.includes("$alay")){
	const alay = text.split("$alay")[1]
	axios.get(`https://api.terhambar.com/bpk?kata=${alay}`).then ((res) =>
		{ let hasil = `${res.data.text}`
		conn.sendMessage(id, hasil, MessageType.text)
	})
}

})

