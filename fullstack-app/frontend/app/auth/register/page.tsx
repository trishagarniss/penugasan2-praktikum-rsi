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
import {useState} from "react";


export default function RegistrationCard() {
  const [username, setUsername] = useState("");

  // Simulasi cek ketersediaan (nanti bisa diganti logic API)
  const isAvailable = username.length > 3 && username !== "admin"; 
  const showMessage = username.length > 0;

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Register new account</CardTitle>
          <CardDescription>
            Enter your credentials below to create your account
          </CardDescription>
          <CardAction>
            <Button variant="link">Log in</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="username">Username</Label>
                </div>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Masukkan username"
                  required
                  // Tambahkan border merah kalau tidak tersedia
                  className={showMessage && !isAvailable ? "border-destructive focus-visible:ring-destructive" : ""}
                />
                
                {/* Pesan Dinamis */}
                {showMessage && (
                  <p className={`text-xs font-medium ${isAvailable ? "text-green-600" : "text-destructive"}`}>
                    {isAvailable ? (
                      "✓ Username tersedia"
                    ) : (
                      username.length <= 3 ? "⚠ Minimal 4 karakter" : "✕ Username sudah digunakan"
                    )}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                </div>
                <Input id="confirm-password" type="password" required />
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
