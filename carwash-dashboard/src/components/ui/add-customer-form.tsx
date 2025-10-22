"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { subscriptionPlans } from "@/data/settings";

interface CustomerData {
  name: string;
  mobile: string;
  address: string;
  serviceType: string;
  subscriptionPlan: string;
  frequency: string;
  preferredDays: string[];
  preferredTime: string;
  status: string;
}

interface AddCustomerFormProps {
  onSubmit: (customer: CustomerData) => void;
}

export function AddCustomerForm({ onSubmit }: AddCustomerFormProps) {
  const [formData, setFormData] = useState<CustomerData>({
    name: "",
    mobile: "",
    address: "",
    serviceType: "Subscription",
    subscriptionPlan: "Silver Plan",
    frequency: "Weekly",
    preferredDays: [],
    preferredTime: "09:00 AM",
    status: "Active",
  });

  const handleInputChange = (field: keyof CustomerData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting customer data:", formData);
    onSubmit(formData);
  };

  const handleDayToggle = (day: string) => {
    setFormData(prev => ({
      ...prev,
      preferredDays: prev.preferredDays.includes(day)
        ? prev.preferredDays.filter(d => d !== day)
        : [...prev.preferredDays, day]
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Customer</CardTitle>
        <CardDescription>
          Register a new customer with their subscription plan
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Customer Name
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter customer name"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="mobile" className="text-sm font-medium">
                Mobile Number
              </label>
              <Input
                id="mobile"
                value={formData.mobile}
                onChange={(e) => handleInputChange("mobile", e.target.value)}
                placeholder="Enter mobile number"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="address" className="text-sm font-medium">
              Address
            </label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              placeholder="Enter customer address"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="subscriptionPlan" className="text-sm font-medium">
                Subscription Plan
              </label>
              <select
                id="subscriptionPlan"
                value={formData.subscriptionPlan}
                onChange={(e) => handleInputChange("subscriptionPlan", e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:border-ring-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {subscriptionPlans.map((plan) => (
                  <option key={plan.id} value={plan.name}>
                    {plan.name} - SAR {plan.price}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="frequency" className="text-sm font-medium">
                Frequency
              </label>
              <select
                id="frequency"
                value={formData.frequency}
                onChange={(e) => handleInputChange("frequency", e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:border-ring-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="Weekly">Weekly</option>
                <option value="Bi-weekly">Bi-weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="One-time">One-time</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="preferredTime" className="text-sm font-medium">
              Preferred Time
            </label>
            <select
              id="preferredTime"
              value={formData.preferredTime}
              onChange={(e) => handleInputChange("preferredTime", e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:border-ring-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">
              Preferred Days
            </label>
            <div className="flex flex-wrap gap-2">
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                <div key={day} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={day}
                    checked={formData.preferredDays.includes(day)}
                    onChange={() => handleDayToggle(day)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor={day} className="text-sm">
                    {day}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">
              Add Customer
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}