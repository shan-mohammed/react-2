import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-[calc(100vh-72px)] bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-4xl">

        <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-10">

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            About This Application
          </h1>

          <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg">
            This application demonstrates how to build a multi-page
            application using React Router.
          </p>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Users can navigate between different pages, view a list of
            users, and open individual user details using dynamic routes.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">

            <div className="rounded-xl bg-blue-50 p-5">
              <h2 className="font-semibold text-blue-700">
                React
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Functional components
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-5">
              <h2 className="font-semibold text-green-700">
                React Router
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Page navigation
              </p>
            </div>

            <div className="rounded-xl bg-purple-50 p-5">
              <h2 className="font-semibold text-purple-700">
                Tailwind
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Responsive styling
              </p>
            </div>

          </div>

          <Link
            to="/"
            className="mt-8 inline-block rounded-lg bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-700"
          >
            Go Back Home
          </Link>

        </div>
      </div>
    </div>
  );
}

export default About;