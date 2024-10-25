function Skills() {
    return (
        <div id="skills" className="skills">
        <h1 className="text-5xl my-20 text-center max-md:text-3xl max-sm:text-xl">Skills</h1>
        <div className="text-center text-2xl">
            <section className="py-24 bg-gradient-to-r from-slate-700 to-slate-800">
                <div className="flex relative justify-center gap-10 py-10">
                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center basis-1/4">
                        <h2 className="text-gray-500 font-medium text-3xl mb-5 max-md:text-3xl max-sm:text-xl">Web Developer</h2>
                        <ul className="text-gray-500 font-normal text-xl max-md:text-3xl max-sm:text-xl">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>Tailwind</li>
                            <li>Node.js</li>
                        </ul>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center basis-1/4">
                        <h2 className="text-gray-500 font-medium text-3xl mb-5 max-md:text-3xl max-sm:text-xl">Hardware</h2>
                        <ul className="text-gray-500 font-normal text-xl max-md:text-3xl max-sm:text-xl">
                            <li>PC&apos;s Hardware</li>
                            <li>PC&apos;s Software</li>
                            <li>Troubleshooting</li>
                            <li>CCTV</li>
                            <li>Access Door</li>
                        </ul>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center basis-1/4">
                        <h2 className="text-gray-500 font-medium text-3xl mb-5 max-md:text-3xl max-sm:text-xl">Network</h2>
                        <ul className="text-gray-500 font-normal text-xl max-md:text-3xl max-sm:text-xl">
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