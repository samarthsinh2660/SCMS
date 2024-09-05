import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Users,
  FileText,
  AlertTriangle,
  PlusCircle,
  BarChart2,
  Activity,
  Settings,
  HelpCircle,
  LogOut,
  ChevronDown,
  Send,
  UserPlus,
  Edit3,
  UserMinus,
  Calendar,
  Printer,
  Monitor,
  Bell,
  Shield,
  MessageSquare,
} from "lucide-react";
import Header from "@/components/ui/Header";
export default function AdminDashboard({ adminName = "John Admin" }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome, {adminName}!
          </h2>
          <p className="text-gray-600 mb-4">
            Manage your {`school's`} classrooms, resources, and users
            efficiently.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="flex items-center">
              <UserPlus className="mr-2 h-4 w-4" />
              Add New User
            </Button>
            <Button variant="outline" className="flex items-center">
              <FileText className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
            <Button variant="outline" className="flex items-center">
              <Activity className="mr-2 h-4 w-4" />
              System Status
            </Button>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* User Management Section */}
          <Card>
            <CardHeader>
              <CardTitle>Manage Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-4">
                <div className="flex justify-between items-center">
                  <p>Total Students: 1000</p>
                  <p>Total Teachers: 50</p>
                  <p>Total Admins: 5</p>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" className="flex items-center">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Add New User
                  </Button>
                  <Button size="sm" className="flex items-center">
                    <Edit3 className="mr-2 h-4 w-4" />
                    Edit User Profiles
                  </Button>
                  <Button size="sm" className="flex items-center">
                    <UserMinus className="mr-2 h-4 w-4" />
                    Remove Users
                  </Button>
                </div>
              </div>
              <Button className="w-full">View All Users</Button>
            </CardContent>
          </Card>

          {/* Class Scheduling Section */}
          <Card>
            <CardHeader>
              <CardTitle>Class Scheduling</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-4">
                <p>Current active schedules: 25</p>
                <div className="flex space-x-2">
                  <Button size="sm" className="flex items-center">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Create Schedule
                  </Button>
                  <Button size="sm" className="flex items-center">
                    <Edit3 className="mr-2 h-4 w-4" />
                    Modify Schedule
                  </Button>
                  <Button size="sm" className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    View Schedules
                  </Button>
                </div>
              </div>
              <Button className="w-full">Manage Schedules</Button>
            </CardContent>
          </Card>

          {/* System Reports Section */}
          <Card>
            <CardHeader>
              <CardTitle>Generate Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-4">
                <div className="flex space-x-2">
                  <Button size="sm" className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    Attendance Report
                  </Button>
                  <Button size="sm" className="flex items-center">
                    <BarChart2 className="mr-2 h-4 w-4" />
                    Performance Report
                  </Button>
                  <Button size="sm" className="flex items-center">
                    <Activity className="mr-2 h-4 w-4" />
                    Resource Usage Report
                  </Button>
                </div>
                <p>Recently generated reports:</p>
                <ul className="list-disc pl-5">
                  <li>Monthly Attendance Report - 05/15/2023</li>
                  <li>Quarterly Performance Summary - 04/01/2023</li>
                </ul>
              </div>
              <Button className="w-full">Generate New Report</Button>
            </CardContent>
          </Card>

          {/* Resource Management Section */}
          <Card>
            <CardHeader>
              <CardTitle>Resource Utilization</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-4">
                <div className="flex justify-between items-center">
                  <p>Projectors: 20/25 in use</p>
                  <p>Computers: 95/100 operational</p>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Maintenance
                  </Button>
                  <Button size="sm" className="flex items-center">
                    <Monitor className="mr-2 h-4 w-4" />
                    Upgrade Resources
                  </Button>
                </div>
              </div>
              <Button className="w-full">View All Resources</Button>
            </CardContent>
          </Card>
        </div>

        {/* System Alerts & Notifications Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>System Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 mb-4">
              {[
                "System update scheduled for 06/01/2023",
                "Security patch available for immediate installation",
                "Unusual login activity detected - please review",
              ].map((alert, index) => (
                <li key={index} className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-yellow-500" />
                  <span>{alert}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full">View All Alerts</Button>
          </CardContent>
        </Card>

        {/* Administrative Tools Section */}
        <section className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Admin Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="outline"
              className="h-32 flex flex-col items-center justify-center"
            >
              <Settings className="h-8 w-8 mb-2" />
              System Settings
            </Button>
            <Button
              variant="outline"
              className="h-32 flex flex-col items-center justify-center"
            >
              <Shield className="h-8 w-8 mb-2" />
              Security Management
            </Button>
            <Button
              variant="outline"
              className="h-32 flex flex-col items-center justify-center"
            >
              <MessageSquare className="h-8 w-8 mb-2" />
              Communication Hub
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Help Center
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                System Documentation
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Contact Support
              </a>
            </nav>
            <div className="flex items-center">
              <span className="text-sm text-gray-600 mr-2">
                Help us make SCMS better!
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
  );
}
