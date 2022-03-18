// ~~~~~~~~~~~~~~~~~~~~~~~MAIL-API~~~~~~~~~~~~~~~~~~~~~~~
const ProtonMail = require('protonmail-api');
const sendMail = async () =>
{
	const pm = await ProtonMail.connect(
		{
			username: 'nemoj_vise_molimte@protonmail.com',
			password: 'youngelitenigga'
		}
	);

	await pm.sendEmail({
		to: 'mdjukan@protonmail.com',
		subject: 'Send email tutorial',
		body: 'Hello world'
	});

	console.log( "Mail sent" );
	pm.close();
}

// ~~~~~~~~~~~~~~~~~~~~~~~SERVER~~~~~~~~~~~~~~~~~~~~~~~
const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

app.use(express.urlencoded({ extended: true })); // New
app.use(express.json()); // New

app.post( '/', ( req,res ) =>
	{
		const mail_data = req.body;
		console.log( mail_data );
	}
);

app.listen(port, () => console.log(`Listening on port ${port}`));
