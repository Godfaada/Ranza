import { Button } from "@ranza/shared/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@ranza/shared/components/ui/card";
import { Input } from "@ranza/shared/components/ui/input";
import { Label } from "@ranza/shared/components/ui/label";
import Link from "next/link";

export default function SignUpPage() {
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
          <CardTitle className="text-2xl text-luxury-900">Create Your Premium Account</CardTitle>
          <CardDescription className="text-luxury-600">
            Join our exclusive community of discerning travelers
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Enter your full name" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="+233 24 123 4567" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email (Optional)</Label>
            <Input id="email" type="email" placeholder="your.email@example.com" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="role">I want to</Label>
            <select 
              id="role" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select your role</option>
              <option value="passenger">Find rides as a passenger</option>
              <option value="driver">Offer rides as a driver</option>
              <option value="both">Both - drive and find rides</option>
            </select>
          </div>
          
          <Button className="w-full bg-gradient-to-r from-luxury-800 to-luxury-900 hover:from-luxury-900 hover:to-luxury-950 shadow-lg" size="lg">
            Create Premium Account
          </Button>
          
          <div className="text-center text-sm text-luxury-600">
            Already have an account?{" "}
            <Link href="/signin" className="text-luxury-900 hover:underline font-medium">
              Sign in
            </Link>
          </div>
          
          <div className="text-xs text-luxury-500 text-center">
            By creating an account, you agree to our{" "}
            <a href="#" className="text-luxury-700 hover:underline">Terms of Service</a>{" "}
            and{" "}
            <a href="#" className="text-luxury-700 hover:underline">Privacy Policy</a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
