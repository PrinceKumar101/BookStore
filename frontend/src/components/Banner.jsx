import React from "react";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-zinc-50 to-zinc-100">
        <div className="w-full h-screen flex flex-col md:flex-row gap-5 md:gap-1   ">
          <div className="w-full md:w-1/2  flex flex-col gap-5 pl-20 pt-28">
            <h2 className="text-4xl font-bold leading-relaxed indent-7 tracking-wide">
              Hello, Welcome here to learn <br />
              something
              <span className="text-clip text-transparent bg-pink-500 text-5xl bg-clip-text tracking-wider">
                new everyday!!!
              </span>
            </h2>
            <h3 className="p-3 text-2xl tracking-tight leading-snug ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              corporis nemo sit deleniti, pariatur minima fuga porro quos
              necessitatibus, facere fugit aliquam quo id iste esse, in
              recusandae incidunt quibusdam.
            </h3>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>

            <button className="btn btn-outline btn-secondary w-fit bg-pink-500 rounded-lg">
              <span className="text-white leading-smug tracking-widest">
                Login
              </span>
            </button>
          </div>
          <div className="w-full md:w-1/2  flex justify-center">
            <img
              src="/images/hand-drawn-flat-design-stack-books-illustration.png"
              className=""
              alt=""
            />
          </div>
        </div>

        <div id="free_books_only" className="flex gap-5 mb-5 ml-9">
          <Link to="#">
            <div className="max-w-md rounded overflow-hidden shadow-lg bg-white p-6 m-4 w-72 h-fit">
              <div className="flex justify-center mb-4 w-full h-1/2">
                <img
                  className="w-full h-full object-cover"
                  src="/images/hand-drawn-flat-design-stack-books-illustration.png"
                  alt="Books Illustration"
                />
              </div>
              <div className="text-center mb-2">
                <h2 className="text-2xl font-semibold">Name</h2>
              </div>
              <div className="text-center">
                <p className="text-gray-700">Description</p>
              </div>
            </div>
          </Link>
          <Link to="#">
            <div className="max-w-md rounded overflow-hidden shadow-lg bg-white p-6 m-4 w-72 h-fit">
              <div className="flex justify-center mb-4 w-full h-1/2">
                <img
                  className="w-full h-full object-cover"
                  src="/images/hand-drawn-flat-design-stack-books-illustration.png"
                  alt="Books Illustration"
                />
              </div>
              <div className="text-center mb-2">
                <h2 className="text-2xl font-semibold">Name</h2>
              </div>
              <div className="text-center">
                <p className="text-gray-700">Description</p>
              </div>
            </div>
          </Link>
          <Link to="#">
            <div className="max-w-md rounded overflow-hidden shadow-lg bg-white p-6 m-4 w-72 h-fit">
              <div className="flex justify-center mb-4 w-full h-1/2">
                <img
                  className="w-full h-full object-cover"
                  src="/images/hand-drawn-flat-design-stack-books-illustration.png"
                  alt="Books Illustration"
                />
              </div>
              <div className="text-center mb-2">
                <h2 className="text-2xl font-semibold">Name</h2>
              </div>
              <div className="text-center">
                <p className="text-gray-700">Description</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Banner;
