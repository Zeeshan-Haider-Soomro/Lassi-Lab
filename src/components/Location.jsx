
const Location = () => {
    return (
        <section className="w-full bg-white py-12 px-6 md:px-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Map Embed */}
                <div className="w-full h-[300px] md:h-[400px] rounded-2xl shadow-lg overflow-hidden">
                    <iframe
                        title="Lassi Lab Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28944.497687769394!2d67.205050!3d24.892203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33a3a2b6d69d7%3A0x6cb2b61e8a9fbb91!2sD2%2F24%2C%20Opposite%20Bank%20Islami%2C%20Near%20RCD%20Ground%2C%20Malir%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1694723456789!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>


                {/* Text Content */}
                <div className="space-y-5 text-gray-800">
                    <h2 className="text-2xl md:text-3xl font-bold text-red-700">
                        Your Favorite Lassi, Just Around the Corner
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        We’re serving up the city’s creamiest rabri lassi and desserts right
                        here in the heart of Malir. Come visit us, sip your favorite flavors,
                        and enjoy the Lassi Lab vibe in person.
                    </p>

                    <div>
                        <h3 className="font-bold text-gray-900">Address</h3>
                        <p className="text-gray-700">
                            D2/24, Opposite Bank Islami, Near RCD Ground, Malir, Karachi,
                            Pakistan
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-900">Hours</h3>
                        <p className="text-gray-700">Monday – Sunday | 12:00 PM – 12:00 AM</p>
                    </div>

                    {/* Logo / Branding */}
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-300 tracking-wide">
                        LASSILAB
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Location;
