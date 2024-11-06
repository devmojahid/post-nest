import React, { useState, useEffect, useCallback } from "react";
import {
  Menu,
  X,
  Bell,
  Search,
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  ShoppingBag,
  DollarSign,
  ShoppingCart,
  Package,
  RefreshCcw,
  Wallet,
  Users,
  UserCog,
  BarChart2,
  Calendar,
  Settings,
  Sun,
  Moon,
  Globe,
  TrendingUp,
  TrendingDown,
  Zap,
  Award,
  PlusCircle,
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Download,
  Upload,
  HelpCircle,
  MessageSquare,
  LogOut,
  User,
  Book,
  Briefcase,
  FileText,
  Layers,
  Cpu,
  ArrowUpRight,
  ChevronLeft,
  ChevronUp,
  Activity,
  Inbox,
  CreditCard,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  Legend,
} from "recharts";

const lineChartData = [
  { name: "Jan", revenue: 4000, orders: 2400, expenses: 3200 },
  { name: "Feb", revenue: 3000, orders: 1398, expenses: 2800 },
  { name: "Mar", revenue: 5000, orders: 3800, expenses: 3600 },
  { name: "Apr", revenue: 2780, orders: 3908, expenses: 2980 },
  { name: "May", revenue: 5890, orders: 4800, expenses: 4200 },
  { name: "Jun", revenue: 3390, orders: 3800, expenses: 3100 },
  { name: "Jul", revenue: 4490, orders: 4300, expenses: 3800 },
];

const pieChartData = [
  { name: "Electronics", value: 400, color: "#0088FE" },
  { name: "Clothing", value: 300, color: "#00C49F" },
  { name: "Food", value: 300, color: "#FFBB28" },
  { name: "Books", value: 200, color: "#FF8042" },
];

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  {
    name: "E-commerce",
    icon: ShoppingBag,
    submenu: [
      { name: "Products", icon: Package },
      { name: "Orders", icon: ShoppingCart },
      { name: "Customers", icon: Users },
    ],
  },
  {
    name: "LMS",
    icon: Book,
    submenu: [
      { name: "Courses", icon: FileText },
      { name: "Students", icon: Users },
      { name: "Instructors", icon: UserCog },
    ],
  },
  {
    name: "ERP",
    icon: Briefcase,
    submenu: [
      { name: "Inventory", icon: Package },
      { name: "HR", icon: Users },
      { name: "Finance", icon: DollarSign },
    ],
  },
  {
    name: "SaaS",
    icon: Layers,
    submenu: [
      { name: "Subscriptions", icon: RefreshCcw },
      { name: "Usage", icon: Cpu },
      { name: "Billing", icon: Wallet },
    ],
  },
  { name: "Analytics", icon: BarChart2 },
  { name: "Calendar", icon: Calendar },
];

