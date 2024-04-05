
import { Heading } from "../ui/heading"
import { Separator } from "../ui/separator"

export function FAQ() {
  return (
    <div className="container py-4 cursor-pointer">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="flex items-center mb-2  justify-between">
          <Heading title="FAQ" description="Manage App preferences" />
        </div>
        <Separator className='mb-6' />
      </header>
      <div className="max-w-full mx-auto p-6">

        <div className="space-y-4">
          <details className="group">
            <summary className="flex justify-between items-center p-4 rounded-lg bg-gray-100 cursor-pointer">
              <span className="text-lg font-medium">How can I enroll students in specific courses or classes?</span>
              <ChevronDownIcon className="w-6 h-6 text-gray-500 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-4 pb-4">
              <p>
                Enrollment options are typically available in the admin dashboard or course management section, allowing
                administrators to assign students to courses manually or through automated processes.
              </p>
            </div>
          </details>
          <details className="group">
            <summary className="flex justify-between items-center p-4 rounded-lg bg-gray-100 cursor-pointer">
              <span className="text-lg font-medium">
                What should I do if a student encounters technical issues during an assessment?
              </span>
              <ChevronDownIcon className="w-6 h-6 text-gray-500 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-4 pb-4">
              <p>
                In such cases, students should contact the support team or helpdesk provided by the platform. They can
                usually find contact information or a support link within the system or on the website.
              </p>
            </div>
          </details>
          <details className="group">
            <summary className="flex justify-between items-center p-4 rounded-lg bg-gray-100 cursor-pointer">
              <span className="text-lg font-medium">
                Can students review their past assessment results and feedback?
              </span>
              <ChevronDownIcon className="w-6 h-6 text-gray-500 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-4 pb-4">
              <p>
                Yes, students can usually view their past assessment results and any feedback provided by instructors or
                automated grading systems. This information is typically accessible in the student dashboard or
                assessment history section.
              </p>
            </div>
          </details>
          <details className="group">
            <summary className="flex justify-between items-center p-4 rounded-lg bg-gray-100 cursor-pointer">
              <span className="text-lg font-medium">
                How are assessments graded, and when do students receive their grades?
              </span>
              <ChevronDownIcon className="w-6 h-6 text-gray-500 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-4 pb-4">
              <p>
                Assessments are graded according to the criteria set by the instructor or the platform`s automated
                grading system. Students typically receive their grades shortly after the assessment period ends, and
                they can access them through the student dashboard or grades section.
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  )
}




function ChevronDownIcon(props:any) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
