import gmail from '../assets/gmail.svg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import profilepic from '../assets/profile1.jpg';

// eslint-disable-next-line react/prop-types
function Home({ homeRef, openWhatsApp, downloadCV}) {
    return (
      <div id="home" ref={homeRef} className="home container mx-auto my-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Profile Picture */}
          <div className="flex justify-center p-4">
            <img
              className="object-cover"
              src={profilepic}
              alt="profilepic"
              width={300}
            />
          </div>

          {/* Text Section */}
          <div className="p-4">
            <div className="p-4">
              <h1 className="text-5xl max-md:text-4xl max-sm:text-3xl">
                Hi, I am{" "}
                <span className="transition-colors hover:text-green-500 font-bold">
                  Agung
                </span>.
              </h1>
              <h2 className="text-5xl max-md:text-4xl max-sm:text-3xl">
                I&apos;m a{" "}
                <span className="text-green-500">Web Developer.</span>
              </h2>
            </div>

            <div className="p-4 text-3xl max-md:text-2xl max-sm:text-xl">
              <p>
                I&apos;m a self taught web developer who seeking a new experience to
                expand my career path. I&apos;m eager to learn new things, and
                also flexible to a new changes.
              </p>
            </div>

            <div className="flex gap-6 text-left p-4">
              {/* Social Media Icons */}
              <div className="w-13 h-13">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=agungshandy43@gmail.com" target='_blank' rel="noopener noreferrer">
                  <img src={gmail} alt="gmail" width={50} height={50} className='hover:scale-105'/>
                </a>
              </div>
              <div className="w-12 h-12">
                <a href="https://github.com/agungshndy" target='_blank' rel="noopener noreferrer">
                  <img src={github} alt="github" width={50} height={50} className='hover:scale-105'/>
                </a>
              </div>
              <div className="w-12 h-12">
                <a href="https://www.linkedin.com/in/agungshandy/" target='_blank' rel="noopener noreferrer">
                  <img src={linkedin} alt="linkedin" width={50} height={50} className='hover:scale-105'/>
                </a>
              </div>
            </div>

            <div className="flex text-left gap-6 p-4">
              {/* Buttons */}
              <button
                className="border-2 bg-green-500 border-green-500 text-white py-2 px-6 rounded-lg transition hover:scale-105 text-2xl max-md:text-xl max-sm:text-lg"
                onClick={openWhatsApp}
              >
                Contact Me!
              </button>
              <button
                className="border-2 bg-green-500 border-green-500 text-white py-2 px-6 rounded-lg transition hover:scale-105 text-2xl max-md:text-xl max-sm:text-lg"
                onClick={downloadCV}
              >
                Download My CV
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;
