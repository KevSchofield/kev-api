const cheerio = require("cheerio")
const axios = require("axios")
const qs = require("qs")

function stickersh(querry) {
        return new Promise((resolve, reject) => {
            axios(`https://getstickerpack.com/stickers?query=` + querry).then((res) => {
                const $ = cheerio.load(res.data);
                const Data = [];
                $('#stickerPacks > div > div:nth-child(3)').each(function (_a, b) {
                    $(b).find('div').each(function (_c, d) {
                        const url = $(d).find('a').attr('href');
                        Data.push(url);
                    });
                });
                const data = [];
                Data.map(tyuzu => {
                    if (tyuzu === undefined)
                        return;
                    data.push(tyuzu);
                });
                const random = data[Math.floor(Math.random() * (data.length))];
                axios.get(random).then(respon => {
                    const $ = cheerio.load(respon.data);
                    const Sticker = [];
                    $('#stickerPack > div > div.row').each(function (_a, b) {
                        $(b).find('div').each(function (_c, d) {
                            const sticker = $(d).find('img').attr('data-src-large');
                            Sticker.push(sticker);
                        });
                    });
                    const data = [];
                    Sticker.map(tyuzu => {
                        if (tyuzu === undefined)
                            return;
                        data.push(tyuzu);
                    });
                    const Format = {
                        Nombre: $('#intro').find('div > div > h1').text().trim(),
                        Creador: $('#intro').find('div > div > h5 > a').text().trim(),
                        Sticker: data
                    };
                    const result = {
                        Estado: respon.status,
                        Autor: "@KevSchofield",
                        Resultado: Format
                    };
                    resolve(result);
                }).catch(reject);
        })
    });
}
const mediafire = async (url) => {
const res = await axios.get(url)
const $ = cheerio.load(res.data)
const dimitriu = []
const enlace = $('a#downloadButton').attr('href')
const tama??o = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '')
const cushh = enlace.split('/')
const nombre = cushh[5]
extension = nombre.split('.')
extension = extension[1]
dimitriu.push({ nombre, extension, tama??o, enlace })
return dimitriu
}
const wikipedia = async (query) => {
const res = await axios.get(`https://es.m.wikipedia.org/w/index.php?search=${query}`)
const $ = cheerio.load(res.data)
const KevK = []
let wiki = $('#mf-section-0').find('p').text()
let thumb = $('#mf-section-0').find('div > div > a > img').attr('src')
thumb = thumb ? thumb : '//pngimg.com/uploads/wikipedia/wikipedia_PNG35.png'
thumb = 'https:' + thumb
let titulo = $('h1#section_0').text()
KevK.push({ wiki, thumb, titulo })
return KevK
}
module.exports.stickersh = stickersh
module.exports.mediafire = mediafire
module.exports.wikipedia = wikipedia