var express = require('express');
var router = express.Router();

const {
    exec
} = require('child_process');


/* GET users listing. */
router.get('/print-in-display', function (req, res, next) {
    if (req.query.message) {
        exec(`echo ${req.query.message}>COM1`, (err, stdout, stderr) => {
            // console.log(stdout);
            res.send(`<pre>${stdout || err}</pre>`);
        });
    } else {
        exec(`ipconfig`, (err, stdout, stderr) => {
            // console.log(stdout);
            res.send(`<pre>${stdout}</pre>`);
        });
    }
});

module.exports = router;