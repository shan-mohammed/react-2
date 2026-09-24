import { Link, useParams } from "react-router-dom";
import { users } from "./Users";

function UserDetails() {
  const { id } = useParams();

  const user = users.find(
    (user) => user.id === Number(id)
  );

  if (!user) {
    return (
      <div className="flex min-h-[calc(100vh-72px)] items-center justify-center bg-gray-50 px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900">
            User Not Found
          </h1>

          <p className="mt-3 text-gray-600">
            The user you are looking for does not exist.
          </p>

          <Link
            to="/users"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
          >
            Back to Users
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-72px)] bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-3xl">

        <Link
          to="/users"
          className="mb-6 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          ← Back to Users
        </Link>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

          {/* Header */}
          <div className="bg-gray-900 px-6 py-10 text-center text-white sm:px-10">

            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold">
              {user.name.charAt(0)}
            </div>

            <h1 className="mt-5 text-3xl font-bold">
              {user.name}
            </h1>

            <p className="mt-2 text-gray-300">
              {user.role}
            </p>

          </div>

          {/* Details */}
          <div className="p-6 sm:p-10">

            <h2 className="text-xl font-semibold text-gray-900">
              User Information
            </h2>

            <div className="mt-6 space-y-5">

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">
                  User ID
                </p>

                <p className="mt-1 font-medium text-gray-900">
                  {user.id}
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">
                  Name
                </p>

                <p className="mt-1 font-medium text-gray-900">
                  {user.name}
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="mt-1 font-medium text-gray-900">
                  {user.email}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Role
                </p>

                <p className="mt-1 font-medium text-gray-900">
                  {user.role}
                </p>
              </div>

            </div>

            <Link
              to="/users"
              className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              Go Back
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;