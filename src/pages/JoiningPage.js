import React from 'react';
import {Link} from "react-router-dom";

function JoiningPage() {
    return (
        <main className="bg-blue-900 text-white py-8 text-left">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-3xl font-bold mb-6 ml-3 md:ml-0">Joining, Practices & Races</h1>

                {/* Joining */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 ml-3 md:ml-0">Joining the Team</h2>
                    <p className="mb-4 ml-3 md:ml-0">
                        If you are a student interested in joining the team, please reach us through our
                        <Link to="/contact" className="text-blue-500"> Contact </Link> page, or through one of our
                        events, and follow the registration process outlined on our
                        <Link to="/costs" className="text-blue-500"> Costs and Registration </Link> page.
                        One of our coaches will get back to you shortly with more details.
                        We welcome riders of all skill levels.
                        <br/>
                    </p>
                </section>

                {/* Practices */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 ml-3 md:ml-0">Practices</h2>

                    <h3 className="text-xl font-semibold mb-2 ml-3 md:ml-0">High School Riders</h3>
                    <ul className="list-disc list-inside mb-4 text-justify ml-1 md:ml-0">
                        <li>Conditioning (August-October): Tuesdays/Thursdays 4:00 PM - 5:30 PM.</li>
                        <li>Pre-season (October-November): Saturdays only.</li>
                        <li>Season (December-May): Tuesdays, Thursdays, and Saturdays (no rides on race weeks).</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2 ml-1 md:ml-0">Middle School Riders</h3>
                    <ul className="list-disc list-inside mb-4 text-justify ml-3 md:ml-0">
                        <li>No conditioning practices.</li>
                        <li>Pre-season (October-November): Saturdays only.</li>
                        <li>Season (December-May): Tuesdays, Thursdays, and Saturdays (no rides on race weekends).</li>
                    </ul>

                    <div className="mb-4 ml-3 md:ml-0">
                        <strong>Meeting Location:</strong> Descanso Gardens – Meet at 7:45AM for 8:00AM roll time on
                        Saturdays and 3:45PM for 4:00PM roll time on Tuesdays / Thursdays.
                        <div>
                            <iframe title="Meeting Location" className={"w-96 h-80"}
                                    src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=34.203213636612034,%20-118.21001935182382+(Meeting%20Location)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                <a href="https://www.gps.ie/">gps devices</a>
                            </iframe>
                        </div>
                    </div>
                    <p className="mb-4 ml-3 md:ml-0">
                        <strong>High School Gym Training:</strong> Parks or local gyms as directed by the Head Coach.
                    </p>
                </section>

                {/* Race Days */}
                <section className="mb-8 ml-3 md:ml-0">
                    <h2 className="text-2xl font-semibold mb-4">Race Days</h2>
                    <p className="mx-auto text-justify ml-3 mr-3 md:text-left md:ml-0 md:mr-0">
                        Important race information and team communications are sent through the
                        <a href="https://band.us/band/90435782" target="_blank"
                           rel="noopener noreferrer" className="text-blue-500"> Band App. </a>
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Pre-ride on Saturdays (11:00 AM - 12:00 PM).</li>
                        <li>Middle School races are on Saturdays, and High School races are on Sundays.</li>
                    </ul>
                </section>
            </div>
        </main>
    );
}

export default JoiningPage;
