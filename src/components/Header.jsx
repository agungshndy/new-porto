// eslint-disable-next-line react/prop-types
function Header({ isMenuOpen, toggleMenu }) {
    return (
      <div className="header">
        <nav className="flex-nowrap fixed top-0 w-full shadow dark:bg-gray-800 z-10">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <div>
              <a
                href="#home"
                className="text-gray-100 text-4xl border-b-2 border-transparent hover:text-gray-400 dark:hover:text-gray-200 hover:border-green-500 max-md:text-3xl max-sm:text-2xl"
              >
                Portfolio
              </a>
            </div>
  
            {/* Hamburger Menu */}
            <div className="block md:hidden">
              <button
                onClick={toggleMenu}
                className="text-2xl text-gray-800 dark:text-gray-200"
              >
                {/* Hamburger Icon */}
                <div>
                  <button className="relative group">
                    <div className="relative flex flex-col overflow-hidden items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                      {/* Hamburger Icon (SVG) */}
                      <div className="transform transition-all duration-150 overflow-hidden -translate-y-5 group-focus:translate-y-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 animate-bounce text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
  
                      <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden -translate-y-3">
                        <div className="bg-white mb-1.5 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>
                        <div className="bg-white mb-1.5 h-[2px] w-7 transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
                        <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
                      </div>
                    </div>
                  </button>
                </div>
              </button>
            </div>
  
            {/* Navigation Links */}
            <div className="hidden md:flex text-gray-600 dark:text-gray-300 capitalize">
              <a
                href="#home"
                className="text-gray-100 text-2xl max-md:text-xl border-b-2 border-transparent hover:text-gray-400 dark:hover:text-gray-200 hover:border-green-500 mx-5"
              >
                Home
              </a>
              <a
                href="#skills"
                className="text-gray-100 text-2xl max-md:text-xl border-b-2 border-transparent hover:text-gray-400 dark:hover:text-gray-200 hover:border-green-500 mx-5"
              >
                Skills
              </a>
              <a
                href="#experience"
                className="text-gray-100 text-2xl max-md:text-xl border-b-2 border-transparent hover:text-gray-400 dark:hover:text-gray-200 hover:border-green-500 mx-5"
              >
                Experience
              </a>
              <a
                href="#education"
                className="text-gray-100 text-2xl max-md:text-xl border-b-2 border-transparent hover:text-gray-400 dark:hover:text-gray-200 hover:border-green-500 mx-5"
              >
                Education
              </a>
              <a
                href="#projects"
                className="text-gray-100 text-2xl max-md:text-xl border-b-2 border-transparent hover:text-gray-400 dark:hover:text-gray-200 hover:border-green-500 mx-5"
              >
                Projects
              </a>
            </div>
          </div>

            {/* Mobile Menu */}
          <div
            className={`${
              isMenuOpen ? 'max-h-screen' : 'max-h-0'
            } md:hidden overflow-hidden transition-all duration-500 ease-in-out shadow-md dark:bg-gray-900`}
          >
            <div>
              <div className="top-0 sticky flex flex-col space-y-4 py-4 px-6">
                <a
                  href="#home"
                  className="text-3xl max-md:text-2xl max-sm:text-xl text-gray-100 dark:text-gray-200 border-b-2 border-transparent hover:text-gray-400 dark:hover:text-gray-200 hover:border-green-500"
                >
                  Home
                </a>
                <a
                  href="#skills"
                  className="text-3xl max-md:text-2xl max-sm:text-xl text-gray-100 dark:text-gray-200 border-b-2 border-transparent hover:text-gray-400 dark:hover:text-gray-200 hover:border-green-500"
                >
                  Skills
                </a>
                <a
                  href="#experience"
                  className="text-3xl max-md:text-2xl max-sm:text-xl text-gray-100 dark:text-gray-200 border-b-2 border-transparent hover:text-gray-400 dark:hover:text-gray-200 hover:border-green-500"
                >
                  Experience
                </a>
                <a
                  href="#education"
                  className="text-3xl max-md:text-2xl max-sm:text-xl text-gray-100 dark:text-gray-200 border-b-2 border-transparent hover:text-gray-400 dark:hover:text-gray-200 hover:border-green-500"
                >
                  Education
                </a>
                <a
                  href="#projects"
                  className="text-3xl max-md:text-2xl max-sm:text-xl text-gray-100 dark:text-gray-200 border-b-2 border-transparent hover:text-gray-400 dark:hover:text-gray-200 hover:border-green-500"
                >
                  Projects
                </a>
              </div>
            </div>
          </div>
        </nav>
  
        
      </div>
    );
  }
  
  export default Header;
  