import { Button } from "@ranza/shared/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@ranza/shared/components/ui/card";
import { Input } from "@ranza/shared/components/ui/input";
import { Label } from "@ranza/shared/components/ui/label";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-50 to-luxury-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl border-luxury-200">
        <CardHeader className="text-center pb-8">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-luxury-800 to-luxury-900 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-gold-300 font-bold text-lg">R</span>
            </div>
            <h1 className="text-3xl font-bold text-luxury-900">Ranza</h1>
          </div>
          <CardTitle className="text-2xl text-luxury-900">Welcome Back</CardTitle>
          <CardDescription className="text-luxury-600">
            Sign in to your premium account to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="+233 24 123 4567" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                id="remember"
                type="checkbox"
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <Label htmlFor="remember" className="text-sm">
                Remember me
              </Label>
            </div>
            <Link href="/forgot-password" className="text-sm text-primary hover:underline">
              Forgot password?
            </Link>
          </div>
          
          <Button className="w-full bg-gradient-to-r from-luxury-800 to-luxury-900 hover:from-luxury-900 hover:to-luxury-950 shadow-lg" size="lg">
            Sign In
          </Button>
          
          <div className="text-center text-sm text-luxury-600">
            Don't have an account?{" "}
            <Link href="/signup" className="text-luxury-900 hover:underline font-medium">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
