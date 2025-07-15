'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../utils/supabaseClient';

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();

      if (!user) {
        router.push('/login');
        return;
      }

      // 1. Fetch custom user profile
      const { data: profile, error: profileError } = await supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .single();

      if (profileError) console.error(profileError);
      else setUserData(profile);

      // 2. Fetch their bookings
      const { data: bookingData, error: bookingError } = await supabase
        .from('bookings')
        .select('*')
        .eq('user_id', user.id); 

      if (bookingError) console.error(bookingError);
      else setBookings(bookingData);

      setLoading(false);
    };

    fetchData();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-100 to-blue-50 p-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-700">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 shadow"
        >
          Logout
        </button>
      </div>

      {/* User Profile */}
      {userData && (
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6 mb-8 flex items-center gap-6">
          {userData.profile_photo && (
            <img
              src={userData.profile_photo}
              alt="Profile"
              className="w-20 h-20 rounded-full border-2 border-blue-400"
            />
          )}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{userData.name}</h2>
            <p className="text-gray-600">{userData.email}</p>
            <p className="text-gray-600">📞 {userData.phone}</p>
          </div>
        </div>
      )}

      {/* Bookings */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Your Bookings</h3>

        {loading ? (
          <p>Loading...</p>
        ) : bookings.length === 0 ? (
          <p className="text-gray-500">No bookings found.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {bookings.map((b) => (
              <div
                key={b.id}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg border border-gray-200"
              >
                <h4 className="font-bold text-blue-600">{b.service}</h4>
                <p className="text-gray-600">📅 {b.date}</p>
                <p className="text-gray-600">🧍 Name: {b.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
