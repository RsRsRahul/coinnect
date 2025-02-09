"use client"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { api } from "~/trpc/react"

export default function LoginDialog() {
  const login = api.post.login.useMutation();
  const [open, setOpen] = useState(false);
  const [loginflag, setLoginFlag] = useState(false);
  const [data, setData] = useState<{ name: string; password: string; id: number; uName: string; bId: number; createdAt: Date } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const uname = (e.target as HTMLFormElement).elements.namedItem("email") as HTMLInputElement
    const password = (e.target as HTMLFormElement).elements.namedItem("password") as HTMLInputElement
    login.mutateAsync({ name: uname.value, password: password.value }).then((res) => {
      localStorage.setItem("user", JSON.stringify(res));
      console.log(res);
      setLoginFlag(res?.bId !== undefined);
    }).catch((err) => {
      console.log(err);
    });
    console.log("Login submitted")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-colors"
        >
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 border border-blue-400">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-400">Login to Coinnect</DialogTitle>
          <DialogDescription className="text-gray-400">
            Enter your credentials to access your account.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">
              Email
            </Label>
            <Input
              id="email"
              type="text"
              placeholder="Enter your email"
              required
              className="bg-gray-800 border-gray-700 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-300">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
              className="bg-gray-800 border-gray-700 text-white"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white"
          >
            Login
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

