import { Link } from "react-router-dom";

export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Developer",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Designer",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    role: "Manager",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    role: "Developer",
  },
];

function Users() {
  return (
    <div className="min-h-[calc(100vh-72px)] bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Users
          </h1>

          <p className="mt-2 text-gray-600">
            Select a user to view their details.
          </p>
        </div>

        {/* User Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {users.map((user) => (
            <div
              key={user.id}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              {/* Avatar */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
                {user.name.charAt(0)}
              </div>

              <h2 className="mt-5 text-xl font-semibold text-gray-900">
                {user.name}
              </h2>

              <p className="mt-2 text-gray-500">
                {user.email}
              </p>

              <p className="mt-2 text-sm font-medium text-blue-600">
                {user.role}
              </p>

              <Link
                to={`/users/${user.id}`}
                className="mt-5 block rounded-lg bg-blue-600 px-4 py-3 text-center font-medium text-white transition hover:bg-blue-700"
              >
                View Details
              </Link>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Users;