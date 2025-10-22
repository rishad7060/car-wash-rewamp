export const serviceTypes = [
  {
    id: "must",
    name: "Must Wash",
    price: 40,
    features: ["Pre pressure wash", "Spot free rinse", "Inside & boot vacuuming", "Door shuts cleaning"]
  },
  {
    id: "more",
    name: "More Wash",
    price: 60,
    features: ["Includes all Must Wash", "Mirror cleaning", "Wheel & tire shine", "Door panel cleaning", "Dashboard & gear polish", "Fragrance"]
  },
  {
    id: "platinum",
    name: "Platinum Wash",
    price: 350,
    features: ["Includes More Wash", "Full interior shampoo", "Pet hair removal", "Wax & dressing", "Natural oil treatment", "Fragrance on selection"]
  }
];

export const subscriptionPlans = [
  { id: "silver", name: "Silver Plan", price: 90, details: "4 exterior + 1 interior wash / month" },
  { id: "gold", name: "Gold Plan", price: 150, details: "8 exterior + 2 interior + dash polish / month" },
  { id: "platinum", name: "Platinum Plan", price: 250, details: "8 exterior + 8 interior + full extras / month" }
];

export const paymentModes = ["Cash","Bank Transfer","POS","Apple Pay","GPay","Wallet"];
export const bookingStatuses = ["Pending","On the Way","In Progress","Completed","Cancelled"];
export const customerCategories = ["Occasional","Regular","Loyal"];
export const customerTypes = ["Subscription","Online","Offline"];