import React from 'react';
import {Link} from "react-router-dom";

function CostsPage() {
    return (
        <main className="bg-blue-900 text-white py-8 text-left">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-3xl font-bold mb-6 ml-3 md:ml-0">Costs and Registration</h1>

                {/* SoCal League Registration Fees */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 ml-3 md:ml-0">SoCal League Registration Fees</h2>
                    <ul className="list-disc list-inside mb-4 text-justify ml-3 md:ml-0">
                        <li>High School: $129.03 annually + $60 per race.</li>
                        <li>Middle School: $129.03 annually + $40 per race.</li>
                    </ul>
                </section>

                {/* Team Donation */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 ml-3 md:ml-0">Recommended Team Donation</h2>
                    <ul className="list-disc list-inside mb-4 text-justify ml-3 md:ml-0">
                        <li>High School: $300</li>
                        <li>Middle School: $200</li>
                        <li>Independent Riders: $600</li>
                    </ul>
                </section>

                {/* Registration Process */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 ml-3 md:ml-0">Registration Process</h2>
                    <p className="mb-4 ml-3 md:ml-0">
                        Prospective High School riders are students who attend CVHS or CMHS, live within CVHS boundaries, and are interested in joining.
                        Prospective Middle School riders are students who currently attend, or will attend, Rosemont Middle School, and are interested in joining.
                    </p>
                    <p className="mb-4 ml-3 md:ml-0">
                        To register, please:
                    </p>
                    <ol className="list-decimal list-inside mb-4 text-justify ml-3 md:ml-0">
                        <li>Reach out to Head Coach Sam Kae or Team Director David Sinclair, either in person or through
                            the <Link to="/contact" className="text-blue-500"> Contact </Link> page.</li>
                        <li>Register with the SoCal League.</li>
                        <li>
                        Make a donation to the CVHS MTB team and join our
                            <a href="https://band.us/band/90435782" target="_blank" rel="noopener noreferrer" className="text-blue-500"> Band </a>
                            for race reminders.
                        </li>
                        <li>Register for races.</li>
                    </ol>
                    <div className="text-justify ml-3 md:ml-0">Sign up to volunteer during races when possible.</div>
                </section>
            </div>
        </main>
    );
}

export default CostsPage;
