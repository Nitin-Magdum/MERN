const express = require('express');
const { additionResponce } = require('../Controller/Controller');
const router = express.Router();

router.post('/additionResponce', additionResponce);


module.exports=router;