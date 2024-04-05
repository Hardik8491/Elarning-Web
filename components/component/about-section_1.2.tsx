
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";

export function AboutSection_second() {
  return (
    <div className="container mx-auto px-4">
      <section className="text-center py-16">
        <h2 className="text-4xl font-bold uppercase">About Us</h2>
        <div className="mt-4 mb-8 h-1 w-24 bg-blue-500 mx-auto" />
      </section>
      <section className="flex flex-col lg:flex-row justify-between items-center mb-16">
        <div className="flex-1 mb-8 lg:mb-0">
          <img
            alt="Team Illustration"
            className="mx-auto"
            height="400"
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/400",
              objectFit: "cover",
            }}
            width="400"
          />
        </div>
        <div className="flex-1 space-y-6">
          <div className="flex items-center">
            <LightbulbIcon className="text-blue-500 h-6 w-6" />
            <h3 className="ml-2 text-xl font-semibold">Great Design</h3>
          </div>
          <p className="text-gray-600">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
          <div className="flex items-center">
            <StarIcon className="text-blue-500 h-6 w-6" />
            <h3 className="ml-2 text-xl font-semibold">Finest Quality</h3>
          </div>
          <p className="text-gray-600">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
          <div className="flex items-center">
            <CheckCircleIcon className="text-blue-500 h-6 w-6" />
            <h3 className="ml-2 text-xl font-semibold">Optimal Choice</h3>
          </div>
          <p className="text-gray-600">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
          <div className="flex items-center">
            <ClockIcon className="text-blue-500 h-6 w-6" />
            <h3 className="ml-2 text-xl font-semibold">Time Saving</h3>
          </div>
          <p className="text-gray-600">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row items-center mb-16">
        <div className="flex-1 mb-8 lg:mb-0 lg:mr-8">
          <img
            alt="About Company"
            className="rounded-lg shadow-lg"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "500/300",
              objectFit: "cover",
            }}
            width="500"
          />
        </div>
        <div className="flex-1 lg:ml-8">
          <h3 className="text-3xl font-semibold mb-4">About Company</h3>
          <p className="text-gray-600 mb-8">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-blue-100 rounded-lg p-4">
              <CardHeader>
                <CardTitle>Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-blue-100 rounded-lg p-4">
              <CardHeader>
                <CardTitle>Data Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-blue-100 rounded-lg p-4">
              <CardHeader>
                <CardTitle>Page Ranking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-blue-100 rounded-lg p-4">
              <CardHeader>
                <CardTitle>Location Targeting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="text-center mb-16">
        <h3 className="text-3xl font-semibold mb-4">Our Expert Team</h3>
        <p className="text-gray-600 mb-8">
          Our team of experts always available for any advice or guidance you
          might need.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              alt="Team Member 1"
              className="rounded-full mx-auto mb-4"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <h4 className="text-xl font-semibold">John Doe</h4>
            <p className="text-gray-500">CEO & Founder</p>
          </div>
          <div>
            <img
              alt="Team Member 2"
              className="rounded-full mx-auto mb-4"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <h4 className="text-xl font-semibold">Jane Smith</h4>
            <p className="text-gray-500">Chief Marketing Officer</p>
          </div>
          <div>
            <img
              alt="Team Member 3"
              className="rounded-full mx-auto mb-4"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <h4 className="text-xl font-semibold">Mike Johnson</h4>
            <p className="text-gray-500">Head of Sales</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function LightbulbIcon(props: any) {
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
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function StarIcon(props: any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
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
  );
}

function ClockIcon(props: any) {
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
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
