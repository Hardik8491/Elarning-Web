
export function AboutSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-10 pb-20">
        <div className="text-center">
          <h2 className="text-3xl font-semibold uppercase tracking-wide">About Us</h2>
          <div className="mt-3 h-1 w-24 bg-blue-500 mx-auto" />
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">About Company</h3>
            <p className="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircleIcon className="text-blue-500 h-6 w-6" />
                <div className="ml-3">
                  <h4 className="text-lg font-semibold">Great Design</h4>
                  <p className="text-sm text-gray-600">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="text-blue-500 h-6 w-6" />
                <div className="ml-3">
                  <h4 className="text-lg font-semibold">Finest Quality</h4>
                  <p className="text-sm text-gray-600">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="text-blue-500 h-6 w-6" />
                <div className="ml-3">
                  <h4 className="text-lg font-semibold">Optimal Choice</h4>
                  <p className="text-sm text-gray-600">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="text-blue-500 h-6 w-6" />
                <div className="ml-3">
                  <h4 className="text-lg font-semibold">Time Saving</h4>
                  <p className="text-sm text-gray-600">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative col-span-1 lg:col-span-2">
            <img
              alt="About Company"
              className="rounded-xl"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="absolute top-0 right-0 mt-10 mr-10 bg-white p-6 shadow-lg rounded-xl w-72">
              <h4 className="text-lg font-semibold mb-3">Consulting</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CircleIcon className="text-blue-500 h-4 w-4" />
                  <span className="ml-2 text-sm">Data Management</span>
                </li>
                <li className="flex items-center">
                  <CircleIcon className="text-blue-500 h-4 w-4" />
                  <span className="ml-2 text-sm">Page Ranking</span>
                </li>
                <li className="flex items-center">
                  <CircleIcon className="text-blue-500 h-4 w-4" />
                  <span className="ml-2 text-sm">Location Targeting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center">Our Expert Team</h3>
          <p className="text-center text-gray-600 mt-2 mb-10">
            Our team of expert designers and developers are ready to transform your ideas into reality.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <img
                alt="Team Member"
                className="rounded-full mx-auto"
                height="150"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "150/150",
                  objectFit: "cover",
                }}
                width="150"
              />
              <h5 className="text-lg font-semibold mt-4">John Doe</h5>
              <p className="text-sm text-gray-600">Project Manager</p>
            </div>
            <div className="text-center">
              <img
                alt="Team Member"
                className="rounded-full mx-auto"
                height="150"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "150/150",
                  objectFit: "cover",
                }}
                width="150"
              />
              <h5 className="text-lg font-semibold mt-4">Jane Smith</h5>
              <p className="text-sm text-gray-600">Lead Designer</p>
            </div>
            <div className="text-center">
              <img
                alt="Team Member"
                className="rounded-full mx-auto"
                height="150"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "150/150",
                  objectFit: "cover",
                }}
                width="150"
              />
              <h5 className="text-lg font-semibold mt-4">Mike Johnson</h5>
              <p className="text-sm text-gray-600">Senior Developer</p>
            </div>
            <div className="text-center">
              <img
                alt="Team Member"
                className="rounded-full mx-auto"
                height="150"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "150/150",
                  objectFit: "cover",
                }}
                width="150"
              />
              <h5 className="text-lg font-semibold mt-4">Emily Davis</h5>
              <p className="text-sm text-gray-600">Marketing Specialist</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


function CheckCircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}


function CircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}
