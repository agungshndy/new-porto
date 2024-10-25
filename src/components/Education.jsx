function Education() {
    return (
        <div id="education" className="education">
        <h1 className="my-20 text-center text-5xl max-md:text-3xl max-sm:text-xl">Education</h1>
        <div className="my-20 bg-gradient-to-r from-slate-700 to-slate-800 text-2xl">
            <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="mx-7 divide-y-2 divide-gray-100">
      <div className="py-8 flex flex-wrap md:flex-nowrap gap-10">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-300 max-md:text-3xl max-sm:text-xl">Computer Engineering</span>
          <span className="font-semibold title-font text-gray-300 max-md:text-3xl max-sm:text-xl">(Associate Degree)</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-3xl font-medium text-gray-300 title-font mb-2 max-md:text-3xl max-sm:text-xl">Bogor Agricultural University</h2>
          <h3 className="text-2xl font-medium text-gray-400 title-font mb-2 max-md:text-3xl max-sm:text-xl">Sep 2016 - Nov 2019</h3>
          <ul className="leading-relaxed max-md:text-3xl max-sm:text-xl">
                <li>Computer Hardware</li>
                <li>Computer Network</li>
                <li>Programming</li>
          </ul>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap gap-10">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-300 max-md:text-3xl max-sm:text-xl">Information Systems</span>
          <span className="font-semibold title-font text-gray-300 max-md:text-3xl max-sm:text-xl">(Bachelor Degree)</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-3xl font-medium text-gray-300 title-font mb-2 max-md:text-3xl max-sm:text-xl">Binus University</h2>
          <h3 className="text-2xl font-medium text-gray-400 title-font mb-2 max-md:text-3xl max-sm:text-xl">Jun 2021 - Present</h3>
          <ul className="leading-relaxed max-md:text-3xl max-sm:text-xl">
                <li>Database</li>
                <li>UI/UX Design</li>
                <li>Programming</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
            
            {/* <div className="grid grid-rows-2 gap-4 px-32">
                <div className="border p-4">
                    <h1 className="text-xl mb-2">Bogor Agricultural University</h1>
                    <h2 className="mb-2">Diploma Computer Engineering ( Sep 2016 - Nov 2019 )</h2>
                    <li>Computer Hardware</li>
                    <li>Computer Network</li>
                    <li>Programming</li>

                </div>
                <div className="border p-4">
                    <h1 className="text-xl mb-2">Binus University</h1>
                    <h2 className="mb-2">Information System Major ( Jun 2021 - Present )</h2>
                    <li>Database</li>
                    <li>UI/UX Design</li>
                    <li>Programming</li>
                </div>
            </div> */}
        </div>
        </div>
    );
}

export default Education;