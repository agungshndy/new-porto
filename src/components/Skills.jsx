function Skills() {
    return (
        <div id="skills" className="skills">
            <h1 className="text-5xl my-20 text-center max-md:text-4xl max-sm:text-3xl">Skills</h1>
            <div className="text-center text-2xl">
                <section className="py-24 bg-gradient-to-r from-slate-700 to-slate-800">
                    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
                        {/* Web Developer Card */}
                        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center w-full sm:w-11/12 lg:w-3/4 xl:w-3/5 mx-auto">
                            <h2 className="text-gray-500 font-medium text-3xl mb-5 max-md:text-3xl max-sm:text-2xl">Web Developer</h2>
                            <ul className="text-gray-500 font-normal text-xl max-md:text-3xl max-sm:text-2xl">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>Tailwind</li>
                                <li>Node.js</li>
                            </ul>
                        </div>

                        {/* Hardware Card */}
                        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center w-full sm:w-11/12 lg:w-3/4 xl:w-3/5 mx-auto">
                            <h2 className="text-gray-500 font-medium text-3xl mb-5 max-md:text-3xl max-sm:text-2xl">Hardware</h2>
                            <ul className="text-gray-500 font-normal text-xl max-md:text-3xl max-sm:text-2xl">
                                <li>PC&apos;s Hardware</li>
                                <li>PC&apos;s Software</li>
                                <li>Troubleshooting</li>
                                <li>CCTV</li>
                                <li>Access Door</li>
                            </ul>
                        </div>

                        {/* Network Card */}
                        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center w-full sm:w-11/12 lg:w-3/4 xl:w-3/5 mx-auto">
                            <h2 className="text-gray-500 font-medium text-3xl mb-5 max-md:text-3xl max-sm:text-2xl">Network</h2>
                            <ul className="text-gray-500 font-normal text-xl max-md:text-3xl max-sm:text-2xl">
                                <li>Routing</li>
                                <li>Switching</li>
                                <li>LAN</li>
                                <li>Mikrotik</li>
                                <li>Cisco</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Skills;
