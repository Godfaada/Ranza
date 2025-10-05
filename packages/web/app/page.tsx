import { Button } from "@ranza/shared/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@ranza/shared/components/ui/card";
import { Input } from "@ranza/shared/components/ui/input";
import { Label } from "@ranza/shared/components/ui/label";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-50 to-luxury-100">
      {/* Header */}
      <header className="border-b border-luxury-200 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-luxury-800 to-luxury-900 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-gold-300 font-bold text-sm">R</span>
            </div>
            <h1 className="text-2xl font-bold text-luxury-900">Ranza</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#how-it-works" className="text-luxury-600 hover:text-luxury-900 transition-colors font-medium">
              How it works
            </a>
            <a href="#pricing" className="text-luxury-600 hover:text-luxury-900 transition-colors font-medium">
              Pricing
            </a>
            <Button variant="outline" className="border-luxury-300 text-luxury-700 hover:bg-luxury-50">Sign In</Button>
            <Button className="bg-gradient-to-r from-luxury-800 to-luxury-900 hover:from-luxury-900 hover:to-luxury-950 shadow-lg">Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-luxury-900 mb-6 leading-tight">
            Premium Carpooling for{" "}
            <span className="bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">Ghana</span>
          </h2>
          <p className="text-xl text-luxury-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience luxury travel at an affordable price. Connect with verified drivers and passengers for a sophisticated, comfortable journey.
          </p>
          
          {/* Quick Search */}
          <Card className="max-w-2xl mx-auto mb-16 shadow-xl border-luxury-200">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-luxury-900">Find Your Premium Ride</CardTitle>
              <CardDescription className="text-luxury-600">
                Enter your destination to discover luxury carpooling options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="from" className="text-luxury-700 font-medium">From</Label>
                  <Input id="from" placeholder="Pickup location" className="border-luxury-300 focus:border-luxury-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="to" className="text-luxury-700 font-medium">To</Label>
                  <Input id="to" placeholder="Destination" className="border-luxury-300 focus:border-luxury-500" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date" className="text-luxury-700 font-medium">Date & Time</Label>
                <Input id="date" type="datetime-local" className="border-luxury-300 focus:border-luxury-500" />
              </div>
              <Button className="w-full bg-gradient-to-r from-luxury-800 to-luxury-900 hover:from-luxury-900 hover:to-luxury-950 shadow-lg" size="lg">
                Search Premium Rides
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-luxury-900 mb-6">
            Why Choose Ranza?
          </h3>
          <p className="text-xl text-luxury-600 max-w-2xl mx-auto">
            We elevate carpooling to a premium experience with luxury, safety, and sophistication.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-lg border-luxury-200 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gold-100 to-gold-200 rounded-xl flex items-center justify-center">
                  <span className="text-gold-700 text-xl">💎</span>
                </div>
                <span className="text-luxury-900">Premium Experience</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-luxury-600 leading-relaxed">
                Enjoy luxury travel at an affordable price. Premium vehicles and verified drivers for a sophisticated journey.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg border-luxury-200 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-luxury-100 to-luxury-200 rounded-xl flex items-center justify-center">
                  <span className="text-luxury-700 text-xl">🛡️</span>
                </div>
                <span className="text-luxury-900">Elite Security</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-luxury-600 leading-relaxed">
                Comprehensive verification process with KYC documents, real-time tracking, and premium safety standards.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg border-luxury-200 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gold-100 to-gold-200 rounded-xl flex items-center justify-center">
                  <span className="text-gold-700 text-xl">✨</span>
                </div>
                <span className="text-luxury-900">Exclusive Network</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-luxury-600 leading-relaxed">
                Join an exclusive community of premium drivers and passengers. Quality connections for discerning travelers.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="max-w-4xl mx-auto text-center shadow-2xl border-luxury-200 bg-gradient-to-br from-luxury-50 to-white">
          <CardHeader className="pb-8">
            <CardTitle className="text-4xl text-luxury-900 mb-4">Ready to Experience Premium Travel?</CardTitle>
            <CardDescription className="text-xl text-luxury-600">
              Join our exclusive community of discerning travelers who demand luxury and sophistication.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="sm:w-auto bg-gradient-to-r from-luxury-800 to-luxury-900 hover:from-luxury-900 hover:to-luxury-950 shadow-lg">
                Become a Premium Driver
              </Button>
              <Button variant="outline" size="lg" className="sm:w-auto border-luxury-300 text-luxury-700 hover:bg-luxury-50">
                Find Premium Rides
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-luxury-200 bg-luxury-50">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-luxury-800 to-luxury-900 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-gold-300 font-bold text-sm">R</span>
              </div>
              <span className="font-bold text-luxury-900 text-xl">Ranza</span>
            </div>
            <div className="text-sm text-luxury-600">
              © 2024 Ranza. Premium carpooling experience. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}