const modules = [
  { name: "E-commerce", icon: ShoppingCart },
  { name: "LMS", icon: Book },
  { name: "ERP", icon: Briefcase },
  { name: "SaaS", icon: Layers },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");
  const [activeModule, setActiveModule] = useState("E-commerce");
  const [loading, setLoading] = useState(true);
  const [chartView, setChartView] = useState("revenue");
  const [dateRange, setDateRange] = useState("This Week");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  }, [theme]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [theme]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="w-16 h-16 relative">
          <div className="w-16 h-16 border-4 border-white border-solid rounded-full animate-spin border-t-transparent"></div>
          <div className="w-16 h-16 border-4 border-white border-dotted rounded-full animate-spin absolute top-0 left-0"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex h-screen overflow-hidden bg-gradient-to-br ${
        theme === "light"
          ? "from-blue-50 to-purple-50"
          : "from-gray-900 to-blue-900"
      } transition-colors duration-500`}
    >
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-sm transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <SidebarContent
          sidebarOpen={sidebarOpen}
          closeSidebar={() => setSidebarOpen(false)}
        />
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white dark:bg-gray-800 shadow-sm transition-colors duration-500">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center space-x-3">
              <button
                onClick={toggleSidebar}
                className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <Menu className="h-6 w-6" />
              </button>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent truncate">
                NextGen Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-300"
                />
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              </div>
              <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-300">
                <HelpCircle className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-300">
                <Globe className="h-5 w-5" />
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-300"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </button>
              <div className="relative">
                <button
                  onClick={() => setNotificationOpen(!notificationOpen)}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-300 relative"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </button>
                {notificationOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                    {/* Notification items would go here */}
                    <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">
                      No new notifications
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <img
                    src="/placeholder.svg?height=32&width=32"
                    alt="User avatar"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="hidden md:inline-block font-medium text-gray-700 dark:text-gray-300">
                    John Doe
                  </span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Sign out
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-900 p-6 transition-colors duration-500">
          <div className="mb-6 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              {activeModule} Dashboard
            </h2>
            <div className="flex flex-wrap gap-2">
              {modules.map((module) => (
                <button
                  key={module.name}
                  onClick={() => setActiveModule(module.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeModule === module.name
                      ? "bg-blue-500 text-white"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  <module.icon className="h-4 w-4 mr-2 inline-block" />
                  {module.name}
                </button>
              ))}
            </div>
          </div>

          {/* Date Range Selector */}
          <div className="mb-6 flex justify-end">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            >
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Total Revenue"
              value="$166,959.00"
              change="+20.1%"
              icon={DollarSign}
              trend="up"
            />
            <StatCard
              title="Total Orders"
              value="38"
              change="+180.1%"
              icon={ShoppingCart}
              trend="up"
            />
            <StatCard
              title="Total Products"
              value="57"
              change="+19%"
              icon={Package}
              trend="up"
            />
            <StatCard
              title="Active Customers"
              value="10"
              change="+201"
              icon={Users}
              trend="up"
            />
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <div className="col-span-4 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                Sales Overview
              </h3>
              <div className="flex space-x-4 mb-4">
                <button
                  onClick={() => setChartView("revenue")}
                  className={`px-4 py-2 rounded-md ${
                    chartView === "revenue"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  } hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300`}
                >
                  Revenue
                </button>
                <button
                  onClick={() => setChartView("orders")}
                  className={`px-4 py-2 rounded-md ${
                    chartView === "orders"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  } hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300`}
                >
                  Orders
                </button>
                <button
                  onClick={() => setChartView("expenses")}
                  className={`px-4 py-2 rounded-md ${
                    chartView === "expenses"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  } hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300`}
                >
                  Expenses
                </button>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={lineChartData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke={theme === "dark" ? "#374151" : "#E5E7EB"}
                  />
                  <XAxis
                    dataKey="name"
                    stroke={theme === "dark" ? "#9CA3AF" : "#6B7280"}
                  />
                  <YAxis stroke={theme === "dark" ? "#9CA3AF" : "#6B7280"} />
                  <Tooltip />
                  <Legend />
                  {chartView === "revenue" && (
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#3B82F6"
                      fill="#3B82F6"
                      fillOpacity={0.3}
                    />
                  )}
                  {chartView === "orders" && (
                    <Area
                      type="monotone"
                      dataKey="orders"
                      stroke="#10B981"
                      fill="#10B981"
                      fillOpacity={0.3}
                    />
                  )}
                  {chartView === "expenses" && (
                    <Area
                      type="monotone"
                      dataKey="expenses"
                      stroke="#EF4444"
                      fill="#EF4444"
                      fillOpacity={0.3}
                    />
                  )}
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="col-span-3 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                Product Categories
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
            <div className="p-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                Recent Orders
              </h3>
              <div className="flex space-x-2">
                <button className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-300">
                  <Download className="h-5 w-5" />
                </button>
                <button className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-300">
                  <Filter className="h-5 w-5" />
                </button>
                <button className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-300">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {[
                    {
                      id: "1234",
                      customer: "John Doe",
                      product: "Premium Headphones",
                      amount: "$299.99",
                      status: "Completed",
                    },
                    {
                      id: "1235",
                      customer: "Jane Smith",
                      product: "Wireless Mouse",
                      amount: "$49.99",
                      status: "Processing",
                    },
                    {
                      id: "1236",
                      customer: "Bob Johnson",
                      product: "Gaming Keyboard",
                      amount: "$129.99",
                      status: "Shipped",
                    },
                    {
                      id: "1237",
                      customer: "Alice Brown",
                      product: "USB-C Cable",
                      amount: "$19.99",
                      status: "Completed",
                    },
                    {
                      id: "1238",
                      customer: "Charlie Wilson",
                      product: "Smart Watch",
                      amount: "$199.99",
                      status: "Processing",
                    },
                  ].map((order) => (
                    <tr
                      key={order.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                        {order.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {order.customer}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {order.product}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {order.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            order.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : order.status === "Processing"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-2">
                          View
                        </button>
                        <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                Top Selling Products
              </h3>
              <div className="space-y-4">
                {[
                  {
                    name: "Premium Headphones",
                    sales: 1234,
                    revenue: "$61,700",
                  },
                  { name: "Wireless Mouse", sales: 987, revenue: "$49,350" },
                  { name: "Gaming Keyboard", sales: 865, revenue: "$112,450" },
                  { name: "Smart Watch", sales: 754, revenue: "$150,800" },
                  { name: "USB-C Cable", sales: 652, revenue: "$13,040" },
                ].map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">
                        <Package className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">
                          {product.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {product.sales} sales
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        {product.revenue}
                      </p>
                      <p className="text-sm text-green-500">
                        +{Math.floor(Math.random() * 10) + 1}%
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                Customer Satisfaction
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Very Satisfied", percentage: 68 },
                  { name: "Satisfied", percentage: 25 },
                  { name: "Neutral", percentage: 5 },
                  { name: "Unsatisfied", percentage: 2 },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {item.name}
                      </span>
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                Recent Activities
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: ShoppingCart,
                    action: "New order placed",
                    user: "John Doe",
                    time: "2 minutes ago",
                  },
                  {
                    icon: Package,
                    action: "Product restocked",
                    user: "Jane Smith",
                    time: "15 minutes ago",
                  },
                  {
                    icon: MessageSquare,
                    action: "Customer support ticket resolved",
                    user: "Support Team",
                    time: "1 hour ago",
                  },
                  {
                    icon: UserCog,
                    action: "New user registered",
                    user: "Alice Johnson",
                    time: "3 hours ago",
                  },
                  {
                    icon: Award,
                    action: "Product review submitted",
                    user: "Bob Wilson",
                    time: "5 hours ago",
                  },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <activity.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                        {activity.action}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {activity.user} • {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function SidebarContent({ sidebarOpen, closeSidebar }) {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [openSubmenu, setOpenSubmenu] = useState("");

  const handleItemClick = (name) => {
    setActiveItem(name);
    if (!menuItems.find((item) => item.name === name)?.submenu) {
      closeSidebar();
    }
  };

  const toggleSubmenu = (name) => {
    setOpenSubmenu(openSubmenu === name ? "" : name);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          NextGen
        </span>
        <button
          onClick={closeSidebar}
          className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2 px-3">
          {menuItems.map((item) => (
            <li key={item.name}>
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className={`flex items-center justify-between w-full px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                      activeItem === item.name
                        ? "bg-blue-500 text-white"
                        : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                    }`}
                  >
                    <span className="flex items-center">
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </span>
                    <ChevronRight
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openSubmenu === item.name ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {openSubmenu === item.name && (
                    <ul className="mt-2 space-y-1 px-4">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.name}>
                          <button
                            onClick={() => handleItemClick(subItem.name)}
                            className={`flex items-center w-full px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                              activeItem === subItem.name
                                ? "bg-blue-500 text-white"
                                : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                            }`}
                          >
                            <subItem.icon className="mr-3 h-5 w-5" />
                            {subItem.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => handleItemClick(item.name)}
                  className={`flex items-center w-full px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    activeItem === item.name
                      ? "bg-blue-500 text-white"
                      : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function StatCard({ title, value, change, icon: Icon, trend }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <Icon className="h-6 w-6 text-gray-400" />
      </div>
      <div className="flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          {value}
        </p>
        <p
          className={`ml-2 flex items-baseline text-sm font-semibold ${
            trend === "up"
              ? "text-green-600 dark:text-green-500"
              : "text-red-600 dark:text-red-500"
          }`}
        >
          {trend === "up" ? (
            <ArrowUpRight className="self-center flex-shrink-0 h-4 w-4 text-green-500 dark:text-green-400" />
          ) : (
            <TrendingDown className="self-center flex-shrink-0 h-4 w-4 text-red-500 dark:text-red-400" />
          )}
          <span className="sr-only">
            {trend === "up" ? "Increased" : "Decreased"} by
          </span>
          {change}
        </p>
      </div>
    </div>
  );
}
