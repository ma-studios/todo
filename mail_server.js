const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const route = express.Router();
const port = process.env.PORT || 5000;

app.use('/v1', route);
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});

var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	port: 465, 
	host: "smtp.gmail.com",
	auth: {
		user: '1o4apredavanja@gmail.com',
		pass: 'onlinepredavanja',
	},
	secure: true,
});

const mailData = {from: 'youremail@gmail.com',  // sender address
	to: 'myfriend@gmail.com',   // list of receivers
	subject: 'Sending Email using Node.js',
	text: 'That was easy!'
	html: '<b>Hey there! </b>
	<br> This is our first message sent with Nodemailer<br/>',
};

transporter.sendMail(mailData, function (err, info) {
	if(err)
		console.log(err)
	else
		console.log(info);
});
