"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserIcon, UsersIcon, GraduationCapIcon, Loader2 } from "lucide-react";
import Link from "next/link";
import Header from "@/components/ui/Header";

export function SignupPage() {
  const [selectedRole, setSelectedRole] = useState("Student");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const signupURL = "https://scms-r1bo.onrender.com/api/auth/signup";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const userData = { ...user, role: selectedRole };

    try {
      const response = await axios.post(signupURL, userData);
      if (response.status === 200) {
        toast.success("Account Created 🎉");
        window.location.href = "https://scms-nu.vercel.app/student-dashboard";
      } else {
        toast.error("Signup failed");
      }
    } catch (error) {
      toast.error("Signup Error");
      console.log("Signup error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-[#f5f7f7]">
        <div className="bg-white p-8 rounded-lg shadow-md w-[380px]">
          <h1 className="text-3xl font-bold text-center mb-6">Sign up</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between mb-6">
              {["Teacher", "Admin", "Student"].map((role) => (
                <Button
                  key={role}
                  variant={selectedRole === role ? "default" : "outline"}
                  className="flex-1 mx-1 flex flex-col items-center py-2"
                  onClick={() => setSelectedRole(role)}
                  disabled={loading}
                >
                  {role === "Teacher" && <UserIcon className="h-5 w-5 mb-1" />}
                  {role === "Admin" && <UsersIcon className="h-5 w-5 mb-1" />}
                  {role === "Student" && <GraduationCapIcon className="h-5 w-5 mb-1" />}
                  {role}
                </Button>
              ))}
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  onChange={handleInput}
                  name="fullName"
                  id="fullName"
                  placeholder="Enter your Full Name"
                  disabled={loading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  onChange={handleInput}
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                  disabled={loading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  onChange={handleInput}
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  disabled={loading}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full mt-6 flex justify-center"
              variant="default"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="animate-spin h-5 w-5" />
              ) : (
                "Sign up"
              )}
            </Button>
          </form>

          <p className="text-center mt-4 text-sm">
            {` Don't `}Already Have an Account?{" "}
            <Link href="/login">
              <span className="text-blue-600 hover:underline">Log in</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
