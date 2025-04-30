"use client";

import {
  Card,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
// import { Helmet } from "react-helmet-async";
import { FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";

const Profile = () => {
  const data = [
    {
      label: "Profile",
      value: "profile",
      icon: FaUser,
      content: (
        <div className="space-y-6 text-center">
          <div className="relative inline-block">
            <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white text-7xl font-semibold">U</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <p className="text-lg font-medium">User Name</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <p className="text-lg">user@example.com</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account Status
            </label>
            <span className="text-red-500">Not Verified</span>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Member Since
            </label>
            <p className="text-lg">March 20, 2024</p>
          </div>
        </div>
      ),
    },
    {
      label: "Orders",
      value: "orders",
      icon: FaShoppingBag,
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Order History</h3>
          <div className="overflow-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">#1</td>
                  <td className="px-6 py-4 whitespace-nowrap">2024-03-20</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="bg-green-100 text-green-800 px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                      Delivered
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">$150</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      label: "Wishlist",
      value: "wishlist",
      icon: FaHeart,
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">My Wishlist</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Product 1</h4>
                  <p className="text-primary">$49.99</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-2 md:px-4 mt-2 mb-8">
      {/* <Helmet>
        <title>Sunnah Store | Profile</title>
      </Helmet> */}

      <Card className="max-w-4xl mx-auto p-4 md:p-8">
        <Tabs value="profile">
          <TabsHeader>
            {data.map(({ label, value, icon: Icon }) => (
              <Tab key={value} value={value}>
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5 hidden md:block" />
                  {label}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody className="mt-6">
            {data.map(({ value, content }) => (
              <TabPanel key={value} value={value}>
                {content}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </Card>
    </div>
  );
};

export default Profile;
