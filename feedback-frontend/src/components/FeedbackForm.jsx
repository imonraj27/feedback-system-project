import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FeedbackForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedbackText, setFeedbackText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const feedbackData = { name, email, feedbackText };

        axios.post('http://localhost:5000/feedback', feedbackData)
            .then(res => {
                toast.success('Feedback submitted!');
                setName('');
                setEmail('');
                setFeedbackText('');
            })
            .catch(err => toast.error('Error submitting feedback.'));
    };

    return (
        <div className="feedback-form">
            <h2 className="text-center">Submit Feedback</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        placeholder="Your Feedback"
                        value={feedbackText}
                        onChange={(e) => setFeedbackText(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit Feedback</button>
            </form>
        </div>
    );
}

export default FeedbackForm;
