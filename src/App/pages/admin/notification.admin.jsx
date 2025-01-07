import React, { useState } from 'react';
import { FaUser, FaExclamationTriangle, FaEnvelope, FaCogs } from 'react-icons/fa';

const NotificationAdmin = () => {
  const [notifications, setNotifications] = useState({
    newInquiries: [
      { title: 'New Inquiry from John Doe', details: 'Regarding product shipment delay', time: '5 mins ago' },
      { title: 'New Inquiry from Jane Smith', details: 'Request for bulk pricing', time: '1 hour ago' },
    ],
    userAlerts: [
      { title: 'Login Attempt Failed', details: 'User: mike@example.com', time: '30 mins ago', type: 'Warning' },
      { title: 'Account Registration Pending', details: 'User: sara@example.com', time: '2 hours ago', type: 'Info' },
    ],
    accountIssues: [
      { title: 'Password Reset Failed', details: 'User: kevin@example.com', time: '1 hour ago' },
      { title: 'Account Locked', details: 'User: emma@example.com', time: '2 days ago' },
    ],
    systemAlerts: [
      { title: 'Critical Server Downtime', details: 'Server #3 is down', time: '10 mins ago', type: 'Critical' },
      { title: 'Database Backup Completed', details: 'Backup completed successfully', time: '5 hours ago', type: 'Info' },
    ],
  });

  const Section = ({ icon: Icon, title, color, items }) => (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className={`text-xl font-semibold mb-4 flex items-center text-${color}-600`}>
        <Icon className="mr-3" /> {title}
      </h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition"
          >
            <h3 className="font-medium text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.details}</p>
            <p className="text-xs text-gray-500">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-5 rounded-md bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Notifications</h1>

      <div className="space-y-8">
        <Section
          icon={FaEnvelope}
          title="New Inquiries"
          color="blue"
          items={notifications.newInquiries}
        />
        <Section
          icon={FaUser}
          title="User Alerts"
          color="orange"
          items={notifications.userAlerts}
        />
        <Section
          icon={FaExclamationTriangle}
          title="Account Issues"
          color="red"
          items={notifications.accountIssues}
        />
        <Section
          icon={FaCogs}
          title="System Alerts"
          color="purple"
          items={notifications.systemAlerts}
        />
      </div>
    </div>
  );
};

export default NotificationAdmin;
