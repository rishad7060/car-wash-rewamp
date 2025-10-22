export interface Appointment {
  id: string;
  customerId: string;
  workerId?: string;
  serviceType: "basic" | "premium" | "ultimate";
  scheduledDate: string;
  startTime: string;
  endTime: string;
  duration: number;
  price: number;
  status: "scheduled" | "in-progress" | "completed" | "cancelled" | "no-show";
  notes?: string;
  vehicleInfo: {
    make: string;
    model: string;
    year: number;
    color: string;
    licensePlate: string;
  };
  createdAt: string;
  updatedAt: string;
}

export const appointments: Appointment[] = [
  {
    id: "a1",
    customerId: "c1",
    workerId: "w2",
    serviceType: "premium",
    scheduledDate: "2024-10-22T00:00:00Z",
    startTime: "2024-10-22T10:00:00Z",
    endTime: "2024-10-22T10:45:00Z",
    duration: 45,
    price: 25.99,
    status: "completed",
    notes: "Customer prefers minimal conversation, quick service",
    vehicleInfo: {
      make: "Toyota",
      model: "Camry",
      year: 2022,
      color: "Silver",
      licensePlate: "ABC 123",
    },
    createdAt: "2024-10-15T09:00:00Z",
    updatedAt: "2024-10-22T10:45:00Z",
  },
  {
    id: "a2",
    customerId: "c2",
    workerId: "w3",
    serviceType: "ultimate",
    scheduledDate: "2024-10-22T00:00:00Z",
    startTime: "2024-10-22T13:00:00Z",
    endTime: "2024-10-22T14:30:00Z",
    duration: 90,
    price: 45.99,
    status: "in-progress",
    notes: "Full detailing service, customer waiting on-site",
    vehicleInfo: {
      make: "BMW",
      model: "X5",
      year: 2023,
      color: "Black",
      licensePlate: "XYZ 789",
    },
    createdAt: "2024-10-18T14:00:00Z",
    updatedAt: "2024-10-22T13:00:00Z",
  },
  {
    id: "a3",
    customerId: "c4",
    workerId: "w2",
    serviceType: "basic",
    scheduledDate: "2024-10-22T00:00:00Z",
    startTime: "2024-10-22T15:00:00Z",
    endTime: "2024-10-22T15:30:00Z",
    duration: 30,
    price: 15.99,
    status: "scheduled",
    notes: "Mobile service, customer address: 321 Maple Drive",
    vehicleInfo: {
      make: "Honda",
      model: "Civic",
      year: 2021,
      color: "Blue",
      licensePlate: "DEF 456",
    },
    createdAt: "2024-10-20T11:00:00Z",
    updatedAt: "2024-10-20T11:00:00Z",
  },
  {
    id: "a4",
    customerId: "c5",
    workerId: "w4",
    serviceType: "premium",
    scheduledDate: "2024-10-22T00:00:00Z",
    startTime: "2024-10-22T16:00:00Z",
    endTime: "2024-10-22T16:45:00Z",
    duration: 45,
    price: 25.99,
    status: "scheduled",
    notes: "After work appointment, customer prefers quiet service",
    vehicleInfo: {
      make: "Ford",
      model: "F-150",
      year: 2020,
      color: "Red",
      licensePlate: "GHI 789",
    },
    createdAt: "2024-10-19T16:30:00Z",
    updatedAt: "2024-10-19T16:30:00Z",
  },
  {
    id: "a5",
    customerId: "c6",
    workerId: "w4",
    serviceType: "ultimate",
    scheduledDate: "2024-10-22T00:00:00Z",
    startTime: "2024-10-22T17:00:00Z",
    endTime: "2024-10-22T18:30:00Z",
    duration: 90,
    price: 45.99,
    status: "scheduled",
    notes: "High-end luxury vehicle, requires extra care and attention",
    vehicleInfo: {
      make: "Mercedes",
      model: "S-Class",
      year: 2024,
      color: "Pearl White",
      licensePlate: "JKL 012",
    },
    createdAt: "2024-10-17T10:00:00Z",
    updatedAt: "2024-10-17T10:00:00Z",
  },
  {
    id: "a6",
    customerId: "c8",
    workerId: "w4",
    serviceType: "premium",
    scheduledDate: "2024-10-21T00:00:00Z",
    startTime: "2024-10-21T12:00:00Z",
    endTime: "2024-10-21T12:45:00Z",
    duration: 45,
    price: 25.99,
    status: "completed",
    notes: "SUV, needs extra time for thorough cleaning",
    vehicleInfo: {
      make: "Toyota",
      model: "Highlander",
      year: 2022,
      color: "Gray",
      licensePlate: "MNO 345",
    },
    createdAt: "2024-10-19T09:00:00Z",
    updatedAt: "2024-10-21T12:50:00Z",
  },
  {
    id: "a7",
    customerId: "c3",
    serviceType: "basic",
    scheduledDate: "2024-10-20T00:00:00Z",
    startTime: "2024-10-20T11:30:00Z",
    endTime: "2024-10-20T12:00:00Z",
    duration: 30,
    price: 15.99,
    status: "completed",
    notes: "First time customer, applied wax protection",
    vehicleInfo: {
      make: "Chevrolet",
      model: "Malibu",
      year: 2021,
      color: "White",
      licensePlate: "PQR 678",
    },
    createdAt: "2024-10-18T15:00:00Z",
    updatedAt: "2024-10-20T12:15:00Z",
  },
  {
    id: "a8",
    customerId: "c7",
    serviceType: "premium",
    scheduledDate: "2024-10-16T00:00:00Z",
    startTime: "2024-10-16T15:00:00Z",
    endTime: "2024-10-16T15:45:00Z",
    duration: 45,
    price: 25.99,
    status: "cancelled",
    notes: "Customer cancelled due to business trip",
    vehicleInfo: {
      make: "Nissan",
      model: "Altima",
      year: 2020,
      color: "Black",
      licensePlate: "STU 901",
    },
    createdAt: "2024-10-14T10:00:00Z",
    updatedAt: "2024-10-15T14:30:00Z",
  },
];