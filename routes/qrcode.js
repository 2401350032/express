var express = require('express');
var router = express.Router();
router.get('/', async (req, res) => {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example`;
  res.render('qrcode', {
    title: 'QR CODE',
    qrImageUrl: qrUrl
  });
})
module.exports = router;