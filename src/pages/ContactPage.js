import React from 'react';

function ContactPage() {
    return (
        <main className="bg-gray-800 text-white py-8">
            <div className="max-w-screen-lg mx-auto">
                {/* Title */}
                <h1 className="text-3xl font-bold mb-6 text-center">Meet the Coaches & Volunteers</h1>

                {/* Coaches */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Coaches</h2>
                    <p className="mb-4">
                        We are proud to have 25 dedicated coaches who are all volunteers. Here’s the team behind CV MTB:
                    </p>
                    <p className="mb-4">
                        Sam, Shawn, Brian, Geoff, Carl, Renee, Dave, Tim, Ken, David, Allen, Lyndsay, Garen, Andre, Kristen, Jesse, Ax, Wayne, Tony, Andy, Gabe, Ric, Anna, Eli.
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
