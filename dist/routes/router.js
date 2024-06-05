"use strict";
const express_1 = require("express");
const api_controllers_1 = require("../controllers/api_controllers");
const router = (0, express_1.Router)();
router.get('/', api_controllers_1.api_test);
router.post('/sendMail', api_controllers_1.sendMail);
module.exports = router;
