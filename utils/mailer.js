const nodemailer = require('nodemailer');
const path = require('path')
require('dotenv').config({ path: path.join('.env') });

// async..await is not allowed in global scope, must use a wrapper
const mailer = async (to, subject, message) => {
    try {
        var smtpConfig = {
            service: 'gmail',
            
            auth: {
                type:'OAuth2',
                
                user: process.env.CLIENT_NAME,
                pass: process.env.CLIENT_PASS,
                clientId:process.env.CLIENT_AUTH,
                clientSecret:process.env.CLIENT_SECRET,
                refreshToken:process.env.REFRESH_TOKEN
            },
        };
        var transporter = nodemailer.createTransport(smtpConfig);
        var mailOptions = {
            from: '"Team MES 2023" <mes@gmail.com>', // sender address
            to: to, // list of receivers
            subject: subject, // Subject line
            text: subject, // plaintext body
            html: message, // html body
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return console.log(error);
            } else {
                console.log(info.response);
                return transport.close();
            }
        });
        console.log("Email Sent to ",to)
    } catch (error) {
        // console.log(error);
        throw error;
    }
};

module.exports = { mailer };
