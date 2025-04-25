const Feedback = require('../models/feedback.model');

// Submits a new feedback to the Database
exports.submitFeedback = async (req, res) => {
    try {
        const { name, email, feedbackText } = req.body;
        const feedback = new Feedback({ name, email, feedbackText });
        await feedback.save();
        res.status(201).json({ message: 'Feedback submitted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Fetches the list of feedbacks, optionally takes sorting behaviour
exports.getFeedback = async (req, res) => {
    try {
        const { sort = 'desc', name, email } = req.query;
        const filter = {};
        if (name && name.trim() !== '') {
            filter.name = { $regex: new RegExp(name, 'i') };
        }
        if (email && email.trim() !== '') {
            filter.email = { $regex: new RegExp(email, 'i') };
        }
        const feedbacks = await Feedback.find(filter)
            .sort({ timestamp: sort === 'desc' ? -1 : 1 })
            .lean();

        // Removing unnecessary version __v key of mongoose
        const cleaned = feedbacks.map(({ _id, __v, ...rest }) => ({
            id: _id,
            ...rest
        }));
        res.json({ feedbacks: cleaned });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


