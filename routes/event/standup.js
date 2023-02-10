const Standup = require("./../../models/Standup");
const { sgMailer } = require('../../utils/sgMailer');
// get the Console class
const { Console } = require("console");
// get fs module for creating write streams
const fs = require("fs");

// make a new logger
const myLogger = new Console({
    stdout: fs.createWriteStream("logger.txt"),
    stderr: fs.createWriteStream("error-log.txt"),
});

const registerStandup = async (req, res) => {
    let date = new Date();
    offset = (60 * 5 + 30) * 60 * 1000;
    let ISTTime = new Date(date.getTime() + offset);
    let timeStamp = ISTTime;
    let {
        name,
        college,
        email,
        regNum
    } = req.body;
    let user 
        = await Standup.findOne({ $or: [ {regNum}, { email } ] });
    if(user){
        return res.status(200).json({ success: false, message: "You have already registered for the standup show!" });
    }
    // closing round 1 registrations
    // let round1 = await Standup.find({});
    // if(round1.length === 900) {
    //     return res.status(200).json({ success: false, message: "Round 1 registrations closed! Round 2 opening soon!" });
    // } else {
    // check number of registrations for each college
    // let regs = await Standup.find({ college: college });
    // if(college === "MIT" && regs.length === 1300) {
    //     // don't allow registrations
    //     return res.status(200).json({ success: false, message: "Registrations for MIT are closed!" });
    // } else if (college === "WGSHA" && regs.length === 200) {
    //     // don't allow registrations
    //     return res.status(200).json({ success: false, message: "Registrations for WGSHA are closed!" });
    // } else if (college === "KMC" && regs.length === 200) {
    //     // don't allow registrations
    //     return res.status(200).json({ success: false, message: "Registrations for KMC are closed!" });
    // } else if ((college === "TAPMI" || college === "MCOPS" || college === "OTHERS...") && regs.length === 300) {
    //     // don't allow registrations
    //     return res.status(200).json({ success: false, message: `Registrations for ${college} are closed!` });
    // } else {
    //     // allow registrations
    //     try {
    //         // fetch all users for standup
    //         let user 
    //             = await Standup.find({});
    //         let newUserId;
    //         // find a new userid 
    //         if(user.length === 0) {
    //             newUserId = 1000;
    //         } else {
    //             newUserId = user[user.length-1].userid + 1;
    //         }
    //         let standupreg = new Standup({
    //             name,
    //             college,
    //             email,
    //             regNum,
    //             userid: newUserId
    //         });
    //         standupreg.timeStamp = timeStamp;
    //         const data = {
    //             receiver: email,
    //             sender: "mes22.ecellmit@gmail.com",
    //             templateName: "standup",
    //             name: name,
    //             id: newUserId
    //         }
    //         sgMailer(data);
    //         standupreg.mailSent = true;
    //         await standupreg.save();
    //         myLogger.log("user " + newUserId + " registered")
    //         return res.status(200).json({ success: true, message: "You have registered successfully!" })    
    //     } catch (error) {
    //         myLogger.error(error);
    //         return res.status(500).send({
    //             success: false,
    //             message: "Internal server error"
    //         })
    //     }
    // }
    res.status(200).json({success: true, message: "Registrations have been closed!"});
    // }
}

module.exports = { registerStandup };