var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var mongoose = require('mongoose');
var cinema = require('./Models/Cinema');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8090;
var router = express.Router();

mongoose.connect('mongodb://localhost:27017/cinemas');

app.use(cors());
app.use('/api', router);
app.listen(port);
console.log('REST API is runnning at ' + port);

router.use(function (req, res, next) {
    // do logging 
    // do authentication 
    console.log('Logging of request will be done here');
    next(); // make sure we go to the next routes and don't stop here
});

router.route('/cinemas').post(function (req, res) {
    var p = new cinema();
    p.ObjectId = req.body._id;
    p.Id = req.body.Id;
    p.Name = req.body.Name;
    p.Tag = req.body.Tag;
    p.Address = req.body.Address;
    p.Telephone = req.body.Telephone;
    p.Url = req.body.Url;
    p.Latitude = req.body.Latitude;
    p.Longitude = req.body.Longitude;
    p.NigthPasses = req.body.NigthPasses;
    p.MorningPasses = req.body.MorningPasses;
    p.CheapDay = req.body.CheapDay;
    p.OnlineTickets = req.body.OnlineTickets;
    p.MapUrl = req.body.MapUrl;
    p.TownId = req.body.TownId;
    p.Town = req.body.Town;
    p.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.send({ message: 'Cinema Created !' })
    })
   
});

router.route('/cinemas').get(function (req, res) {
    cinema.find(function (err, cinemas) {
        if (err) {
            res.send(err);
        }
        res.send(cinemas);
    });
});

router.route('/cinemas/:CinemaId').get(function (req, res) {

    cinema.findById(req.params.CinemaId, function (err, cine) {
        if (err)
            res.send(err);
        res.json(cine);
    });
});

router.route('/cinemas/:Id').put(function (req, res) {

    cinema.findById(req.params.Id, function (err, cine) {
        if (err) {
            res.send(err);
        }
        cine.Id = req.body.Id;
        cine.Name = req.body.Name;
        cine.Tag = req.body.Tag;
        cine.Address = req.body.Address;
        cine.Telephone = req.body.Telephone;
        cine.Url = req.body.Url;
        cine.Latitude = req.body.Latitude;
        cine.Longitude = req.body.Longitude;
        cine.NigthPasses = req.body.NigthPasses;
        cine.MorningPasses = req.body.MorningPasses;
        cine.CheapDay = req.body.CheapDay;
        cine.OnlineTickets = req.body.OnlineTickets;
        cine.MapUrl = req.body.MapUrl;
        cine.TownId = req.body.TownId;
        cine.Town = req.body.Town;
        cine.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Cinema updated!' });
        });

    });
});


router.route('/cinemas/:Id').delete(function (req, res) {

    cinema.remove({ _id: req.params.Id }, function (err, cine) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })

});