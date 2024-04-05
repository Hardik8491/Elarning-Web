/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/pXdqxnB9RzO
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Explore_1_3() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center">Our Features</h2>
          <p className="mt-4 text-center text-gray-500">
            Try our revolutionary features, made for building a world-class online school
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="w-full">
              <CardContent>
                <Avatar>
                  <AvatarImage alt="Profile picture" src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 font-semibold text-lg">A user interface designed for the classroom</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Modern and clean UI that gets out of your way and lets you focus on what`s important.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Learn More</Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardContent>
                <Avatar>
                  <AvatarImage alt="Profile picture" src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 font-semibold text-lg">Tools for Teachers and Learners</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Comprehensive set of tools to run a classroom and engage with your students in new and innovative
                  ways.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Learn More</Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardContent>
                <Avatar>
                  <AvatarImage alt="Profile picture" src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 font-semibold text-lg">Assessments, Quizzes, Tests</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Build exams, quizzes, and tests with our powerful assessment tools and track student progress.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="w-full">
              <CardContent>
                <h3 className="font-semibold text-lg">Class Management Tools for Educators</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Take control of your classroom with our class management tools that help you stay organized and
                  efficient.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Learn More</Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardContent>
                <h3 className="font-semibold text-lg">One-on-One Discussions</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Engage with your students on a more personal level with our one-on-one discussion tools.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
