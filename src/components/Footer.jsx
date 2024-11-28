// eslint-disable-next-line react/prop-types
function Footer({ homeRef }) {

    const scrollToHome = () => {
        // eslint-disable-next-line react/prop-types
        homeRef.current.scrollIntoView({ behavior : 'smooth' })
    }
    
    const year = new Date().getFullYear();

    return (
        <div className="footer">
        <footer>
        <div className="container px-6 py-8 mx-auto">
            <div className="flex flex-col items-center text-center">
                <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400 text-lg">Back to Home.</p>

                <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
                    <a href=""></a>
                    <button onClick={scrollToHome} className="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-gray-600 hover:text-gray-600 capitalize transition-colors duration-300 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:text-gray-200 sm:mt-0 sm:w-auto hover:bg-gray-800 focus:outline-none focus:ring dark:hover:bg-gray-50 focus:ring-gray-300 focus:ring-opacity-40">
                        <span className="mx-1">Home</span>
                    </button>       
                </div>
            </div>

            <hr className="my-10 border-gray-200 dark:border-gray-700" />

            <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                <p className="text-sm text-gray-500">© Copyright {year}. All Rights Reserved.</p>

                <div className="flex mt-3 -mx-2 sm:mt-0">
                    <a href="#" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Teams </a>

                    <a href="#" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy </a>

                    <a href="#" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Cookies </a>
                </div>
            </div>
        </div>
        </footer>
        </div>
    );
}

export default Footer;