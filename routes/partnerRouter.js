
const express = require('express');

const partnerRouter = express.Router();




partnerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the campsite: ${req.params.partnerId} to you`);
})

.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.params.partnerId}`);
})

.put( (req, res) => {
    res.write(`Updating the campsite: ${req.params.partnerId}\n`);
    res.end(`Will update the campsite: ${req.body.name}
        with description: ${req.body.description}`);
})

.delete((req, res) => {
    res.end(`Deleting campsite: ${req.params.partnerId}`);
});

partnerRouter.route('/partnerId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the campsite: ${req.params.partnerId} to you`);
})

.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.params.partnerId}`);
})

.put((req, res) => {
    res.write(`Updating the campsite: ${req.params.partnerId}\n`);
    res.end(`Will update the campsite: ${req.body.name}
        with description: ${req.body.description}`);
})

.delete( (req, res) => {
    res.end(`Deleting campsite: ${req.params.partnerId}`);
});
module.exports = partnerRouter;