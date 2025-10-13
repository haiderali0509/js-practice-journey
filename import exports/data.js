// data.js
export const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    category: "Electronics",
    rating: 4.5,
    image: "/images/headphones.jpg",
    inStock: true,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 99.99,
    category: "Wearables",
    rating: 4.2,
    image: "/images/watch.jpg",
    inStock: false,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 45.0,
    category: "Audio",
    rating: 4.8,
    image: "/images/speaker.jpg",
    inStock: true,
  },
];
// data.js
export const users = [
  { id: 1, name: "Ali", email: "ali@example.com", role: "admin" },
  { id: 2, name: "Haider", email: "haider@example.com", role: "user" },
  { id: 3, name: "Ayesha", email: "ayesha@example.com", role: "editor" },
];
// data.js
const tasks = [
  {
    id: 1,
    title: "Fix login bug",
    status: "pending",
    priority: "high",
    dueDate: "2025-10-15",
  },
  {
    id: 2,
    title: "Add dark mode feature",
    status: "in-progress",
    priority: "medium",
    dueDate: "2025-10-20",
  },
  {
    id: 3,
    title: "Update documentation",
    status: "completed",
    priority: "low",
    dueDate: "2025-10-10",
  },
];

export default tasks;
