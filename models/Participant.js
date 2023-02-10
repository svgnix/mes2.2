const mongoose = require('mongoose');

const ParticipantSchema = new mongoose.Schema({
    userid: {
        type: Number
    },
    name: {
        type: String, 
        required: true
    },
    college: {
        type: String,
        required: true
    },
    yearOfStudy: {
        type: Number,
        required: true
    },
    phoneNum: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    learnerId: {
        type: String,
        required: true
    },
    regNum: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Date
    },
    isUpdated: {
        type: Boolean,
        default: false
    },
    isUpdatedCount: {
        type: Number,
        default: 1
    },
    mailSent: {
        type: Boolean,
        default: false
    },
    reminderSent: {
        type: Boolean,
        default: false
    },
    // event fields begin
    regEvents: {
        type: Array
    },
    keyNote: {
        isRegistered: {
            type: Boolean,
            default: false
        }
    },
    caseMaze: {
        isRegistered: {
            type: Boolean,
            default: false
        }
    },
    workshopOne: {
        isRegistered: {
            type: Boolean,
            default: false
        }
    },
    workshopTwo: {
        isRegistered: {
            type: Boolean,
            default: false
        }
    },
    
    workshop: {
        isRegistered: {
            type: Boolean,
            default: false
        },
        expectations: {
            type: String
        },
        questions: {
            type: String
        }
    },
    moneyQuest: {
        isRegistered: {
            type: Boolean,
            default: false
        },
        numMems: {
            type: Number,
            default: 4
        }
    },
    panel: {
        isRegistered: {
            type: Boolean
        },
        attracted: {
            type: String
        },
        expectations: {
            type: String
        }
    },
    pitching: {
        isRegistered: {
            type: Boolean,
            default: false
        },
        companyName: {
            type: String
        },
        compDesc: {
            type: String
        },
        teamRep: {
            name: String,
            email: String,
            college: String,
            course: String,
            regNum: Number,
            grad: Number,
            contact: Number
        },
        teamMembers: {
            type: String
        },
        website: {
            type: String,
        },
        legal: {
            type: String
        },
        formed: {
            type: Date
        },
        revenue: {
            type: Number
        }
    },
    startupFair: {
        isRegistered: {
            type: Boolean,
            default: false
        },
        name: {
            type: String
        },
        legal: {
            type: String
        },
        numDesk: {
            type: Number,
            min: 1,
            max: 4
        },
        category: {
            type: String
        },
        describe: {
            type: String
        },
        website: {
            type: String
        },
        extraServ: {
            type: String
        }
    },
    debate: {
        isRegistered: {
            type: Boolean,
            default: false
        },
        committeePref1: {
            type: String
        },
        committeePref2: {
            type: String
        },
        // committeePref3: {
        //     type: String
        // }
    },
    talkSeries: {
        isRegistered: {
            type: Boolean,
            default: false 
        }
    },
    bizQuiz: {
        isRegistered: {
            type: Boolean,
            default: false 
        }
    }
});

module.exports = Participant = mongoose.model('Participant', ParticipantSchema);