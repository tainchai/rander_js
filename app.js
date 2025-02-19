// app.js
const http = require('http');

// สร้างเซิร์ฟเวอร์ HTTP
const server = http.createServer((req, res) => {
  res.statusCode = 200; // กำหนดสถานะของการตอบกลับ
  res.setHeader('Content-Type', 'text/plain'); // กำหนดประเภทเนื้อหาที่จะส่ง
  res.end('Hello, Node.js!'); // ส่งข้อความกลับไป
});

// กำหนดพอร์ตและเริ่มเซิร์ฟเวอร์
server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
