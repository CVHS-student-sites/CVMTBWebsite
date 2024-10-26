import React from 'react';

function EquipmentChecklistPage() {
    return (
        <main className="bg-blue-900 text-white py-8 text-left">
            <div className="max-w-screen-lg mx-auto">
                {/* Title */}
                <h1 className="text-3xl font-bold mb-6 ml-3 md:ml-0">What You Need for Races and Practices</h1>

                {/* Checklist */}
                <section className="mb-8 ml-3 md:ml-0">
                    <p className="mb-4">Every rider is required to bring the following:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li>A well-maintained mountain bike (tires, gears, brakes in working condition).</li>
                        <li>Helmet (must be newer, approved for safety).</li>
                        <li>Fully charged front light (&gt; 600 lumens) and flashing rear lights.</li>
                        <li>Water bottles or Camelbak for hydration.</li>
                        <li>Full-finger gloves.</li>
                        <li>Seat pack or Camelbak with an extra inner tube, tire iron, patch kit, and multi-tool.</li>
                        <li>Thin layers (avoid cotton); padded riding shorts.</li>
                        <li>Nutrition (bananas, Skratch gels, Clif Bars, etc.).</li>
                        <li>Stretching and sleep to prepare for practice/race days.</li>
                    </ul>
                </section>

                {/* Local Bike Repair */}
                <section className="mb-8 ml-3 md:ml-0">
                    <h2 className="text-2xl font-semibold mb-4">Local Bike Repair</h2>
                    <p className="mb-4">Riders can schedule bike repairs or gear purchases at these recommended shops:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li>
                            <a href="https://www.incycle.com/pages/pasadena-ca" target="_blank" rel="noopener noreferrer"
                               className="text-blue-500"> Incycle Pasadena</a> – CV MTB team days
                        </li>
                        <li>
                            <a href="https://www.cyclopunk.com/" target="_blank" rel="noopener noreferrer"
                               className="text-blue-500"> Cyclopunk </a> by Eli Gunthrie – CV MTB team days
                            – Mobile Bike Repair – CV MTB discount
                        </li>
                        <li>
                            <a href="https://advdynamics.com/" target="_blank" rel="noopener noreferrer"
                               className="text-blue-500"> Advanced Dynamics</a> by Travis Taylor
                            – Suspension service – 15% discount.
                        </li>
                        <li>
                            <a href="https://www.montrosebikeshop.com/" target="_blank" rel="noopener noreferrer"
                               className="text-blue-500"> Montrose Bike Shop</a> – 10% discount on parts, accessories,
                            and labor.
                        </li>
                        <li>
                            <a href="https://www.twowheeltune.com/" target="_blank" rel="noopener noreferrer"
                               className="text-blue-500"> Two Wheel Tune</a> by Lucas Rowton – Mobile bike repair
                            – CV MTB discount.
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    );
}

export default EquipmentChecklistPage;
