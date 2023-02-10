const sgMail = require("@sendgrid/mail");
const path = require('path');

require('dotenv').config({ path: path.join('.env') });
// get the Console class
const { Console } = require("console");
// get fs module for creating write streams
const fs = require("fs");
// make a new logger
const myLogger = new Console({
    stdout: fs.createWriteStream("logger.txt"),
    stderr: fs.createWriteStream("error-log.txt"),
});

require('dotenv').config({ path: path.join('.env') });
sgMail.setApiKey(process.env.SG_API);

templates = {
    register : "d-a3119996027943a9b9ff4a729bca050d",
    standup: "d-c33612912a664069a3cfc9bed6f2b90c"
}

const sgMailer = (data) => {
    let msg = "";
    if(data.templateName === "standup") {
        msg = {
            to: data.receiver,
            from: process.env.SG_SENDER,
            templateId: templates[data.templateName],
            dynamic_template_data: {
                name: data.name,
                id: data.id
            }
        }
    } else {
        msg = {
            to: data.receiver,
            from: process.env.SG_SENDER,
            templateId: templates[data.templateName],
            dynamic_template_data: {
               name: data.name,
               event_name: data.event_names
            }
        };
    }
    sgMail.send(msg, (error, result) => {
       if (error) {
           console.log(error.response.body);
           myLogger.error(error.response.body)
       } else {
           console.log("Mail to " + data.receiver + " sent");
           myLogger.log("Mail to " + data.receiver + " sent");
       }
    });
}

module.exports = { sgMailer }