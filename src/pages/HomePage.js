import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Flowbite } from 'flowbite-react';

const customTheme = {
    carousel: {
            indicators: {
                active: {
                    off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
                    on: "bg-white dark:bg-gray-800"
                },
            }
    }
};

function HomePage() {

    return (
        <main className="bg-blue-900 text-white py-8">
            <div className="max-w-screen-xl mx-auto text-center">
                {/* Title and Subtitle */}
                <h1 className="text-4xl font-bold mb-4">Crescenta Valley Mountain Biking</h1>
                <h2 className="text-2xl mb-6 font-bold">
                    Welcome to CV MTB – Home of camaraderie and competition.
                </h2>

                {/* Carousel */}
                <Flowbite theme={{ theme: customTheme }}>
                    <div className="mt-10 mb-10 h-56 sm:h-64 xl:h-80 2xl:h-96">
                        <Carousel slide={true} slideInterval={2500}>
                            <img src="/assets/images/maxres.jpg" alt="..."/>
                            <img src="/assets/images/maxresdefault.jpg" alt="..."/>
                            <img src="/assets/images/test.jpg" alt="..."/>
                        </Carousel>
                    </div>
                </Flowbite>

                {/* Description */}
                    <p className="text-lg mb-6 max-w-2xl md:max-w-fit mx-auto text-justify ml-3 mr-3 md:text-center md:ml-0 md:mr-0">
                    The Crescenta Valley Mountain Biking team has been shaping young riders since 2008.
                    We provide high school and middle school students the opportunity to train, race, and grow as
                    athletes in a supportive environment.
                </p>

                {/* Call-to-Action Buttons */}
                <div className="flex justify-center space-x-4 mb-8">
                    <Link to="/join" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">Joining</Link>
                    <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">Contact</Link>
                    <Link to="/donate" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">Donate</Link>
                </div>

                {/* Who We Are */}
                <h2 className="text-3xl font-bold mb-4">Who We Are</h2>

                {/* Team Origins */}
                <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-2">Team Origins</h3>
                    <p className="text-lg max-w-2xl md:max-w-fit mx-auto text-justify ml-3 mr-3 md:text-center md:ml-0 md:mr-0">
                        The CV MTB Team was founded in 2008, originally as the CV/Clark/Glendale Composite Team.
                        Over the years, it has grown into one of the most successful mountain biking teams
                        in Southern California.
                    </p>
                    <p className="text-lg max-w-2xl md:max-w-fit mx-auto mt-4 text-justify ml-3 mr-3 md:text-center md:ml-0 md:mr-0">
                        The team is part of the <a href="http://www.socalyouthcycling.org" className="text-blue-500">SoCal League</a>,
                        and was established in 2008.
                        Focused on safe, high-quality, interscholastic mountain biking programs, the league has 1,100+ racers across
                        20 divisions.
                    </p>
                </div>

                {/* Vision */}
                <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-2">Vision</h3>
                    <p className="text-lg max-w-2xl md:max-w-fit mx-auto text-justify ml-3 mr-3 md:text-center md:ml-0 md:mr-0">
                        We believe mountain biking is more than a sport – it’s a lifelong adventure.
                        We aim to build a strong sense of community, promote the outdoors, and develop lifelong
                        friendships.
                    </p>
                    <ul className="list-disc list-inside text-left max-w-2xl md:max-w-fit mx-auto mt-4 ml-3 mr-3 md:text-center md:ml-0 md:mr-0">
                        <li>A life sport that encourages teamwork and personal growth.</li>
                        <li>Everyone contributes, no substitutes, no “1st team/2nd team.”</li>
                        <li>Co-ed team, with scores calculated across both genders.</li>
                        <li>A spirit of camaraderie and competition that leads to lasting memories.</li>
                    </ul>
                </div>

                {/* Team Overview */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Team Overview</h2>
                    <p className="text-lg max-w-2xl md:max-w-fit mx-auto text-justify ml-3 mr-3 md:text-center md:ml-0 md:mr-0">
                        For the 2024-2025 season, we have 50+ registered high school riders and x middle school riders.
                        Last season, our team placed x overall in Division 1.
                    </p>

                    {/* Race Schedule */}
                    <h3 className="text-xl font-semibold mt-6 mb-2">Race Schedule</h3>
                    <p className="text-lg max-w-2xl md:max-w-fit mx-auto text-justify ml-3 mr-3 md:text-center md:ml-0 md:mr-0">
                        TBD
                    </p>

                    {/* Volunteers Needed */}
                    <p className="text-lg max-w-2xl md:max-w-fit mx-auto mt-4 text-justify ml-3 mr-3 md:text-center md:ml-0 md:mr-0">
                        We require x CV Marshall spots for every race. Each racer is responsible for fulfilling two
                        volunteer slots per season.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default HomePage;
