"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {useState, useEffect} from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { validateEmail, validatePassword, validateConfirmPassword, validateUsername, validateWhatsapp } from "@/lib/validation";
import Link from "next/link";

export default function RegistrationCard() {
  const [username, setUsername] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<string | null>(null);
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [whatsappError, setWhatsappError] = useState<string | null>(null);

  const debouncedWhatsapp = useDebounce(whatsapp, 500);
  const debouncedUsername = useDebounce(username, 500);
  const debouncedEmail = useDebounce(email, 500);
  const debouncedPassword = useDebounce(password, 500);
  const debouncedConfirmPassword = useDebounce(confirmPassword, 500);

  useEffect(() => {
    setEmailError(validateEmail(debouncedEmail));
  }, [debouncedEmail]); 

  useEffect(() => {
    setPasswordError(validatePassword(debouncedPassword));
  }, [debouncedPassword]);

  useEffect(() => {
    setConfirmPasswordError(validateConfirmPassword(debouncedPassword, debouncedConfirmPassword));
  }, [debouncedPassword, debouncedConfirmPassword]);

  useEffect(() => {
    setWhatsappError(validateWhatsapp(debouncedWhatsapp));
  }, [debouncedWhatsapp]);

  useEffect(() => {
    setUsernameError(validateUsername(debouncedUsername));
  }, [debouncedUsername]);

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Register new account</CardTitle>
          <CardDescription>
            Enter your credentials below to create your account
          </CardDescription>
          <CardAction>
            <Button variant="link" asChild>
              <Link href="/auth/login">Log in</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="first-name">
                  First Name <span className="text-destructive">*</span>
                </Label>
                <Input id="first-name" type="text" required/>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" type="text"/>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="whatsapp">
                  Whatsapp <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="whatsapp"
                  type="text"
                  placeholder="081234567890"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value.replace(/\D/g, "").slice(0, 12))}
                  required
                  className={whatsappError ? "border-destructive focus-visible:ring-destructive" : ""}
                />
                {whatsappError && (
                  <p className="text-xs font-medium text-destructive">{whatsappError}</p>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="username">
                    Username <span className="text-destructive">*</span>
                  </Label>
                </div>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Masukkan username"
                  required
                  className={usernameError ? "border-destructive focus-visible:ring-destructive" : ""}
                />
                {usernameError ? (
                  <p className="text-xs font-medium text-destructive">{usernameError}</p>
                ) : username.length > 3 && (
                  <p className="text-xs font-medium text-green-600">Username available!</p>
                )}
              </div>
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
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="confirm-password">
                    Confirm Password <span className="text-destructive">*</span>
                  </Label>
                </div>
                <Input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className={confirmPasswordError ? "border-destructive focus-visible:ring-destructive" : ""}
                />
                {confirmPasswordError && (
                  <p className="text-xs font-medium text-destructive">{confirmPasswordError}</p>
                )}
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Register
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
