"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Book,
  Users,
  UserCheck,
  Shield,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

interface LoginModalProps {
  role: string; // 'Student' | 'Teacher' | 'Admin' would be more specific
  onClose: () => void;
}
const Header = () => (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Book className="h-8 w-8 text-blue-600" />
          <span className="font-bold text-xl">SCMS</span>
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">Contact</Button>
          <Button variant="ghost">Help Center</Button>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
          >
            Login
          </Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
)

const HeroSection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-500 to-blue-600">
    <div className="container mx-auto px-4 text-center text-white">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
        Welcome to Your Smart Classroom Management System
      </h1>
      <p className="mt-4 text-xl">
        Manage your classrooms, engage students, and streamline operations all
        in one place.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button size="lg" className="bg-white text-blue-600">
          Login as Student
        </Button>
        <Button size="lg" className="bg-white text-blue-600">
          Login as Teacher
        </Button>
        <Button size="lg" className="bg-white text-blue-600">
          Login as Admin
        </Button>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
        What Can You Do with SCMS?
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-6 w-6 mr-2" />
              For Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            Access assignments, check attendance, and engage with interactive
            learning tools.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <UserCheck className="h-6 w-6 mr-2" />
              For Teachers
            </CardTitle>
          </CardHeader>
          <CardContent>
            Automate attendance, manage classroom resources, and analyze student
            performance.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-6 w-6 mr-2" />
              For Admins
            </CardTitle>
          </CardHeader>
          <CardContent>
            Oversee all classrooms, manage users, and ensure safety and security
            compliance.
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const BenefitsSection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
        How SCMS Benefits You
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold mb-4">Students</h3>
          <p>
            Learn seamlessly with real-time access to class resources and
            performance insights.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Teachers</h3>
          <p>
            Save time with automated tools and focus on enhancing learning
            experiences.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Admins</h3>
          <p>
            Ensure smooth classroom operations with easy management tools and
            instant alerts.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const GetStartedSection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold tracking-tighter mb-8">
        Ready to Start?
      </h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-3xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
            1
          </div>
          <p>Choose your role (Student, Teacher, Admin)</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
            2
          </div>
          <p>Log in or Sign up</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
            3
          </div>
          <p>Start managing your classroom experience</p>
        </div>
      </div>
      <Button size="lg" className="mt-12">
        Sign Up Now
      </Button>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
        Hear from Our Users
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">
              {` "SCMS has transformed how I manage my classroom. It's intuitive
              and saves me so much time!"`}
            </p>
            <p className="font-bold">- Sarah Johnson, Teacher</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">
              {` "As a student, I love how easy it is to access all my assignments
              and track my progress."`}
            </p>
            <p className="font-bold">- Mike Chen, Student</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">
              {`"SCMS has streamlined our school's operations. It's a game-changer
              for administrators."`}
            </p>
            <p className="font-bold">- Robert Davis, School Administrator</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full py-6 bg-gray-800 text-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <nav className="flex gap-4 mb-4 md:mb-0">
          <a href="#" className="text-sm hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-sm hover:underline">
            Terms of Service
          </a>
          <a href="#" className="text-sm hover:underline">
            Help Center
          </a>
          <a href="#" className="text-sm hover:underline">
            Contact Us
          </a>
        </nav>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm">
            System Status: All Systems Operational
          </span>
        </div>
      </div>
    </div>
  </footer>
);

const LoginModal: React.FC<LoginModalProps> = ({ role, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Login as {role}</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <Input
              id="username"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
            <Button type="submit">Login</Button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            {`Don't`} have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
    <Button
      variant="ghost"
      className="absolute top-4 right-4 text-white"
      onClick={onClose}
    >
      Close
    </Button>
  </div>
);

export function HomePage() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [loginRole, setLoginRole] = useState("");
  const openLoginModal = (role: string) => {
    setLoginRole(role);
    setLoginModalOpen(true);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <GetStartedSection />
        <TestimonialsSection />
      </main>
      <Footer />
      {loginModalOpen && (
        <LoginModal role={loginRole} onClose={() => setLoginModalOpen(false)} />
      )}
    </div>
  );
}
