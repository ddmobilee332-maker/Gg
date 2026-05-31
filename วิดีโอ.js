const ytdl = require('ytdl-core');

async function ดึงข้อมูลคลิป(url) {
    try {
        const info = await ytdl.getInfo(url);
        const details = info.videoDetails;
        
        // ค้นหาฟอร์แมตที่เป็นเสียงอย่างเดียว
        const audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
        const audioUrl = audioFormats.length > 0 ? audioFormats[0].url : null;

        return {
            หัวข้อ: details.title,
            ช่อง: details.author.name,
            ความยาว: details.lengthSeconds,
            ยอดวิว: parseInt(details.viewCount).toLocaleString('th-TH'),
            ลิงก์เสียง: audioUrl
        };
    } catch (error) {
        return null;
    }
}

module.exports = { ดึงข้อมูลคลิป };
