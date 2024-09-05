import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Calendar,
  FileText,
  MessageCircle,
  ArrowRight,
  CheckSquare,
  BarChart2,
  PlusCircle,
  Book,
  Users,
  Briefcase,
  Settings,
  HelpCircle,
  LogOut,
  ChevronDown,
  Send,
} from "lucide-react";
import Header from "@/components/ui/Header";

export default function StudentDashboard({ studentName = "Alex" }) {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome, {studentName}!
            </h2>
            <p className="text-gray-600 mb-4">
             {` Here's your classroom at a glance.`}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
               {` Today's Schedule`}
              </Button>
              <Button variant="outline" className="flex items-center">
                <FileText className="mr-2 h-4 w-4" />
                Assignments Due
              </Button>
              <Button variant="outline" className="flex items-center">
                <MessageCircle className="mr-2 h-4 w-4" />
                Recent Messages
              </Button>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Upcoming Classes Section */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Classes</CardTitle>
              </CardHeader>
              <CardContent>
                {["Math", "Science", "History"].map((subject, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center mb-4 last:mb-0"
                  >
                    <div>
                      <p className="font-medium">{subject}</p>
                      <p className="text-sm text-gray-500">
                        Today, {9 + index}:00 AM
                      </p>
                    </div>
                    <Button size="sm" className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Join Class
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Assignments Overview Section */}
            <Card>
              <CardHeader>
                <CardTitle>Your Assignments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-4">
                  <div>
                    <p className="font-medium">Due Soon</p>
                    <p className="text-sm text-gray-500">
                      Math Project - Due in 2 days
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Completed</p>
                    <p className="text-sm text-gray-500">
                      Science Lab Report - Graded: A
                    </p>
                  </div>
                </div>
                <Button className="w-full flex items-center justify-center">
                  <CheckSquare className="mr-2 h-4 w-4" />
                  View All Assignments
                </Button>
              </CardContent>
            </Card>

            {/* Attendance Tracker Section */}
            <Card>
              <CardHeader>
                <CardTitle>Your Attendance</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={85} className="mb-4" />
                <p className="text-center mb-4">
                  You have 85% attendance this month.
                </p>
                <Button className="w-full flex items-center justify-center">
                  <BarChart2 className="mr-2 h-4 w-4" />
                  View Detailed Report
                </Button>
              </CardContent>
            </Card>

            {/* Interactive Learning Section */}
            <Card>
              <CardHeader>
                <CardTitle>Interactive Learning Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <Button
                    variant="outline"
                    className="h-24 flex flex-col items-center justify-center"
                  >
                    <Book className="h-8 w-8 mb-2" />
                    Quizzes
                  </Button>
                  <Button
                    variant="outline"
                    className="h-24 flex flex-col items-center justify-center"
                  >
                    <FileText className="h-8 w-8 mb-2" />
                    Practice Exercises
                  </Button>
                </div>
                <Button className="w-full flex items-center justify-center">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Start Learning
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Messages and Notifications Section */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-4">
                {[
                  "New assignment posted",
                  "Upcoming test reminder",
                  "Grades updated",
                ].map((message, index) => (
                  <li key={index} className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2 text-blue-500" />
                    <span>{message}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full flex items-center justify-center">
                <MessageCircle className="mr-2 h-4 w-4" />
                View All Messages
              </Button>
            </CardContent>
          </Card>

          {/* Student Resources Section */}
          <section className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Resources for You</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                variant="outline"
                className="h-32 flex flex-col items-center justify-center"
              >
                <Book className="h-8 w-8 mb-2" />
                Library Access
              </Button>
              <Button
                variant="outline"
                className="h-32 flex flex-col items-center justify-center"
              >
                <Users className="h-8 w-8 mb-2" />
                Tutoring Help
              </Button>
              <Button
                variant="outline"
                className="h-32 flex flex-col items-center justify-center"
              >
                <Briefcase className="h-8 w-8 mb-2" />
                Career Guidance
              </Button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <nav className="flex space-x-4 mb-4 md:mb-0">
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Contact Us
                </a>
              </nav>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">
                 {` We'd love to hear your feedback!`}
                </span>
                <Button size="sm" className="flex items-center">
                  <Send className="mr-2 h-4 w-4" />
                  Give Feedback
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
