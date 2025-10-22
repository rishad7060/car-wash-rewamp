import { customers } from "@/data/customers";
import { appointments } from "@/data/appointments";
import { subscriptionPlans, serviceTypes } from "@/data/settings";

export interface Invoice {
  id: string;
  appointmentId: string;
  customerName: string;
  plan: string;
  baseAmount: number;
  adjustments: Array<{
    type: "discount" | "surcharge";
    description: string;
    amount: number;
  }>;
  totalAmount: number;
  paymentStatus: "Pending" | "Paid" | "Overdue" | "Cancelled";
  createdAt: string;
}

export const invoices: Invoice[] = [];

export async function createInvoice(appointment: typeof appointments[0]) {
  // Find customer details
  const customer = customers.find(c => c.id === appointment.customerId);

  // Find plan details
  const plan = subscriptionPlans.find(p => p.name === appointment.plan);

  const invoice: Invoice = {
    id: `inv-${appointment.id}`,
    appointmentId: appointment.id,
    customerName: customer?.name || "Unknown",
    plan: appointment.plan,
    baseAmount: appointment.amount,
    adjustments: [],
    totalAmount: appointment.amount,
    paymentStatus: "Pending",
    createdAt: new Date().toISOString(),
  };

  invoices.push(invoice);
  return invoice;
}

// Mock API functions to simulate backend calls
export async function getInvoices() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return invoices;
}

export async function getCustomers() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return customers;
}

export async function getAppointments() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return appointments;
}

export async function getServiceTypes() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return serviceTypes;
}

export async function getSubscriptionPlans() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return subscriptionPlans;
}