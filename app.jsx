import React, { useState } from 'react';

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

  const handleSubmit = () => {
    const data = `${form.city},\"${form.experience}\",\"${form.food}\",\"${form.people}\",\"${form.places}\"\n`;
    const blob = new Blob([data], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'data.csv';
    a.click();
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 font-sans">
      <h1 className="text-4xl font-bold text-center mb-6 text-indigo-700">Share Your Travel Experience</h1>

      <div className="max-w-3xl mx-auto space-y-4 bg-white p-6 rounded-xl shadow-xl">
        <select name="city" value={form.city} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">-- Choose a City --</option>
          {cities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>

        <textarea name="experience" value={form.experience} onChange={handleChange} placeholder="Your experience..." className="w-full p-2 border rounded" />
        <textarea name="food" value={form.food} onChange={handleChange} placeholder="Favorite food/cuisine..." className="w-full p-2 border rounded" />
        <textarea name="people" value={form.people} onChange={handleChange} placeholder="People's behavior..." className="w-full p-2 border rounded" />
        <textarea name="places" value={form.places} onChange={handleChange} placeholder="Best places to visit..." className="w-full p-2 border rounded" />

        <button onClick={handleSubmit} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition-all duration-300">
          Submit and Download CSV
        </button>
      </div>
    </div>
  );
}
