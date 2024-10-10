import React from 'react';

function ContactPage() {
    return (
        <main className="bg-blue-900 text-white py-8">
            <div className="max-w-screen-lg mx-auto">
                {/* Title */}
                <h1 className="text-3xl font-bold mb-6 text-center ml-3 md:ml-0">Meet the Coaches & Volunteers</h1>

                {/* Coaches */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Coaches</h2>
                    <p className="mb-4">
                        We are proud to have 24 dedicated coaches who are all volunteers. Here’s the team behind CV MTB:
                    </p>
                    <p className="mb-4 grid grid-cols-4">
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
                    </p>
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
