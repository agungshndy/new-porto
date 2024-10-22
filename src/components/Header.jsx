function Header() {
    return (
        <div className="header">
            
            <nav className="bg-white shadow dark:bg-gray-800">
                <div className="flex items-center">
                    <div className="px-10 py-5">
                        <a className="text-4xl border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6 max-md:text-3xl max-sm:text-xl" href="#home">Portfolio</a>
                    </div>
                    <div className="container flex items-center justify-evenly p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                        <a href="#" className="text-2xl max-md:text-3xl max-sm:text-xl text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">home</a>

                        <a href="#" className="text-2xl max-md:text-3xl max-sm:text-xl border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">skills</a>

                        <a href="#" className="text-2xl max-md:text-3xl max-sm:text-xl border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">experience</a>

                        <a href="#" className="text-2xl max-md:text-3xl max-sm:text-xl border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">education</a>
                    </div>
                </div>
            </nav>
            
        </div>
    );
}

export default Header;