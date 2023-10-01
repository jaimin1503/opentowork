const express = require('express');
const router = express.router;

router.get('/', (req,res)=>{
	obj = {
		a:'jaimin',
		number: '30'
	}
	res.json(obj)
})

module.exports = router