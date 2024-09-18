import React from 'react';

function SponsorsPage() {
    return (
        <main className="bg-gray-800 text-white py-8">
            <div className="max-w-screen-lg mx-auto">
                {/* Title */}
                <h1 className="text-3xl font-bold mb-6 text-center">Our Sponsors</h1>

                {/* Content */}
                <p className="mb-4">
                    Our sponsors are a critical part of the team’s success. We’re thankful for their support and encourage our community to support these local businesses. A special thanks to:
                </p>

                <ul className="list-disc list-inside mb-4">
                    <li>LA Rocks</li>
                    <li>Partcraft</li>
                    <li>Elks Lodge 1289</li>
                    <li>Revelation Raceway & Hobbies</li>
                    <li>Haynes Group Real Estate</li>
                    <li>Muir-Chase Plumbing</li>
                    <li>MBS</li>
                    <li>Calrad Electronics</li>
                    <li>Team Buoy</li>
                    <li>American Construction Group</li>
                    <li>CycloPunk</li>
                    <li>Surface Fitness</li>
                    <li>Two Wheel Tune</li>
                    <li>Skratch Labs</li>
                </ul>
            </div>
        </main>
    );
}

export default SponsorsPage;
