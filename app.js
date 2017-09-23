const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = '8080';
const apiKey ='MDozM2RjYmQ4Mi04ZWE2LTExZTctODQ2MC05ZjgzMmZjNzMzNzc6R2xPNzVaZ3VZSk5CWGFmVVdhZjZqQXh4SDdTaWVPR3JGeUpT';


app.use(express.static('public'));

app.get('/api', (req, res) =>{
	//fetch takes two arguments, the url you are trying to hit and an object literal 
	fetch('http://lcboapi.com/products',{
		method:'get'
	}).then(resp => {
		return resp.json();
	}).then(data => {
		res.status(200).json(data);
	}).catch(err => {
		res.status(500).json({message: err});
	});
}); 



app.listen(port, () =>{
	console.log(`your app is running on port ${port}!`);
});


