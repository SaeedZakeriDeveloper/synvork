const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vahid@synvork.fr',
        pass: 'ygrrxqrqvujaeeqc'
    }
});

const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    })
);

app.post('/submit_contactForm', (req, res) => {
    const body = req.body;
    const firstName = body.firstName;
    const lastName = body.lastName;
    const email = body.email;
    const contactNumber = body.contactNumber;
    const message = body.message;

    var mailOptions = {
        from: 'vahid@synvork.fr',
        to: 'vahid.zakeri@synvork.fr',
        subject: 'Contact our team from synvork',
        text: `First Name: ${firstName}\n Last Name: ${lastName}\n Email: ${email}\n Contact Number: ${contactNumber}\n Message: ${message}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.status(500).send("Failed to send the message. Please try again later.");
        } else {
            res.status(200).send("Message sent successfully!");
        }
    });

});

app.use(express.static(path.join(__dirname, 'public')))

const port = process.env.PORT || 82;
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
