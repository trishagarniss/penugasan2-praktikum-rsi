"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDebounce } from "@/hooks/useDebounce"
import { validateEmail,validatePassword } from "@/lib/validation"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function LoginCard() {
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState<string | null>(null)
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState<string | null>(null)
  const debouncedEmail = useDebounce(email, 500)
  const debouncedPassword = useDebounce(password, 500)

  useEffect(() => {
    setEmailError(validateEmail(debouncedEmail))
  }, [debouncedEmail])

  useEffect(() => {
    setPasswordError(validatePassword(debouncedPassword))
  }, [debouncedPassword])

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Login to your account</CardTitle>
                <CardDescription>
                Enter your email and password below to login to your account
                </CardDescription>
                <CardAction>

                <Button variant="link" asChild>
                    <Link href="/auth/register">Sign Up</Link>
                </Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <form>
                <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="email">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={emailError ? "border-destructive focus-visible:ring-destructive" : ""}
                        />
                        {emailError && (
                        <p className="text-xs font-medium text-destructive">{emailError}</p>
                        )}
                    </div>
                    <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">
                          Password <span className="text-destructive">*</span>
                        </Label>
                        </div>
                        <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className={passwordError ? "border-destructive focus-visible:ring-destructive" : ""}
                        />
                        {passwordError && (
                        <p className="text-xs font-medium text-destructive">{passwordError}</p>
                        )}
                    </div>
                </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full">
                Login
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
