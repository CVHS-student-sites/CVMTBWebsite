import React, { useState } from 'react';

function ContactPage() {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        body: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, subject, body } = formData;
        const recipient = 'cvmtbsocal@gmail.com';
        const mailBody = `From: ${email}\n\n${body}`;
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;

        window.open(gmailUrl, '_blank');
    };

    return (
        <main className="bg-blue-900 text-white py-8">
            <div className="max-w-screen-lg mx-auto">
                {/* Title */}
                <h1 className="text-3xl font-bold mb-6 text-center ml-3 md:ml-0">Meet the Coaches & Volunteers</h1>

                {/* Coaches */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Coaches</h2>
                    <p className="mb-4">Use the form below to contact us; we will be happy to answer any questions.</p>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="mb-8">
                        <div className="mb-4">
                            <label className="block text-white mb-2" htmlFor="email">Your Email</label>
                            <input
                                className="w-auto md:w-full px-3 py-2 text-black"
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white mb-2" htmlFor="subject">Subject</label>
                            <input
                                className="w-auto md:w-full px-3 py-2 text-black"
                                type="text"
                                name="subject"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white mb-2" htmlFor="body">Message</label>
                            <textarea
                                className="w-auto md:w-full px-3 py-2 text-black"
                                name="body"
                                id="body"
                                value={formData.body}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="bg-white text-blue-900 px-4 py-2">Send</button>
                    </form>

                    {/* Coaches List */}
                    <p className="mb-4">We are proud to have 24 dedicated coaches who are all volunteers. Here’s the team behind CV MTB:</p>
                    <div className="mb-4 grid grid-cols-4">
                        <ol>
                            <li>Sam</li>
                            <li>Shawn</li>
                            <li>Brian</li>
                            <li>Geoff</li>
                            <li>Carl</li>
                            <li>Renee</li>
                        </ol>
                        <ol>
                            <li>David</li>
                            <li>Tim</li>
                            <li>Ken</li>
                            <li>David</li>
                            <li>Allen</li>
                            <li>Lyndsay</li>
                        </ol>
                        <ol>
                            <li>Garen</li>
                            <li>Andre</li>
                            <li>Kristen</li>
                            <li>Jesse</li>
                            <li>Ax</li>
                            <li>Wayne</li>
                        </ol>
                        <ol>
                            <li>Tony</li>
                            <li>Andy</li>
                            <li>Gabe</li>
                            <li>Ric</li>
                            <li>Anna</li>
                            <li>Eli</li>
                        </ol>
                    </div>
                </section>

                {/* Volunteers */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Volunteers</h2>
                    <h3 className="text-xl font-semibold mb-2">Booster Club Board</h3>
                    <p className="mb-4">Artineh, Sam, Jasmine, Heidi, Stephen.</p>

                    <h3 className="text-xl font-semibold mb-2">Support Team</h3>
                    <p className="mb-4">David, Cheryl, Garen, Talin, Joe, Ax.</p>
                </section>
            </div>
        </main>
    );
}

export default ContactPage;
