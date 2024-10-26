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
            <div className="max-w-screen-xl mx-auto">
                {/* Title and Subtitle */}
                <h1 className="text-4xl font-bold mb-4 text-center">Crescenta Valley Mountain Biking</h1>
                <h2 className="text-2xl mb-6 font-bold text-center">
                    Welcome to CV MTB – Home of camaraderie and competition.
                </h2>

                {/* Carousel */}
                <Flowbite theme={{ theme: customTheme }}>
                    <div className="mt-10 mb-10 h-56 sm:h-64 xl:h-80 2xl:h-96 text-center">
                        <Carousel slide={true} slideInterval={2500}>
                            <img src="/assets/images/home/49637516291_70b1928921_o.jpg" alt="..."/>
                            <img src="/assets/images/home/49637789262_ff7d401e35_o.jpg" alt="..."/>
                            <img src="/assets/images/home/Group%20Berm.jpg" alt="..."/>
                            <img src="/assets/images/home/Group%20Climb.jpg" alt="..."/>
                            <img src="/assets/images/home/Race%201%20Perris%20Climb.jpg" alt="..."/>
                            <img src="/assets/images/home/CVMTBHS24.jpg " alt="..."/>
                            <img src="/assets/images/home/CVMTB24HSMSCOACHES.jpg" alt="..."/>
                            <img src="/assets/images/home/CVMTB23Women.JPEG" alt="..."/>
                        </Carousel>
                    </div>
                </Flowbite>

                {/* Description */}
                <p className="md:flex md:items-center text-lg mb-6 mx-auto text-justify ml-3 mr-3 md:text-center md:ml-0 md:mr-0">
                    The Crescenta Valley Mountain Biking team has been shaping young riders since 2008.
                    We provide high school and middle school students the opportunity to train, race, and grow as
                    athletes in a supportive environment.
                </p>

                {/* Call-to-Action Buttons */}
                <div className="flex justify-center space-x-4 mb-8 text-center">
                    <Link to="/join" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">Joining</Link>
                    <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">Contact</Link>
                    {/* TODO: Ask coaches how we want donations to work. */}
                </div>

                {/* Who We Are */}
                <h2 className="text-3xl font-bold mb-4 text-left ml-3 mr-3 md:ml-0 md:mr-0">Who We Are</h2>

                {/* Team Origins */}
                <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-2 text-left ml-3 mr-3 md:ml-0 md:mr-0">Team Origins</h3>
                    <p className="text-lg mx-auto text-justify ml-3 mr-3 md:text-left md:ml-0 md:mr-0">
                        The CV MTB Team was founded in 2008, originally as the CV/Clark/Glendale Composite Team.
                        Over the years, it has grown into one of the most successful mountain biking teams
                        in Southern California.
                    </p>
                    <p className="text-lg mx-auto mt-4 text-justify ml-3 mr-3 md:text-left md:ml-0 md:mr-0">
                        The team is part of the <a href="http://www.socalyouthcycling.org" target="_blank" rel="noopener noreferrer" className="text-blue-500">SoCal League</a>,
                        and was established in 2008.
                        Focused on safe, high-quality, interscholastic mountain biking programs, the league has 1,100+ racers across
                        20 divisions.
                    </p>
                </div>

                {/* Vision */}
                <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-2 text-left ml-3 mr-3 md:ml-0 md:mr-0">Vision</h3>
                    <p className="text-lg mx-auto text-justify ml-3 mr-3 md:text-left md:ml-0 md:mr-0">
                        We believe mountain biking is more than a sport – it’s a lifelong adventure.
                        We aim to build a strong sense of community, promote the outdoors, and develop lifelong
                        friendships.
                    </p>
                    <ul className="list-disc list-inside text-left mx-auto mt-4 ml-3 mr-3 md:text-left md:ml-0 md:mr-0">
                        <li>A life sport that encourages teamwork and personal growth.</li>
                        <li>Everyone contributes, no substitutes, no “1st team/2nd team.”</li>
                        <li>Co-ed team, with scores calculated across both genders.</li>
                        <li>A spirit of camaraderie and competition that leads to lasting memories.</li>
                    </ul>
                </div>

                {/* Team Overview */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4 text-left ml-3 mr-3 md:ml-0 md:mr-0">Team Overview</h2>
                    <p className="text-lg mx-auto text-justify ml-3 mr-3 md:text-left md:ml-0 md:mr-0">
                        For the 2024-2025 season, we have 48 registered high school riders and 27 middle school riders.
                        Last season, our team placed 10th overall in Division 1 during the five race, regular season
                        series.
                        <br></br>
                        <br></br>
                        We had great individual results with 3 High School Boys in the Top 5 Overall for the
                        Season Series in their respective categories and 6 High School and 3 Middle School racers
                        achieving podium finishes throughout the season.
                        <br></br>
                        <br></br>
                        For the second consecutive year, we have our largest ever Freshman Class this 2024-25
                        season with 15 incoming 9th Grade Racers, including some fast Freshman Girls, ready to pitch in
                        and contribute to our team results!
                        <br></br>
                        <br></br>
                    </p>
                    <p className="text-lg mx-auto text-justify ml-3 mr-3 md:text-left md:ml-0 md:mr-0">
                        Communication for our team, especially regarding races and community activities,
                        occurs on the<a href="https://band.us/band/90435782" target="_blank"
                                        rel="noopener noreferrer" className="text-blue-500"> Band App. </a>
                    </p>
                    {/* Race Schedule */}
                    <h3 className="text-xl font-semibold mt-6 mb-2 text-left ml-3 mr-3 md:ml-0 md:mr-0">Race
                        Schedule</h3>
                    <p className="text-lg mx-auto text-justify ml-3 mr-3 md:text-left md:ml-0 md:mr-0">
                        Our race schedule for the 2025 Season is determined by the SoCal Cycling League, and can be
                        found on
                        <a href="https://www.socalyouthcycling.org/races"
                           target="_blank" rel="noopener noreferrer" className="text-blue-500"> their website.
                        </a>
                    </p>

                    {/* Volunteers Needed */}
                    <h3 className="text-xl font-semibold mt-6 mb-2 text-left ml-3 mr-3 md:ml-0 md:mr-0">Volunteer</h3>
                    <p className="text-lg mx-auto mt-4 text-justify ml-3 mr-3 md:text-left md:ml-0 md:mr-0">
                        CV MTB has a strong culture of volunteering with all coaches, booster club members,
                        and parents devoting their time to promote physical health, community building, and
                        love of the outdoors with our students. CVHS riders mentor and help younger MS riders build up
                        their biking skills, physical fitness, confidence, and model responsible behavior.
                        <br></br>
                        <br></br>
                        Parents of CV MTB riders coach or volunteer as Course Marshals at SoCal mountain bike
                        races at least twice per season.
                        <br></br>
                        <br></br>
                        There are many opportunities to help our mountain biking team and we welcome
                        everyone to join!
                    </p>
                </div>
            </div>
        </main>
);
}

export default HomePage;
