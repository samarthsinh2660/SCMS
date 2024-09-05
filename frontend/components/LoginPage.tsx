import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { UserIcon, UsersIcon, GraduationCapIcon } from 'lucide-react'

export default function LoginPage() {
  const [showSignUp, setShowSignUp] = useState(false)
  const [loginType, setLoginType] = useState<'teacher' | 'admin' | 'student' | null>(null)

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault()
    // Implement login logic here
    console.log('Logging in as:', loginType)
  }

  const handleSignUp = (event: React.FormEvent) => {
    event.preventDefault()
    // Implement sign-up logic here
    console.log('Signing up')
    setShowSignUp(false)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Button 
            variant={loginType === 'teacher' ? 'default' : 'outline'} 
            className="flex flex-col items-center justify-center h-24"
            onClick={() => setLoginType('teacher')}
          >
            <UserIcon className="h-8 w-8 mb-2" />
            Teacher
          </Button>
          <Button 
            variant={loginType === 'admin' ? 'default' : 'outline'} 
            className="flex flex-col items-center justify-center h-24"
            onClick={() => setLoginType('admin')}
          >
            <UsersIcon className="h-8 w-8 mb-2" />
            Admin
          </Button>
          <Button 
            variant={loginType === 'student' ? 'default' : 'outline'} 
            className="flex flex-col items-center justify-center h-24"
            onClick={() => setLoginType('student')}
          >
            <GraduationCapIcon className="h-8 w-8 mb-2" />
            Student
          </Button>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Label htmlFor="userId">User ID</Label>
            <Input id="userId" type="text" placeholder="Enter your user ID" required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" required />
          </div>
          <Button type="submit" className="w-full">Login</Button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          {"Don't have an account?"}{" "}
          <Dialog open={showSignUp} onOpenChange={setShowSignUp}>
            <DialogTrigger asChild>
              <Button variant="link" className="p-0">Sign up</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Sign Up</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSignUp} className="space-y-4">
                <div>
                  <Label htmlFor="newUserId">User ID</Label>
                  <Input id="newUserId" type="text" placeholder="Choose a user ID" required />
                </div>
                <div>
                  <Label htmlFor="newPassword">Password</Label>
                  <Input id="newPassword" type="password" placeholder="Choose a password" required />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" placeholder="Confirm your password" required />
                </div>
                <Button type="submit" className="w-full">Sign Up</Button>
              </form>
            </DialogContent>
          </Dialog>
        </p>
      </div>
    </div>
  )
}