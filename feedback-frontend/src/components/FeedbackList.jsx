import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function FeedbackList() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [sortOrder, setSortOrder] = useState('desc');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const fetchFeedbacks = () => {
        const params = new URLSearchParams();
        params.append('sort', sortOrder);
        if (name.trim()) params.append('name', name);
        if (email.trim()) params.append('email', email);

        axios.get(`http://localhost:5000/feedback?${params.toString()}`)
            .then(res => setFeedbacks(res.data.feedbacks))
            .catch(err => toast.error('Error fetching feedback'));
    };

    useEffect(() => {
        fetchFeedbacks();
    }, [sortOrder]);

    const handleFilter = (e) => {
        e.preventDefault();
        fetchFeedbacks();
    };

    return (
        <div className="feedback-list">
            <h2 className="text-center mb-4">Feedbacks</h2>

            <form onSubmit={handleFilter} className="mb-4">
                <div className="form-row align-items-end">
                    <div className="form-group col-md-3">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Filter by name"
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label>Email</label>
                        <input
                            type="text"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Filter by email"
                        />
                    </div>
                    <div className="form-group col-md-2">
                        <label>Sort by</label>
                        <select
                            className="form-control"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option value="desc">Newest First</option>
                            <option value="asc">Oldest First</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <button type="submit" className="btn btn-primary w-100">Filter</button>
                    </div>
                </div>
            </form>

            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Feedback</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbacks.map((feedback) => (
                        <tr key={feedback.id}>
                            <td>{feedback.name}</td>
                            <td>{feedback.email}</td>
                            <td>{feedback.feedbackText}</td>
                            <td>{new Date(feedback.timestamp).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>



            <div className="mt-4">
                <Link to="/" className="btn btn-secondary">Go Back to Submit Feedback</Link>
            </div>
        </div>
    );
}

export default FeedbackList;
