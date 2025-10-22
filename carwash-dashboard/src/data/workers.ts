export interface Worker {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "manager" | "supervisor" | "technician" | "trainee";
  hourlyRate: number;
  hireDate: string;
  certifications: string[];
  status: "active" | "on-break" | "off-duty" | "on-vacation";
  currentShift?: {
    id: string;
    startTime: string;
    endTime?: string;
    breakStart?: string;
    breakEnd?: string;
    appointmentIds: string[];
  };
  totalHoursWorked: number;
  skills: string[];
  avatar?: string;
}

export const workers: Worker[] = [
  {
    id: "w1",
    name: "Alex Rodriguez",
    email: "alex.r@carwashpro.com",
    phone: "+1 (555) 111-2222",
    role: "manager",
    hourlyRate: 25.00,
    hireDate: "2023-01-15T09:00:00Z",
    certifications: ["Management", "Advanced Detailing", "Customer Service"],
    status: "active",
    totalHoursWorked: 1840,
    skills: ["Leadership", "Quality Control", "Customer Relations", "Training"],
    avatar: "AR",
  },
  {
    id: "w2",
    name: "Maria Garcia",
    email: "maria.g@carwashpro.com",
    phone: "+1 (555) 333-4444",
    role: "supervisor",
    hourlyRate: 22.00,
    hireDate: "2023-03-20T08:00:00Z",
    certifications: ["Supervisory", "Safety Management", "Equipment Maintenance"],
    status: "active",
    currentShift: {
      id: "s_w2_20241022",
      startTime: "2024-10-22T08:00:00Z",
      endTime: "2024-10-22T17:00:00Z",
      appointmentIds: ["a1", "a3"],
    },
    totalHoursWorked: 1520,
    skills: ["Team Management", "Scheduling", "Quality Assurance", "Problem Solving"],
    avatar: "MG",
  },
  {
    id: "w3",
    name: "James Chen",
    email: "james.c@carwashpro.com",
    phone: "+1 (555) 555-6666",
    role: "technician",
    hourlyRate: 18.00,
    hireDate: "2023-06-10T09:00:00Z",
    certifications: ["Basic Wash", "Wax Application", "Interior Cleaning"],
    status: "on-break",
    currentShift: {
      id: "s_w3_20241022",
      startTime: "2024-10-22T08:30:00Z",
      endTime: "2024-10-22T17:30:00Z",
      breakStart: "2024-10-22T12:30:00Z",
      appointmentIds: ["a2"],
    },
    totalHoursWorked: 980,
    skills: ["Exterior Wash", "Tire Care", "Window Cleaning", "Vacuuming"],
    avatar: "JC",
  },
  {
    id: "w4",
    name: "Sarah Thompson",
    email: "sarah.t@carwashpro.com",
    phone: "+1 (555) 777-8888",
    role: "technician",
    hourlyRate: 18.00,
    hireDate: "2023-08-15T08:00:00Z",
    certifications: ["Premium Wash", "Engine Detailing", "Ceramic Coating"],
    status: "active",
    currentShift: {
      id: "s_w4_20241022",
      startTime: "2024-10-22T09:00:00Z",
      endTime: "2024-10-22T18:00:00Z",
      appointmentIds: ["a4", "a5"],
    },
    totalHoursWorked: 720,
    skills: ["Premium Services", "Engine Cleaning", "Paint Protection", "Attention to Detail"],
    avatar: "ST",
  },
  {
    id: "w5",
    name: "Marcus Johnson",
    email: "marcus.j@carwashpro.com",
    phone: "+1 (555) 999-0000",
    role: "technician",
    hourlyRate: 16.00,
    hireDate: "2024-02-01T08:00:00Z",
    certifications: ["Basic Wash", "Customer Service"],
    status: "off-duty",
    totalHoursWorked: 450,
    skills: ["Basic Services", "Customer Interaction", "Speed", "Efficiency"],
    avatar: "MJ",
  },
  {
    id: "w6",
    name: "Emma Wilson",
    email: "emma.w@carwashpro.com",
    phone: "+1 (555) 222-3333",
    role: "trainee",
    hourlyRate: 14.00,
    hireDate: "2024-09-15T09:00:00Z",
    certifications: ["Training"],
    status: "active",
    currentShift: {
      id: "s_w6_20241022",
      startTime: "2024-10-22T10:00:00Z",
      endTime: "2024-10-22T19:00:00Z",
      appointmentIds: [],
    },
    totalHoursWorked: 120,
    skills: ["Learning", "Customer Service", "Following Instructions", "Eager to Learn"],
    avatar: "EW",
  },
  {
    id: "w7",
    name: "David Kim",
    email: "david.k@carwashpro.com",
    phone: "+1 (555) 444-5555",
    role: "technician",
    hourlyRate: 19.00,
    hireDate: "2023-11-20T08:00:00Z",
    certifications: ["Advanced Detailing", "Paint Protection", "Odor Removal"],
    status: "on-vacation",
    totalHoursWorked: 560,
    skills: ["Specialized Services", "Paint Care", "Detailing", "Odor Treatment"],
    avatar: "DK",
  },
];