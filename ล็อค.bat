@echo off
title PAO EXE BUILDER
echo [+] กำลังติดตั้งโมดูลที่จำเป็น...
call npm install
echo [+] กำลังสร้างไฟล์ เปา.exe ภาษาไทย...
call npm run build
echo [✓] สร้างเสร็จแล้ว! ไฟล์ เปา.exe จะอยู่ในโฟลเดอร์ dist หรือ เปา-win32-x64
pause
