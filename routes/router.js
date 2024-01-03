const { Router } = require('express');
const apiController = require('../controllers/api_controllers');
const getProjectsCache = require('../middlewares/getProjectsCache');
const getSingleProjectCache = require('../middlewares/getSingleProjectCache');

const router = Router();

router.get('/', apiController.api_test);
router.get('/save_projects', apiController.save_projects);
router.get('/get_projects', getProjectsCache, apiController.get_projects);
router.get('/get_single_project/:id', getSingleProjectCache, apiController.get_single_project);
router.get('/delete_all_project', apiController.delete_all_project);

module.exports = router;
