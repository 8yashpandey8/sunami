// App.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const cities = ["Delhi", "Mumbai", "Bangalore", "Kolkata", "Chennai", "Jaipur", "Goa"];

export default function App() {
  const [form, setForm] = useState({
    city: '',
    experience: '',
    food: '',
    people: '',
    places: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const data = `${form.city},"${form.experience}","${form.food}","${form.people}","${form.places}"\n`;
    const blob = new Blob([data], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'data.csv';
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-purple-200 p-10">
      <motion.h1 
        className="text-4xl text-center font-bold mb-8 text-indigo-600"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7 }}>
        Share Your Travel Experience
      </motion.h1>

      <div className="max-w-3xl mx-auto space-y-6">
        <Card className="p-4 shadow-2xl rounded-2xl">
          <CardContent className="space-y-4">
            <label className="block font-semibold text-indigo-800">Select City</label>
            <select 
              name="city" 
              value={form.city} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md">
              <option value="">-- Choose a City --</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>

            <label className="block font-semibold text-indigo-800">Describe your experience</label>
            <textarea name="experience" value={form.experience} onChange={handleChange} className="w-full p-2 border rounded-md"></textarea>

            <label className="block font-semibold text-indigo-800">Favorite food and cuisine</label>
            <textarea name="food" value={form.food} onChange={handleChange} className="w-full p-2 border rounded-md"></textarea>

            <label className="block font-semibold text-indigo-800">People behavior</label>
            <textarea name="people" value={form.people} onChange={handleChange} className="w-full p-2 border rounded-md"></textarea>

            <label className="block font-semibold text-indigo-800">Best places to visit</label>
            <textarea name="places" value={form.places} onChange={handleChange} className="w-full p-2 border rounded-md"></textarea>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Button onClick={handleSubmit} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition-all duration-300">
                Submit and Download CSV
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
