import React from 'react';

function SponsorsPage() {
    return (
        <main className="bg-blue-900 text-white py-8">
            <div className="max-w-screen-lg mx-auto">
                {/* Title */}
                <h1 className="text-3xl font-bold mb-6 text-center">Our Sponsors</h1>

                {/* Content */}
                <p className="mb-4">
                    Our sponsors are a critical part of the team’s success. We’re thankful for their support and encourage our community to support these local businesses. A special thanks to:
                </p>

                <div className="grid grid-cols-3 gap-4">
                    <img src="/assets/images/sponsors/skratch.png" alt="Skratch Labs"
                         className="w-96 h-80 rounded-lg mb-4"/>
                    <img src="/assets/images/sponsors/cyclopunk.png" alt="CycloPunk"
                         className="w-96 h-80 rounded-lg mb-4"/>
                    <img src="/assets/images/sponsors/tune.png" alt="Two Wheel Tune"
                         className="w-96 h-80 rounded-lg mb-4"/>
                    <img src="/assets/images/sponsors/surface_fitness.png" alt="Surface Fitness"
                         className="w-96 h-80 rounded-lg mb-4"/>
                    <img src="/assets/images/sponsors/haynes.png" alt="Haynes Group Real Estate"
                         className="w-96 h-80 rounded-lg mb-4"/>
                    <img src="/assets/images/sponsors/calrad.png" alt="Calrad Electronics"
                         className="w-96 h-80 rounded-lg mb-4"/>
                    <img src="/assets/images/sponsors/muir.png" alt="Muir-Chase Plumbing"
                         className="w-96 h-80 rounded-lg mb-4"/>
                    <img src="/assets/images/sponsors/acg.png" alt="American Construction Group"
                         className="w-96 h-80 rounded-lg mb-4"/>
                    <img src="/assets/images/sponsors/elks.png" alt="Elks Lodge #1289"
                         className="w-96 h-80 rounded-lg mb-4"/>
                </div>

                <ul className="list-disc list-inside mb-4 text-left">
                    And also:
                    <li>LA Rocks</li>
                    <li>Partcraft</li>
                    <li>Revelation Raceway & Hobbies</li>
                    <li>MBS</li>
                    <li>Team Buoy</li>
                </ul>
            </div>
        </main>
    );
}

export default SponsorsPage;
