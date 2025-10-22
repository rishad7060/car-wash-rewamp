export interface InvoiceChangeLog {
  id: string;
  timestamp: string;
  changedBy: string;
  changeType: "created" | "amount_modified" | "discount_added" | "status_updated";
  oldValue?: number | string;
  newValue: number | string;
  reason: string;
}

export interface Invoice {
  id: string;
  appointmentId: string;
  customerId: string;
  invoiceNumber: string;
  amount: number;
  discountAmount?: number;
  finalAmount: number;
  paymentStatus: "pending" | "paid" | "overdue" | "cancelled";
  paymentMethod?: string;
  paymentDate?: string;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
  changeLog: InvoiceChangeLog[];
  notes?: string;
}

export const invoices: Invoice[] = [
  {
    id: "i1",
    appointmentId: "a1",
    customerId: "c1",
    invoiceNumber: "INV-2024-1001",
    amount: 25.99,
    finalAmount: 25.99,
    paymentStatus: "paid",
    paymentMethod: "Credit Card",
    paymentDate: "2024-10-22T11:00:00Z",
    dueDate: "2024-10-22T23:59:59Z",
    createdAt: "2024-10-22T10:45:00Z",
    updatedAt: "2024-10-22T11:00:00Z",
    changeLog: [
      {
        id: "cl1",
        timestamp: "2024-10-22T10:45:00Z",
        changedBy: "system",
        changeType: "created",
        newValue: 25.99,
        reason: "Invoice generated for premium wash service",
      },
      {
        id: "cl2",
        timestamp: "2024-10-22T11:00:00Z",
        changedBy: "w2",
        changeType: "status_updated",
        oldValue: "pending",
        newValue: "paid",
        reason: "Payment received via credit card terminal",
      },
    ],
    notes: "Premium wash service completed on time",
  },
  {
    id: "i2",
    appointmentId: "a6",
    customerId: "c8",
    invoiceNumber: "INV-2024-1002",
    amount: 25.99,
    discountAmount: 5.00,
    finalAmount: 20.99,
    paymentStatus: "pending",
    dueDate: "2024-10-28T23:59:59Z",
    createdAt: "2024-10-21T12:45:00Z",
    updatedAt: "2024-10-21T13:00:00Z",
    changeLog: [
      {
        id: "cl3",
        timestamp: "2024-10-21T12:45:00Z",
        changedBy: "system",
        changeType: "created",
        newValue: 25.99,
        reason: "Invoice generated for premium wash service",
      },
      {
        id: "cl4",
        timestamp: "2024-10-21T13:00:00Z",
        changedBy: "w4",
        changeType: "discount_added",
        oldValue: 25.99,
        newValue: 20.99,
        reason: "Loyalty discount applied for regular customer",
      },
    ],
    notes: "SUV premium wash with loyalty discount",
  },
  {
    id: "i3",
    appointmentId: "a7",
    customerId: "c3",
    invoiceNumber: "INV-2024-1003",
    amount: 15.99,
    finalAmount: 15.99,
    paymentStatus: "paid",
    paymentMethod: "Cash",
    paymentDate: "2024-10-20T12:00:00Z",
    dueDate: "2024-10-20T23:59:59Z",
    createdAt: "2024-10-20T12:00:00Z",
    updatedAt: "2024-10-20T12:15:00Z",
    changeLog: [
      {
        id: "cl5",
        timestamp: "2024-10-20T12:00:00Z",
        changedBy: "system",
        changeType: "created",
        newValue: 15.99,
        reason: "Invoice generated for basic wash service",
      },
      {
        id: "cl6",
        timestamp: "2024-10-20T12:15:00Z",
        changedBy: "w4",
        changeType: "status_updated",
        oldValue: "pending",
        newValue: "paid",
        reason: "Cash payment received",
      },
    ],
    notes: "First-time customer basic wash",
  },
  {
    id: "i4",
    appointmentId: "a3",
    customerId: "c4",
    invoiceNumber: "INV-2024-1004",
    amount: 15.99,
    finalAmount: 15.99,
    paymentStatus: "pending",
    dueDate: "2024-10-29T23:59:59Z",
    createdAt: "2024-10-20T11:30:00Z",
    updatedAt: "2024-10-20T11:30:00Z",
    changeLog: [
      {
        id: "cl7",
        timestamp: "2024-10-20T11:30:00Z",
        changedBy: "system",
        changeType: "created",
        newValue: 15.99,
        reason: "Invoice generated for basic wash service (mobile)",
      },
    ],
    notes: "Mobile basic wash service at customer location",
  },
  {
    id: "i5",
    appointmentId: "a5",
    customerId: "c5",
    invoiceNumber: "INV-2024-1005",
    amount: 25.99,
    finalAmount: 25.99,
    paymentStatus: "overdue",
    dueDate: "2024-10-22T23:59:59Z",
    createdAt: "2024-10-22T16:45:00Z",
    updatedAt: "2024-10-23T09:00:00Z",
    changeLog: [
      {
        id: "cl8",
        timestamp: "2024-10-22T16:45:00Z",
        changedBy: "system",
        changeType: "created",
        newValue: 25.99,
        reason: "Invoice generated for premium wash service",
      },
      {
        id: "cl9",
        timestamp: "2024-10-23T09:00:00Z",
        changedBy: "system",
        changeType: "status_updated",
        oldValue: "pending",
        newValue: "overdue",
        reason: "Invoice due date passed without payment",
      },
    ],
    notes: "Premium wash service - payment reminder sent",
  },
  {
    id: "i6",
    appointmentId: "a8",
    customerId: "c7",
    invoiceNumber: "INV-2024-1006",
    amount: 25.99,
    finalAmount: 0.00,
    paymentStatus: "cancelled",
    dueDate: "2024-10-23T23:59:59Z",
    createdAt: "2024-10-16T15:45:00Z",
    updatedAt: "2024-10-15T14:30:00Z",
    changeLog: [
      {
        id: "cl10",
        timestamp: "2024-10-16T15:45:00Z",
        changedBy: "system",
        changeType: "created",
        newValue: 25.99,
        reason: "Invoice generated for premium wash service",
      },
      {
        id: "cl11",
        timestamp: "2024-10-15T14:30:00Z",
        changedBy: "w2",
        changeType: "amount_modified",
        oldValue: 25.99,
        newValue: 0.00,
        reason: "Customer cancelled due to business trip - no charges applied",
      },
      {
        id: "cl12",
        timestamp: "2024-10-15T14:35:00Z",
        changedBy: "w2",
        changeType: "status_updated",
        oldValue: "pending",
        newValue: "cancelled",
        reason: "Appointment cancelled by customer",
      },
    ],
    notes: "Cancelled due to customer business trip - no charges",
  },
  {
    id: "i7",
    appointmentId: "a2",
    customerId: "c2",
    invoiceNumber: "INV-2024-1007",
    amount: 45.99,
    finalAmount: 40.99,
    paymentStatus: "pending",
    dueDate: "2024-10-29T23:59:59Z",
    createdAt: "2024-10-22T13:00:00Z",
    updatedAt: "2024-10-22T13:30:00Z",
    changeLog: [
      {
        id: "cl13",
        timestamp: "2024-10-22T13:00:00Z",
        changedBy: "system",
        changeType: "created",
        newValue: 45.99,
        reason: "Invoice generated for ultimate detailing service",
      },
      {
        id: "cl14",
        timestamp: "2024-10-22T13:30:00Z",
        changedBy: "w3",
        changeType: "discount_added",
        oldValue: 45.99,
        newValue: 40.99,
        reason: "New customer discount applied",
      },
    ],
    notes: "Ultimate detailing service with new customer discount",
  },
];