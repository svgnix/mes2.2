const { check, validationResult } = require("express-validator");

const registerValidator = () => {
    return [
        check("name")
        .isLength({min:3})
        .withMessage("Name must be at least 3 letters long"),
        check("email").isEmail().withMessage("Enter a valid Email"),
        check("regNum", "Please enter college registration number")
        .not()
        .isEmpty(),
        check("yearOfStudy", "Please enter your year of study")
        .not()
        .isEmpty(),
        check("phoneNum", "Please enter phone number")
        .not()
        .isEmpty(),
        check("college", "Enter college name").not().isEmpty()
    ];
};

const standupValidator = () => {
    return [
        check("name")
        .isLength({min:3})
        .withMessage("Name must be at least 3 letters long"),
        check("email").isEmail().withMessage("Enter a valid Email"),
        check("regNum", "Please enter college registration number")
        .not()
        .isEmpty(),
        check("college", "Select a college name").not().isEmpty()
    ];
};

const userValidator = (req, res, next) => {
    const errorArray = validationResult(req)
    if(errorArray.isEmpty()) {
        return next();
    }

    let extractedErrors = [];
    errorArray
    .array()
    .map((err) => extractedErrors.push({ [err.param]: err.msg }));

    return res.send({ success: false, msg: extractedErrors });
};

module.exports = {
    userValidator,
    standupValidator,
    registerValidator
}