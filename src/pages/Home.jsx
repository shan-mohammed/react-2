import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full text-center">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Welcome to Our App
        </h1>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
          This is a simple React application built with React Router
          and Tailwind CSS. Explore our pages and view user details.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            to="/users"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            View Users
          </Link>

          <Link
            to="/about"
            className="rounded-lg border border-gray-700 px-6 py-3 font-medium text-gray-300 transition hover:bg-gray-900"
          >
            About Us
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Home;
