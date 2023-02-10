const express = require('express');
const router = express.Router();

const {
    registerValidator,
    standupValidator,
    userValidator
} = require('../middleware/validator');
const {
    registerParticipant
} = require("./event/register");
const {
    registerStandup
} = require("./event/standup");
router.post(
    '/participant/register', 
    registerValidator(),
    userValidator,
    registerParticipant
);
router.post(
    '/standup/register', 
    standupValidator(),
    userValidator,
    registerStandup
);

module.exports = router;