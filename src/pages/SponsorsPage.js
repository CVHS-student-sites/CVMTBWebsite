import React from 'react';

function SponsorsPage() {
    return (
        <main className="bg-blue-900 text-white py-8">
            <div className="max-w-screen-lg mx-auto">
                {/* Title */}
                <h1 className="text-3xl font-bold mb-6 text-center md:ml-0">Our Sponsors</h1>

                {/* Content */}
                <p className="mb-4">
                    Our sponsors are a critical part of the team’s success. We’re thankful for their support and encourage our community to support these local businesses. A special thanks to:
                </p>

                <div className="grid md:grid-cols-3 md:gap-4 grid-cols-2 gap-2">
                    <img src="/assets/images/sponsors/larocks.png" alt="LA Rocks"
                         className="w-48 h-48 md:w-96 md:h-80 rounded-lg mb-4 ml-1.5 md:ml-0"/>
                    <img src="/assets/images/sponsors/elks.png" alt="Elks Lodge 1289"
                         className="w-48 h-48 md:w-96 md:h-80 rounded-lg mb-4 ml-1.5 md:ml-0"/>
                    <img src="/assets/images/sponsors/haynes.png" alt="Haynes Group Real Estate"
                         className="w-48 h-48 md:w-96 md:h-80 rounded-lg mb-4 ml-1.5 md:ml-0"/>
                    <img src="/assets/images/sponsors/muir.png" alt="Muir-Chase Plumbing"
                         className="w-48 h-48 md:w-96 md:h-80 rounded-lg mb-4 ml-1.5 md:ml-0"/>
                    <img src="/assets/images/sponsors/stone.png" alt="Stone / Yard Landscape Center, Inc."
                         className="w-48 h-48 md:w-96 md:h-80 rounded-lg mb-4 ml-1.5 md:ml-0"/>
                    <img src="/assets/images/sponsors/incycle.png" alt="InCycle Pasadena"
                         className="w-48 h-48 md:w-96 md:h-80 rounded-lg mb-4 ml-1.5 md:ml-0"/>
                    <img src="/assets/images/sponsors/revelation.png" alt="Revelation Raceway"
                         className="w-48 h-48 md:w-96 md:h-80 rounded-lg mb-4 ml-1.5 md:ml-0"/>
                    <img src="/assets/images/sponsors/acg.png" alt="American Construction Group"
                         className="w-48 h-48 md:w-96 md:h-80 rounded-lg mb-4 ml-1.5 md:ml-0"/>
                    <img src="/assets/images/sponsors/sourceone.png" alt="Source One Finance"
                         className="w-48 h-48 md:w-96 md:h-80 rounded-lg mb-4 ml-1.5 md:ml-0"/>
                    <img src="/assets/images/sponsors/calrad.png" alt="Calrad Electronics"
                         className="w-48 h-48 md:w-96 md:h-80 rounded-lg mb-4 ml-1.5 md:ml-0"/>
                    <img src="/assets/images/sponsors/cyclopunk.png" alt="CycloPunk"
                         className="w-48 h-48 md:w-96 md:h-80 rounded-lg mb-4 ml-1.5 md:ml-0"/>
                    <img src="/assets/images/sponsors/sierra.png" alt="Sierra Pacific Mortgage"
                         className="w-48 h-48 md:w-96 md:h-80 rounded-lg mb-4 ml-1.5 md:ml-0"/>
                </div>
            </div>
        </main>
    );
}

export default SponsorsPage;
