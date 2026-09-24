function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

          <div>
            <h2 className="text-lg font-bold">
              ReactApp
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              A React Router application
            </p>
          </div>

          <div className="text-center text-sm text-gray-400 sm:text-right">
            <p>
              © 2026 ReactApp. All rights reserved.
            </p>

            <p className="mt-1">
              Built with React & Tailwind CSS
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;