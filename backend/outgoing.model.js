const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Outgoing = new Schema({
    _id: {
        type: ObjectId
    },
    description: {
        type: String
    },
    title: {
        type: String
    },
    type: {
        type: String
    },
    location: {
        type: String
    },
    duration: {
        type: number
    },
    minimum: {
        type:number
    },
    maximum: {
        type: number
    },
    status: {
        type: String
    }
});
module.exports = mongoose.model('Outgoing', Outgoing);