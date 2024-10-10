import React from 'react';

function JoiningPage() {
    return (
        <main className="bg-blue-900 text-white py-8 text-left">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-3xl font-bold mb-6 ml-3 md:ml-0">Practices & Races</h1>

                {/* Practices */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 ml-3 md:ml-0">Practices</h2>

                    <h3 className="text-xl font-semibold mb-2 ml-3 md:ml-0">High School Riders</h3>
                    <ul className="list-disc list-inside mb-4 text-justify ml-3 md:ml-0">
                        <li>Conditioning (August-December): Tuesdays/Thursdays 4:00 PM - 5:30 PM.</li>
                        <li>Pre-season (October-December): Tuesdays/Thursdays and Saturdays, 8:00 AM - 11:00 AM.</li>
                        <li>Season (December-May): Tuesdays, Thursdays, and Saturdays (no rides on race weeks).</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2 ml-3 md:ml-0">Middle School Riders</h3>
                    <ul className="list-disc list-inside mb-4 text-justify ml-3 md:ml-0">
                        <li>Pre-season (Saturdays only), same schedule as high school riders during the season.</li>
                    </ul>

                    <p className="mb-4 ml-3 md:ml-0">
                        <strong>Meeting Location:</strong> Descanso Gardens – meet at 7:45 AM for an 8:00 AM roll time.
                        <div>
                            <iframe title="Meeting Location" className={"w-96 h-80"}
                                    src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=34.203213636612034,%20-118.21001935182382+(Meeting%20Location)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                <a href="https://www.gps.ie/">gps devices</a>
                            </iframe>
                        </div>
                    </p>
                    <p className="mb-4 ml-3 md:ml-0">
                        <strong>High School Gym Training:</strong> Parks or local gyms as directed by the Head Coach.
                    </p>
                </section>

                {/* Race Days */}
                <section className="mb-8 ml-3 md:ml-0">
                    <h2 className="text-2xl font-semibold mb-4">Race Days</h2>
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
