'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import {
  Book,
  FileText,
  Users,
  PlusCircle,
  CheckSquare,
  BarChart2,
  MessageCircle,
  Settings,
  HelpCircle,
  LogOut,
  ChevronDown,
  Send,
  BookOpen,
  Tools,
  GraduationCap,
} from 'lucide-react'

export function TeacherDashboard({ teacherName = "Ms. Johnson" }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/placeholder.svg?height=40&width=40" alt="SCMS Logo" className="h-10 w-10 mr-3" />
            <h1 className="text-xl font-bold text-gray-900">SCMS</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Button variant="ghost">Dashboard</Button>
            <Button variant="ghost">Class Management</Button>
            <Button variant="ghost">Assignments</Button>
            <Button variant="ghost">Attendance</Button>
            <Button variant="ghost">Messages</Button>
          </nav>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt={teacherName} />
                  <AvatarFallback>{teacherName.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{teacherName}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>Help</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome, {teacherName}!</h2>
          <p className="text-gray-600 mb-4">Manage your classes and students effortlessly.</p>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="flex items-center">
              <PlusCircle className="mr-2 h-4 w-4" />
              Create New Class
            </Button>
            <Button variant="outline" className="flex items-center">
              <FileText className="mr-2 h-4 w-4" />
              Add Assignment
            </Button>
            <Button variant="outline" className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              Review Attendance
            </Button>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Class Overview Section */}
          <Card>
            <CardHeader>
              <CardTitle>Your Classes</CardTitle>
            </CardHeader>
            <CardContent>
              {['Mathematics 101', 'Physics 202', 'Chemistry 303'].map((subject, index) => (
                <div key={index} className="flex justify-between items-center mb-4 last:mb-0">
                  <div>
                    <p className="font-medium">{subject}</p>
                    <p className="text-sm text-gray-500">Next session: Today, {9 + index}:00 AM</p>
                  </div>
                  <Button size="sm" variant="outline">View</Button>
                </div>
              ))}
              <Button className="w-full mt-4">Manage Classes</Button>
            </CardContent>
          </Card>

          {/* Assignments Management Section */}
          <Card>
            <CardHeader>
              <CardTitle>Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Math Quiz</p>
                    <p className="text-sm text-gray-500">Due Soon</p>
                  </div>
                  <Button size="sm" variant="outline">Edit</Button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Physics Lab Report</p>
                    <p className="text-sm text-gray-500">Graded</p>
                  </div>
                  <Button size="sm" variant="outline">View</Button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Chemistry Essay</p>
                    <p className="text-sm text-gray-500">Pending Review</p>
                  </div>
                  <Button size="sm" variant="outline">Review</Button>
                </div>
              </div>
              <Button className="w-full">View All Assignments</Button>
            </CardContent>
          </Card>

          {/* Attendance Overview Section */}
          <Card>
            <CardHeader>
              <CardTitle>Attendance Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Mathematics 101</p>
                  <Progress value={85} className="h-2" />
                  <p className="text-sm text-gray-500 mt-1">85% attendance</p>
                </div>
                <div>
                  <p className="font-medium mb-2">Physics 202</p>
                  <Progress value={92} className="h-2" />
                  <p className="text-sm text-gray-500 mt-1">92% attendance</p>
                </div>
                <div>
                  <p className="font-medium mb-2">Chemistry 303</p>
                  <Progress value={78} className="h-2" />
                  <p className="text-sm text-gray-500 mt-1">78% attendance</p>
                </div>
              </div>
              <Button className="w-full mt-4">Manage Attendance</Button>
            </CardContent>
          </Card>

          {/* Student Performance Insights Section */}
          <Card>
            <CardHeader>
              <CardTitle>Student Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-4">
                <div>
                  <p className="font-medium">Top Performers</p>
                  <p className="text-sm text-gray-500">John Doe, Jane Smith, Alex Johnson</p>
                </div>
                <div>
                  <p className="font-medium">Needs Improvement</p>
                  <p className="text-sm text-gray-500">Mike Brown, Sarah Lee</p>
                </div>
              </div>
              <Button className="w-full">View Detailed Reports</Button>
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
              {['New assignment question from student', 'Parent meeting request', 'Admin announcement'].map((message, index) => (
                <li key={index} className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-blue-500" />
                  <span>{message}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full">View All Messages</Button>
          </CardContent>
        </Card>

        {/* Teaching Resources Section */}
        <section className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Teaching Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-32 flex flex-col items-center justify-center">
              <BookOpen className="h-8 w-8 mb-2" />
              Learning Materials
            </Button>
            <Button variant="outline" className="h-32 flex flex-col items-center justify-center">
              <Tools className="h-8 w-8 mb-2" />
              Teaching Tools
            </Button>
            <Button variant="outline" className="h-32 flex flex-col items-center justify-center">
              <GraduationCap className="h-8 w-8 mb-2" />
              Professional Development
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Terms of Service</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Help Center</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Contact Us</a>
            </nav>
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-2">Help us improve our platform!</span>
              <Button size="sm" className="flex items-center">
                <Send className="mr-2 h-4 w-4" />
                Give Feedback
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}