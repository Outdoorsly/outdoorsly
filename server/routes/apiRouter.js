const express = require('express');
const apiController = require('../controllers/api.js');

const router = express.Router();

router.post('/getInput',
    apiController.getInput, 
    apiController.getByLocation,
    apiController.getRecAreaByID,
    (req, res) => {
        res.status(200).json(res.locals.recAreas)
    }
);

router.post('/getCurrent', 
    apiController.getCityName,
    apiController.getByLocation,
    apiController.getRecAreaByID,
    (req, res) => {
        res.status(200).json(res.locals.recAreas)
    }
);
module.exports = router;