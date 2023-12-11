const { Router } = require('express');
const apiController = require('../controllers/api_controllers');

const router = Router();

router.get('/', apiController.api_test);
// router.get('/save_projects', apiController.save_projects);
router.get('/get_projects', apiController.get_projects);
router.get('/get_single_project/:id', apiController.get_single_project);

module.exports = router;
