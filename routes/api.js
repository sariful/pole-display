var express = require('express');
var router = express.Router();

const {
    exec
} = require('child_process');


/* GET users listing. */
router.get('/print-in-display', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.query.message) {
        exec(`echo ${req.query.message}>COM1`, (err, stdout, stderr) => {
            // console.log(stdout);
            res.json({
                response: stdout,
                error: err
            });
        });
    } else {
        exec(`ipconfig`, (err, stdout, stderr) => {
            // console.log(stdout);
            res.json({
                response: stdout,
                error: err
            });
        });
    }
});

module.exports = router;