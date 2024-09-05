'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserIcon, UsersIcon, GraduationCapIcon } from 'lucide-react'

export function LoginPage() {
  const [selectedRole, setSelectedRole] = useState('Student')

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f7f7]">
      <div className="bg-white p-8 rounded-lg shadow-md w-[380px]">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
        
        <div className="flex justify-between mb-6">
          {['Teacher', 'Admin', 'Student'].map((role) => (
            <Button
              key={role}
              variant={selectedRole === role ? "default" : "outline"}
              className="flex-1 mx-1 flex flex-col items-center py-2"
              onClick={() => setSelectedRole(role)}
            >
              {role === 'Teacher' && <UserIcon className="h-5 w-5 mb-1" />}
              {role === 'Admin' && <UsersIcon className="h-5 w-5 mb-1" />}
              {role === 'Student' && <GraduationCapIcon className="h-5 w-5 mb-1" />}
              {role}
            </Button>
          ))}
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="userId">User ID</Label>
            <Input id="userId" placeholder="Enter your user ID" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
        </div>
        
        <Button className="w-full mt-6" variant="default">
          Login
        </Button>
        
        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}