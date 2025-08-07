import { Search, Settings, MessageSquare, QrCode, Users, FileText, BarChart3, LogOut, Bell, Plus, Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { useState } from "react";

const Dashboard = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { title: "Pending Invites", value: "1", color: "bg-orange-50 text-orange-700" },
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

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col">
            {/* Mobile Logo */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">K</span>
                  </div>
                  <div>
                    <h1 className="font-semibold text-gray-900">KidsQueue</h1>
                    <p className="text-xs text-gray-500">Admin Dashboard</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 p-4">
              <div className="space-y-1">
                {sidebarItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      item.active
                        ? "bg-primary text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </nav>

            {/* Mobile Center Info */}
            <div className="p-4 border-t border-gray-200">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs font-medium text-gray-600 mb-1">MY CENTER ID</p>
                <p className="text-sm font-semibold text-gray-900">01</p>
                <button className="text-xs text-primary hover:underline mt-1">
                  Bright Start Academy at Falls Pointe
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex w-64 bg-white border-r border-gray-200 flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <div>
              <h1 className="font-semibold text-gray-900">KidsQueue</h1>
              <p className="text-xs text-gray-500">Admin Dashboard</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-1">
            {sidebarItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  item.active
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* Center Info */}
        <div className="p-4 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs font-medium text-gray-600 mb-1">MY CENTER ID</p>
            <p className="text-sm font-semibold text-gray-900">01</p>
            <button className="text-xs text-primary hover:underline mt-1">
              Bright Start Academy at Falls Pointe
            </button>
          </div>
          
          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600">QUICK STATS</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">26</div>
                <div className="text-xs text-gray-500">Open</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">78</div>
                <div className="text-xs text-gray-500">Enrolled</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">24h</div>
                <div className="text-xs text-gray-500">Avg Response</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">4.6</div>
                <div className="text-xs text-gray-500">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <h1 className="text-xl lg:text-2xl font-semibold text-gray-900">Admin dashboard</h1>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Registered in</span>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  Fully Verified
                </Badge>
                <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                  High Satisfaction Score
                </Badge>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Upgrade
              </Button>
              <Button variant="outline" size="sm">
                Messages
              </Button>
              <Button variant="outline" size="sm">
                QR Codes
              </Button>
              <Button variant="outline" size="sm">
                Settings
              </Button>
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Invite
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Publish
              </Button>
            </div>
            {/* Mobile actions */}
            <div className="flex lg:hidden items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white" size="sm">
                Invite
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-4 lg:p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCards.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                    <span className="text-xl font-bold">{stat.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Team Members Table */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">Team Members & Access Control</h2>
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
                                <p className="font-medium text-gray-900">{member.name}</p>
                                <p className="text-sm text-gray-500">Invited by System Admin</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div>
                              <p className="text-sm text-gray-900">{member.email}</p>
                              <p className="text-sm text-gray-500">{member.phone}</p>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <Badge variant="outline" className={member.roleColor}>
                              {member.role}
                            </Badge>
                          </td>
                          <td className="py-4 px-6">
                            <p className="text-sm text-gray-900">{member.permissions}</p>
                          </td>
                          <td className="py-4 px-6">
                            <Badge
                              variant={member.status === "Active" ? "default" : "secondary"}
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
                            <p className="text-sm text-gray-900">{member.lastLogin}</p>
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
                  <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
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
                            <span className="font-medium">{activity.user}</span> {activity.action}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{activity.time} • {activity.type}</p>
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
