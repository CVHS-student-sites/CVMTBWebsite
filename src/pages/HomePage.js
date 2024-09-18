import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'flowbite-react';

function HomePage() {
    return (
        <main className="bg-gray-800 text-white py-8">
            <div className="max-w-screen-xl mx-auto text-center">
                {/* Title and Subtitle */}
                <h1 className="text-4xl font-bold mb-4">Crescenta Valley Mountain Biking</h1>
                <h2 className="text-2xl mb-6 font-bold">Welcome to CV MTB – Home of camaraderie and competition.</h2>

                {/* Carousel */}
                <div className="mb-8 h-96" data-carousel="slide">
                    <Carousel slideInterval={3000} indicators={true} leftControl="&#10094;" rightControl="&#10095;">
                        <img src='/assets/images/jonkler.png' alt="Carousel 1"
                             className="object-cover md:h-96"/>
                        <img src='/assets/images/makesuretodoitonafriday-v0-jl0vw12129kd1.png' alt="Carousel 2"
                             className="object-cover md:h-96"/>
                        <img src='/assets/images/jonkler.png' alt="Carousel 3"
                             className="object-cover md:h-96"/>
                    </Carousel>
                </div>

                {/* Description */}
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                    The Crescenta Valley Mountain Biking team has been shaping young riders since 2008.
                    We provide high school and middle school students the opportunity to train, race, and grow as
                    athletes in a supportive environment.
                </p>

                {/* Call-to-Action Buttons */}
                <div className="flex justify-center space-x-4 mb-8">
                    <Link to="/join" className="bg-blue-600 px-4 py-2 rounded text-white">Joining</Link>
                    <Link to="/contact" className="bg-blue-600 px-4 py-2 rounded text-white">Contact</Link>
                    <Link to="/donate" className="bg-blue-600 px-4 py-2 rounded text-white">Donate</Link>
                </div>

                {/* Who We Are */}
                <h2 className="text-3xl font-bold mb-4">Who We Are</h2>

                {/* Team Origins */}
                <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-2">Team Origins</h3>
                    <p className="text-lg max-w-2xl mx-auto">
                        The CV MTB Team was founded in 2008, originally as the CV/Clark/Glendale Composite Team.
                        Over the years, it has grown into one of the largest and most successful mountain biking teams
                        in Southern California.
                    </p>
                    <p className="text-lg max-w-2xl mx-auto mt-4">
                        Part of the SoCal League (<a href="http://www.socalyouthcycling.org"
                                                     className="text-blue-500">www.socalyouthcycling.org</a>),
                        established in 2008.
                        Focused on safe, high-quality, interscholastic mountain biking programs with 1,100 racers across
                        20 divisions.
                    </p>
                </div>

                {/* Vision */}
                <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-2">Vision</h3>
                    <p className="text-lg max-w-2xl mx-auto">
                        We believe mountain biking is more than a sport – it’s a lifelong adventure.
                        We aim to build a strong sense of community, promote the outdoors, and develop lifelong
                        friendships.
                    </p>
                    <ul className="list-disc list-inside text-left max-w-2xl mx-auto mt-4">
                        <li>A life sport that encourages teamwork and personal growth.</li>
                        <li>Everyone contributes, no substitutes, no “1st team/2nd team.”</li>
                        <li>Co-ed team, with scores calculated across both genders.</li>
                        <li>A spirit of camaraderie and competition that leads to lasting memories.</li>
                    </ul>
                </div>

                {/* Team Overview */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Team Overview</h2>
                    <p className="text-lg max-w-2xl mx-auto">
                        For the 2024-2025 season, we have x registered high school riders and y middle school riders.
                        Last season, our team placed x overall in Division 1.
                    </p>

                    {/* Race Schedule */}
                    <h3 className="text-xl font-semibold mt-6 mb-2">Race Schedule</h3>
                    <p className="text-lg max-w-2xl mx-auto">
                        TBD
                    </p>

                    {/* Volunteers Needed */}
                    <p className="text-lg max-w-2xl mx-auto mt-4">
                        We require x CV Marshall spots for every race. Each racer is responsible for fulfilling two
                        volunteer slots per season.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default HomePage;
