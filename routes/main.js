const express = require('express');
const mainController = require('../controllers/main');
const router = express.Router();

router.post('/user-detail',  mainController.postDetail);
router.get('/',  mainController.getAllTasks);
router.get('/user-edit/:userId',  mainController.getEditTask);
router.post('/user-edit',  mainController.postEditTask);




router.get('/add-new-task',  mainController.getNewTask);
router.post('/add-new-task',  mainController.postNewTask);
router.post('/user-delete',  mainController.deleteUser);


module.exports = router;
