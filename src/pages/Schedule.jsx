import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const timeSlots = [
  "09:00 ",
  "10:00",
  "11:00",
  "12:00",
  "1:00",
  "2:00",
  "3:00",
  "4:00",
  "5:00",
];

const meetingTypes = [
  { value: "video", label: "Video Call (Zoom/Teams)" },
  { value: "phone", label: "Phone Call" },
  { value: "in-person", label: "In-Person Meeting" },
];

const experienceLevels = [
  { value: "beginner", label: "Beginner (New to investing)" },
  { value: "intermediate", label: "Intermediate (Some experience)" },
  { value: "advanced", label: "Advanced (Experienced investor)" },
];

export default function Schedule() {
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("10:00");

  return (
    <div className="min-h-screen bg-[var(--color-cold-white)]">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <section className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-primary-navy)]">
            Book Your Consultation
          </h1>
          <p className="mt-2 text-base text-[var(--color-charcoal)]">
            Schedule your personalized stock advisory session with our expert
            team.
          </p>
        </section>

        <div className="flex flex-col w-full max-w-4xl mx-auto">
          <section className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-[var(--color-primary-navy)]">
                  Select Date
                </CardTitle>
                <CardDescription className="text-[var(--color-charcoal)]">
                  Choose your preferred date for the consultation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  className="mx-auto"
                  selected={date}
                  mode="single"
                  onSelect={(date) => setDate(date)}
                  disabled={(date) => date < new Date()}
                />
              </CardContent>
            </Card>

            {/* Time Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[var(--color-primary-navy)]">
                  Select Time
                </CardTitle>
                <CardDescription className="text-[var(--color-charcoal)]">
                  Choose your preferred time slot (EST)
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant="outline"
                    onClick={() => setSelectedTime(time)}
                    className={`${
                      selectedTime === time ? "bg-primary-navy text-white" : ""
                    } w-full cursor-pointer hover:bg-primary-navy hover:text-white`}
                  >
                    {time}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Meeting Preferences */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[var(--color-primary-navy)]">
                  Meeting Preferences
                </CardTitle>
                <CardDescription className="text-[var(--color-charcoal)]">
                  How would you like to conduct the consultation?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-[var(--color-charcoal)]">
                    Meeting Type
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select meeting type" />
                    </SelectTrigger>
                    <SelectContent>
                      {meetingTypes.map((t) => (
                        <SelectItem key={t.value} value={t.value}>
                          {t.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-[var(--color-charcoal)]">
                    Investment Experience
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      {experienceLevels.map((lvl) => (
                        <SelectItem key={lvl.value} value={lvl.value}>
                          {lvl.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* User Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary-navy">
                  Your Information
                </CardTitle>
                <CardDescription className="text-charcoal">
                  Please provide your contact details and background
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-charcoal">Full Name</Label>
                    <Input
                      placeholder="Enter your full name"
                      className="w-full border-charcoal"
                    />
                  </div>
                  <div>
                    <Label className="text-charcoal">Email Address</Label>
                    <Input
                      placeholder="Enter your email"
                      className="w-full border-charcoal"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-charcoal">Phone Number</Label>
                    <Input
                      placeholder="Enter your phone number"
                      className="w-full border-charcoal"
                    />
                  </div>
                  <div>
                    <Label className="text-charcoal">
                      Current Portfolio Size
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under $10,000</SelectItem>
                        <SelectItem value="10k-50k">
                          $10,000 - $50,000
                        </SelectItem>
                        <SelectItem value="50k-100k">
                          $50,000 - $100,000
                        </SelectItem>
                        <SelectItem value="100k-500k">
                          $100,000 - $500,000
                        </SelectItem>
                        <SelectItem value="500k-1m">
                          $500,000 - $1,000,000
                        </SelectItem>
                        <SelectItem value="over-1m">Over $1,000,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label className="text-charcoal">Investment Goals</Label>
                  <Textarea
                    placeholder="What are your primary investment objectives?"
                    className="w-full border-charcoal"
                  />
                </div>
                <div>
                  <Label className="text-charcoal">
                    Specific Questions or Topics
                  </Label>
                  <Textarea
                    placeholder="Any specific topics you'd like to discuss?"
                    className="w-full border-charcoal"
                  />
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Dialog>
                <DialogTrigger className="w-full">
                  <Button
                    size="lg"
                    className="bg-primary-red w-full text-white hover:bg-primary-navy cursor-pointer"
                  >
                    Confirm Booking
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Booking Confirmed!</DialogTitle>
                    <DialogDescription>
                      Your consultation has been successfully booked. We look
                      forward to speaking with you on{" "}
                      {date.toLocaleDateString()} at {selectedTime}.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
