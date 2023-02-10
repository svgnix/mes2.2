const Participant = require('../../models/Participant');
const { sgMailer } = require('../../utils/sgMailer');
// get the Console class
const { Console, timeStamp } = require("console");
// get fs module for creating write streams
const fs = require("fs");

// make a new logger
const myLogger = new Console({
    stdout: fs.createWriteStream("logger.txt"),
    stderr: fs.createWriteStream("error-log.txt"),
});

const registerParticipant = async (req, res) => {
    try {
        console.log(req.body)
        const date = new Date();
        offset = (60 * 5 + 30) * 60 * 1000;
        var ISTTime = new Date(date.getTime() + offset);
        let timeStamp = ISTTime;
        const {
            name,
            college,
            yearOfStudy,
            phoneNum,
            email,
            learnerId,
            regNum,
            regEvents,
            keyNote,
            workshop,
            moneyQuest, 
            panel,
            pitching,
            startupFair,
            debate,
            caseMaze,
            talkSeries,
            workshopOne,
            workshopTwo,
            bizQuiz
        } = req.body
        let participant 
                = await Participant.findOne({ $or: [ { regNum }, { learnerId }, { phoneNum }] });
        if(participant){
            if(regEvents.some(item => participant.regEvents.includes(item))) {
                return res
                    .status(400)
                    .json({ 
                        success: false, 
                        message: "You have already registered for one or more of the events" 
                    })
            } else {
                participant.timeStamp = timeStamp;
                regEvents.forEach(element => {
                    participant.regEvents.push(element)
                })
                participant.isUpdated = true;
                participant.isUpdatedCount = participant.isUpdatedCount + 1 
            }
        } else {
            participant 
            = new Participant({
                
                name,
                college,
                yearOfStudy,
                phoneNum,
                keyNote,
                email,
                learnerId,
                regNum,
                regEvents
            });
        }   
        participant.timeStamp = timeStamp;
        // add event info to participant schema
        if(workshop) {
            participant.workshop.isRegistered = true;
            participant.workshop.expectations = workshop.expectations;
            participant.workshop.questions = workshop.questions;
        }
        if(keyNote) {
            participant.keyNote.isRegistered = true;
        }
        if(caseMaze) {
            participant.caseMaze.isRegistered = true;
        }
        if(moneyQuest) {
            participant.moneyQuest.isRegistered = true;
            participant.moneyQuest.numMems = moneyQuest.numMems;
        }
        if(panel) { 
            participant.panel.isRegistered = true;
            participant.panel.attracted = panel.attracted;
            participant.panel.expectations = panel.expectations;
        }
        if(pitching) {
            participant.pitching.isRegistered = true;
            participant.pitching.companyName = pitching.companyName;
            participant.pitching.compDesc = pitching.compDesc;
            participant.pitching.teamRep = pitching.teamRep;
            participant.pitching.teamMembers = pitching.teamMembers;
            participant.pitching.website = pitching.website;
            participant.pitching.legal = pitching.legal;
            participant.pitching.formed = pitching.formed;  
            participant.pitching.revenue = pitching.revenue;
        }
        if(startupFair) {
            participant.startupFair.isRegistered = true;
            participant.startupFair.name = startupFair.name;
            participant.startupFair.legal = startupFair.legal;
            participant.startupFair.category = startupFair.category;
            participant.startupFair.numDesk = startupFair.numDesk;
            participant.startupFair.describe = startupFair.describe;
            participant.startupFair.website = startupFair.website;
            participant.startupFair.extraServ = startupFair.extraServ;  
        }
        if(debate) {
            participant.debate.isRegistered = true;
            participant.debate.committeePref1 = debate.committeePref1;
            participant.debate.committeePref2 = debate.committeePref2;
            // participant.debate.committeePref3 = debate.committeePref3;
        }
        if(talkSeries) {
            participant.talkSeries.isRegistered = true;
        }
        if(workshopOne) {
            participant.workshopOne.isRegistered = true;
        }
        if(workshopTwo) {
            participant.workshopTwo.isRegistered = true;
        }
        if(bizQuiz) {
            participant.bizQuiz.isRegistered = true;
        }
        
        // send registration confirmation email
        let eventString = "";
        regEvents.forEach((element, index) => {
            if(index !== regEvents.length - 1){
                eventString += (element + ", ")
            } else {
                eventString += element
            }
        });
        const data = {
            receiver: email,
            sender: "mes23.ecellmit@gmail.com",
            templateName: "register",
            event_names: eventString,
          
            name: name
        }
        sgMailer(data);
        participant.mailSent = true;
        await participant.save();  
        return res.status(200).json({ success: true, message: "You have registered successfully!" })
    } catch (error) {
        console.log(error)
        myLogger.error(error)
        return res.status(500).send({
            success: false,
            message: "Internal server error"
        })
    }
}

module.exports = { registerParticipant }
