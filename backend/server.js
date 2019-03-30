const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
app.use(cors());
app.use(bodyParser.json());
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

const outgoingRoutes = express.Router();
app.use('/outgoing', outgoingRoutes);

outgoingRoutes.route('/').get(function (req, res) {
    Outgoing.find(function (err, outgoing) {
        if (err) {
            console.log(err);
        } else {
            res.json(outgoing);
        }
    });
});

outgoingRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Outgoing.findById(id, function (err, outgoing) {
        res.json(outgoing);
    });
});

outgoingRoutes.route('/add').post(function (req, res) {
    let outgoing = new Outgoing(req.body);
    outgoing.save()
        .then(todo => {
            res.status(200).json({ 'outgoing': 'outgoing added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new outgoing failed');
        });
});

outgoingRoutes.route('/update/:id').post(function (req, res) {
    Outgoing.findById(req.params.id, function (err, outgoing) {
        if (!outgoing)
            res.status(404).send("data is not found");
        else
            // TODO: Update outgoing details here
            outgoing.save().then(outgoing => {
                res.json('Outgoing updated!');
            })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
    });
});