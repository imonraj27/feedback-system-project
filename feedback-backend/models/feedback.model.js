const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    feedbackText: String,
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Feedback', feedbackSchema);