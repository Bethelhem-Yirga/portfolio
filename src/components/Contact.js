import React, { useState } from 'react';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you could send data to a server or another endpoint
        console.log('Email:', email);
        console.log('Message:', message);
        setSubmitted(true);
    };

    return (
        <div>
            <h2>Contact</h2>
            {submitted ? (
                <p>Thank you for your message!</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        required
                    />
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message"
                        required
                    />
                    <button type="submit">Send</button>
                </form>
            )}
        </div>
    );
};

export default Contact;