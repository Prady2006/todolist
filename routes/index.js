const express = require('express');

const router = express.Router();

const app = express();
// fetching home controller 
const homeController = require('../controllers/home_controller');

app.use(express.urlencoded({extended: true}));
router.get('/',homeController.home);

router.post('/create-item',homeController.createTodo);

module.exports = router; 