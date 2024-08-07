// src/components/Reminder.js
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaBell } from 'react-icons/fa';

const Reminder = () => {
  const [reminders, setReminders] = useState([]);
  const [reminderText, setReminderText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      reminders.forEach(reminder => toast(reminder));
    }, 3600000); // 1 hour

    return () => clearInterval(interval);
  }, [reminders]);

  const addReminder = () => {
    setReminders([...reminders, reminderText]);
    setReminderText('');
  };

  return (
    <div>
      <h1>Reminder App <FaBell /></h1>
      <input 
        type="text" 
        value={reminderText} 
        onChange={(e) => setReminderText(e.target.value)} 
        placeholder="Enter your reminder" 
      />
      <button onClick={addReminder}>Add Reminder</button>
      <ToastContainer />
    </div>
  );
};

export default Reminder;
