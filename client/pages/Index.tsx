import {
  Search,
  Settings,
  MessageSquare,
  QrCode,
  Users,
  FileText,
  BarChart3,
  Bell,
  Plus,
  Menu,
  X,
  Home,
  UserPlus,
  Eye,
  Award,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { LuCrown, LuQrCode } from "react-icons/lu";
import { FiMessageSquare } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

const Dashboard = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = [
    { icon: BarChart3, label: "Overview", active: false },
    { icon: QrCode, label: "QR Codes", active: false },
    { icon: FileText, label: "Analytics", active: false },
    { icon: FileText, label: "Waitlist", active: false },
    { icon: MessageSquare, label: "Classrooms", active: false },
    { icon: Users, label: "Team Access", active: true },
    { icon: Settings, label: "Settings", active: false },
  ];

  const statsCards = [
    { title: "Total Members", value: "4", color: "bg-blue-50 text-blue-700" },
    { title: "Active Users", value: "3", color: "bg-green-50 text-green-700" },
    {
      title: "Pending Invites",
      value: "1",
      color: "bg-orange-50 text-orange-700",
    },
    { title: "Admins", value: "1", color: "bg-purple-50 text-purple-700" },
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      email: "sarah.johnson@kidscenter.com",
      phone: "(555) 123-4567",
      role: "Admin",
      permissions: "All Permissions",
      status: "Active",
      lastLogin: "2024-01-20",
      avatar: "SJ",
      roleColor: "text-red-600",
    },
    {
      name: "Michael Chen",
      email: "michael.chen@kidscenter.com",
      phone: "(555) 234-5678",
      role: "Manager",
      permissions: "analytics, waitlist +1 more",
      status: "Active",
      lastLogin: "2024-01-19",
      avatar: "MC",
      roleColor: "text-blue-600",
    },
    {
      name: "Emily Rodriguez",
      email: "emily.rodriguez@kidscenter.com",
      phone: "(555) 345-6789",
      role: "Staff",
      permissions: "waitlist, messages",
      status: "Active",
      lastLogin: "2024-01-18",
      avatar: "ER",
      roleColor: "text-green-600",
    },
    {
      name: "David Williams",
      email: "david.williams@kidscenter.com",
      phone: "(555) 456-7890",
      role: "Viewer",
      permissions: "analytics",
      status: "Pending",
      lastLogin: "2024-01-15",
      avatar: "DW",
      roleColor: "text-gray-600",
    },
  ];

  const recentActivity = [
    {
      user: "Sarah Johnson",
      action: "updated classroom capacity",
      time: "3 hours ago",
      type: "classroom update",
      icon: "●",
      color: "text-green-500",
    },
    {
      user: "Michael Chen",
      action: "responded to parent message",
      time: "4 hours ago",
      type: "Message from Maya Rodriguez",
      icon: "●",
      color: "text-blue-500",
    },
    {
      user: "Emily Rodriguez",
      action: "added family to waitlist",
      time: "6 hours ago",
      type: "Oliver Williams - PreK",
      icon: "●",
      color: "text-orange-500",
    },
  ];

  const navigation = [
    { name: "Overview", icon: Home, current: true },
    { name: "QR Codes", icon: QrCode, current: false },
    { name: "Analytics", icon: BarChart3, current: false },
    { name: "Waitlist", icon: UserPlus, current: false },
    { name: "Classrooms", icon: Users, current: false },
    { name: "Team Access", icon: Users, current: false },
    { name: "Settings", icon: Settings, current: false },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="relative z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-50 w-72 overflow-y-auto bg-sidebar px-6 pb-4">
            <div className="pt-4">
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h1 className="text-sm font-semibold text-sidebar-foreground">
                      KidsQueue
                    </h1>
                    <p className="text-xs text-sidebar-foreground/70">
                      Admin Dashboard
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3 ml-0.5 mb-6">
                  Welcome, <span className="font-bold">Test Admin</span>
                </p>
              </div>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href="#"
                          className={cn(
                            item.current
                              ? "bg-sidebar-accent text-sidebar-accent-foreground"
                              : "text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium",
                          )}
                          onClick={() => setSidebarOpen(false)}
                        >
                          <item.icon
                            className={cn(
                              item.current
                                ? "text-sidebar-accent-foreground"
                                : "text-sidebar-foreground/70 group-hover:text-sidebar-accent-foreground",
                              "h-6 w-6 shrink-0",
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <div className="bg-sidebar-accent/50 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-sidebar-foreground">
                      MY CENTER (1)
                    </h3>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-sidebar-foreground/70">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        Bright Start Academy at Falls Point
                      </div>
                      <button className="text-xs text-primary hover:text-primary/80 flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        View Center Page
                      </button>
                    </div>
                  </div>
                </li>
                <li className="mt-4">
                  <div className="bg-sidebar-accent/30 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-sidebar-foreground">
                      QUICK STATS
                    </h3>
                    <div className="mt-3 grid grid-cols-2 gap-3 text-center">
                      <div>
                        <div className="text-lg font-semibold text-sidebar-foreground">
                          6
                        </div>
                        <div className="text-xs text-sidebar-foreground/70">
                          Waitlist
                        </div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-sidebar-foreground">
                          42
                        </div>
                        <div className="text-xs text-sidebar-foreground/70">
                          Enrolled
                        </div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-sidebar-foreground">
                          8h
                        </div>
                        <div className="text-xs text-sidebar-foreground/70">
                          Avg Response
                        </div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-sidebar-foreground">
                          4.5
                        </div>
                        <div className="text-xs text-sidebar-foreground/70">
                          Rating
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:z-50 lg:flex lg:w-72 lg:flex-col custom-scrollbar">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-sidebar px-6 pb-4">
          <div className="pt-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-sm font-semibold text-sidebar-foreground">
                    KidsQueue
                  </h1>
                  <p className="text-xs text-sidebar-foreground/70">
                    Admin Dashboard
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3 ml-0.5">
                Welcome, <span className="font-bold">Test Admin</span>
              </p>
            </div>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-5">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href="#"
                        className={cn(
                          item.current
                            ? "bg-sidebar-accent text-sidebar-accent-foreground"
                            : "text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium",
                        )}
                      >
                        <item.icon
                          className={cn(
                            item.current
                              ? "text-sidebar-accent-foreground"
                              : "text-sidebar-foreground/70 group-hover:text-sidebar-accent-foreground",
                            "h-6 w-6 shrink-0",
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="mt-auto">
                <div className="bg-sidebar-accent/50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-sidebar-foreground">
                    MY CENTER (1)
                  </h3>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-sidebar-foreground/70">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      Bright Start Academy at Falls Point
                    </div>
                    <button className="text-xs text-primary hover:text-primary/80 flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      View Center Page
                    </button>
                  </div>
                </div>
              </li>
              <li className="mt-4">
                <div className="bg-sidebar-accent/30 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-sidebar-foreground">
                    QUICK STATS
                  </h3>
                  <div className="mt-3 grid grid-cols-2 gap-3 text-center">
                    <div>
                      <div className="text-lg font-semibold text-sidebar-foreground">
                        6
                      </div>
                      <div className="text-xs text-sidebar-foreground/70">
                        Waitlist
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-sidebar-foreground">
                        42
                      </div>
                      <div className="text-xs text-sidebar-foreground/70">
                        Enrolled
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-sidebar-foreground">
                        8h
                      </div>
                      <div className="text-xs text-sidebar-foreground/70">
                        Avg Response
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-sidebar-foreground">
                        4.5
                      </div>
                      <div className="text-xs text-sidebar-foreground/70">
                        Rating
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="min-w-0 flex-1">
                <h1 className="text-lg font-semibold text-foreground truncate">
                  Bright Start Academy at Fells Point
                </h1>
                <div className="hidden sm:block text-sm text-muted-foreground">
                  <span className="flex items-center gap-1 text-xs font-semibold">
                    123 Thames Street, Baltimore, MD 21231
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 font-semibold">
                <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
                  <Award className="size-3" />
                  Responded in {"<"}24h
                </div>
                <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
                  <Award className="size-3" />
                  Fully Verified center
                </div>
                <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
                  <Award className="size-3" />
                  High Satisfaction Score
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-2">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary-600 text-white"
              >
                <LuCrown />
                Upgrade
              </Button>
              <Button variant="outline" size="sm">
                <FiMessageSquare />
                Messages
              </Button>
              <Button variant="outline" size="sm">
                <LuQrCode />
                QR Codes
              </Button>
              <Button variant="outline" size="sm">
                <IoSettingsOutline />
                Settings
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-4 lg:p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCards.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      {stat.title}
                    </p>
                    <div
                      className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}
                    >
                      <span className="text-xl font-bold">{stat.value}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            {/* Team Members Table */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Team Members & Access Control
                    </h2>
                    <Button className="bg-primary hover:bg-primary/90 text-white">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Team Member
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Manage team access and permissions for your center.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[700px]">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Team Member
                        </th>
                        <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Contact
                        </th>
                        <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Role
                        </th>
                        <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Permissions
                        </th>
                        <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Last Login
                        </th>
                        <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {teamMembers.map((member, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="py-4 px-6">
                            <div className="flex items-center space-x-3">
                              <Avatar className="w-8 h-8">
                                <AvatarFallback className="bg-primary text-white text-sm">
                                  {member.avatar}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium text-gray-900">
                                  {member.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                  Invited by System Admin
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div>
                              <p className="text-sm text-gray-900">
                                {member.email}
                              </p>
                              <p className="text-sm text-gray-500">
                                {member.phone}
                              </p>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <Badge
                              variant="outline"
                              className={member.roleColor}
                            >
                              {member.role}
                            </Badge>
                          </td>
                          <td className="py-4 px-6">
                            <p className="text-sm text-gray-900">
                              {member.permissions}
                            </p>
                          </td>
                          <td className="py-4 px-6">
                            <Badge
                              variant={
                                member.status === "Active"
                                  ? "default"
                                  : "secondary"
                              }
                              className={
                                member.status === "Active"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-orange-100 text-orange-800"
                              }
                            >
                              {member.status}
                            </Badge>
                          </td>
                          <td className="py-4 px-6">
                            <p className="text-sm text-gray-900">
                              {member.lastLogin}
                            </p>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <Settings className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <FileText className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Recent Activity
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Track team member actions and changes
                  </p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className={`mt-1 ${activity.color}`}>
                          {activity.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-900">
                            <span className="font-medium">{activity.user}</span>{" "}
                            {activity.action}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {activity.time} • {activity.type}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
