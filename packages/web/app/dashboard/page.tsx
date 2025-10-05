import { Button } from "@ranza/shared/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@ranza/shared/components/ui/card";
import { Input } from "@ranza/shared/components/ui/input";
import { Label } from "@ranza/shared/components/ui/label";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <h1 className="text-2xl font-bold text-primary">Ranza</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Welcome, John Doe</span>
            <Button variant="outline">Profile</Button>
            <Button variant="outline">Sign Out</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>What would you like to do today?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button className="h-20 text-left justify-start" variant="outline">
                    <div className="text-left">
                      <div className="font-semibold">Find a Ride</div>
                      <div className="text-sm text-gray-600">Search for available rides</div>
                    </div>
                  </Button>
                  <Button className="h-20 text-left justify-start" variant="outline">
                    <div className="text-left">
                      <div className="font-semibold">Offer a Ride</div>
                      <div className="text-sm text-gray-600">Share your ride with others</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Search for Rides */}
            <Card>
              <CardHeader>
                <CardTitle>Search for Rides</CardTitle>
                <CardDescription>Find rides going your way</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="from">From</Label>
                    <Input id="from" placeholder="Pickup location" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="to">To</Label>
                    <Input id="to" placeholder="Destination" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <Input id="time" type="time" />
                  </div>
                </div>
                <Button className="w-full">Search Rides</Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-semibold">Accra → Kumasi</div>
                      <div className="text-sm text-gray-600">Yesterday, 2:30 PM</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">GH₵ 45</div>
                      <div className="text-sm text-green-600">Completed</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-semibold">Tema → Accra</div>
                      <div className="text-sm text-gray-600">Monday, 8:15 AM</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">GH₵ 25</div>
                      <div className="text-sm text-green-600">Completed</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Wallet */}
            <Card>
              <CardHeader>
                <CardTitle>Wallet</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">GH₵ 125.50</div>
                  <div className="text-sm text-gray-600 mb-4">Available balance</div>
                  <Button className="w-full">Add Money</Button>
                </div>
              </CardContent>
            </Card>

            {/* Driver Status */}
            <Card>
              <CardHeader>
                <CardTitle>Driver Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Status</span>
                    <span className="text-sm font-semibold text-green-600">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Rating</span>
                    <span className="text-sm font-semibold">4.8 ⭐</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Trips</span>
                    <span className="text-sm font-semibold">127</span>
                  </div>
                  <Button variant="outline" className="w-full">Go Offline</Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>This Month</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Trips Taken</span>
                    <span className="text-sm font-semibold">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Money Saved</span>
                    <span className="text-sm font-semibold text-green-600">GH₵ 340</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">CO₂ Saved</span>
                    <span className="text-sm font-semibold text-green-600">24 kg</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
