// import React from "react";
import keeper from '../assets/keeper.png'
import qrcode from '../assets/qrcode.png'

function Project(){

    return (
      <div id='projects' className="project">
        <h1 className="text-5xl my-20 text-center max-md:text-4xl max-sm:text-3xl">Projects</h1>
        <div className="py-20 bg-gradient-to-r from-slate-800 to-slate-700">
        <section className='mx-auto max-w-[48rem]'>
          <div className='grid grid-cols-2 gap-10 max-md:grid-cols-1 max-md:w-[24rem] max-md:mx-auto'>
            <div>
              <a href="https://agungshndy.github.io/keeper-app/" target='_blank' className="group relative block overflow-hidden">
                <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <span className="sr-only">Wishlist</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>

                <img
                  src={keeper}
                  alt=""
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />

                <div className="relative border border-gray-100 bg-white p-6">

                  <h3 className="mt-1.5 text-lg font-medium text-gray-900">
                    Keeper App
                  </h3>

                  <p className="mt-1.5 mb-3 line-clamp-3 text-gray-700">
                    My Todo List App Project that I&apos;ve been worked on.
                  </p>
      
                    <button
                      type="button"
                      className="block w-full rounded bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                    >
                      View Project
                    </button>
                  
                </div>
              </a>
          </div>

          <div>
              <a href="https://agungshndy.github.io/qr-code-project/" target='_blank' className="group relative block overflow-hidden">
                <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <span className="sr-only">Wishlist</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>

                <img
                  src={qrcode}
                  alt=""
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />

                <div className="relative border border-gray-100 bg-white p-6">

                  <h3 className="mt-1.5 text-lg font-medium text-gray-900">
                    QR Code
                  </h3>

                  <p className="mt-1.5 mb-3 line-clamp-3 text-gray-700">
                    Landing page QR Code web app created from Frontend Mentor challenges.
                  </p>
      
                    <button
                      type="button"
                      className="block w-full rounded bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                    >
                      View Project
                    </button>
                  
                </div>
              </a>
          </div>
        </div>
        </section>
        </div>
      </div>
    );
}

export default Project;