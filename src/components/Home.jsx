import gmail from '../assets/gmail.svg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import profilepic from '../assets/profile1.jpg';
// import Button from '@mui/material/Button';

// eslint-disable-next-line react/prop-types
function Home({ homeRef }) {
    return (
      <div id="home" ref={homeRef} className="home container mx-auto my-20">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex justify-center p-4">
            <img
              className="object-scale-down"
              src={profilepic}
              alt="profilepic"
              width={350}
            />
          </div>
          <div className="p-4">
            <div className="p-4">
              <h1 className="text-5xl max-md:text-3xl max-sm:text-xl">
                Hi, I am{" "}
                <span className="transition-colors hover:text-green-500 font-bold">
                  Agung
                </span>.
              </h1>
              <h2 className="text-5xl max-md:text-3xl max-sm:text-xl">
                I&apos;m a{" "}
                <span className="text-green-500">Web Developer.</span>
              </h2>
            </div>
            <div className="p-4 text-3xl max-md:text-3xl max-sm:text-xl">
              <p>
                I&apos;m a self taught web developer who seeking a new experience to
                expand my career path. I&apos;m eager to learn new things, and
                also flexible to a new changes.
              </p>
            </div>
            <div className="flex gap-5 p-4">
              <div className="w-50px h-50px">
                <a href="#gmail">
                  <img src={gmail} alt="gmail" width={50} height={50} />
                </a>
              </div>
              <div className="w-50px h-50px">
                <a href="#github">
                  <img src={github} alt="github" width={50} height={50} />
                </a>
              </div>
              <div className="w-50px h-50px">
                <a href="#linkedin">
                  <img src={linkedin} alt="linkedin" width={50} height={50} />
                </a>
              </div>
            </div>
            <div className="gap-4 p-4 text-2xl">
              <button className="border-3 bg-green-500 border-b-green-500 transition-colors hover:bg-green-400">
                Contact Me!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;