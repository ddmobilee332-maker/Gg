const player = require('play-sound')(opts = {});
const http = require('https');
const fs = require('fs');
const path = require('path');

function เล่นเสียงคลิป(url, callback) {
    if (!url) {
        console.log('\x1b[31m[!] ไม่พบไฟล์เสียงของคลิปนี้\x1b[0m');
        return callback();
    }

    const tempFile = path.join(__dirname, 'temp_audio.mp3');
    const file = fs.createWriteStream(tempFile);

    // ดาวน์โหลดไฟล์เสียงชั่วคราวลงเครื่องเพื่อความเสถียรในการเล่น
    http.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            // สั่งเปิดเสียงในเครื่องเครื่องคอมพิวเตอร์
            player.play(tempFile, (err) => {
                if (err) console.log("\x1b[31m[!] การเล่นเสียงขัดข้อง\x1b[0m");
                // ลบไฟล์ขยะหลังจากเล่นเสร็จ
                if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
                callback();
            });
        });
    }).on('error', (err) => {
        if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
        callback();
    });
}

module.exports = { เล่นเสียงคลิป };
