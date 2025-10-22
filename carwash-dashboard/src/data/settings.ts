export interface BusinessSettings {
  id: string;
  businessName: string;
  address: string;
  phone: string;
  email: string;
  currency: string;
  timezone: string;
  operatingHours: {
    monday: { open: string; close: string; closed: boolean };
    tuesday: { open: string; close: string; closed: boolean };
    wednesday: { open: string; close: string; closed: boolean };
    thursday: { open: string; close: string; closed: boolean };
    friday: { open: string; close: string; closed: boolean };
    saturday: { open: string; close: string; closed: boolean };
    sunday: { open: string; close: string; closed: boolean };
  };
  services: {
    basic: { name: string; price: number; duration: number };
    premium: { name: string; price: number; duration: number };
    ultimate: { name: string; price: number; duration: number };
  };
  paymentMethods: string[];
}

export const businessSettings: BusinessSettings = {
  id: "s1",
  businessName: "CarWash Pro",
  address: "123 Main Street, City, State 12345",
  phone: "+1 (555) 123-4567",
  email: "info@carwashpro.com",
  currency: "USD",
  timezone: "America/New_York",
  operatingHours: {
    monday: { open: "08:00", close: "18:00", closed: false },
    tuesday: { open: "08:00", close: "18:00", closed: false },
    wednesday: { open: "08:00", close: "18:00", closed: false },
    thursday: { open: "08:00", close: "18:00", closed: false },
    friday: { open: "08:00", close: "18:00", closed: false },
    saturday: { open: "09:00", close: "16:00", closed: false },
    sunday: { open: "10:00", close: "15:00", closed: true },
  },
  services: {
    basic: {
      name: "Basic Wash",
      price: 15.99,
      duration: 30,
    },
    premium: {
      name: "Premium Wash",
      price: 25.99,
      duration: 45,
    },
    ultimate: {
      name: "Ultimate Detail",
      price: 45.99,
      duration: 90,
    },
  },
  paymentMethods: ["Cash", "Credit Card", "Debit Card", "Mobile Payment"],
};