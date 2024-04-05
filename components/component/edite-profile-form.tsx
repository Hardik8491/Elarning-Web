import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardDescription,CardContent, CardHeader, CardTitle } from "../ui/card";

export function EditeProfileForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Profile</CardTitle>
        <CardDescription>
          Enter your information to update your profile
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" required />
        </div>
      </CardContent>
    </Card>
  );
}
