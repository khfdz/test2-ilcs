import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  // Format time and date
  const formatDateTime = (date) => {
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const months = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    const day = days[date.getDay()];
    const dayNum = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const time = date.toLocaleTimeString("id-ID");

    return `${day}, ${dayNum} ${month} ${year} - ${time}`;
  };

  return (
    <nav className="flex justify-between items-center bg-gray-800 p-4 text-white">
      {/* Left: Brand Name */}
      <div className="text-lg font-bold">INSW</div>

      {/* Right: Time, Notification, Profile */}
      <div className="flex items-center space-x-6">
        {/* Date & Time */}
        <span className="text-sm">{formatDateTime(time)}</span>

        {/* Notification Icon */}
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405a2.032 2.032 0 00-.595-1.185L18 14m-6-9h0a2 2 0 00-2 2v7a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h0M3 12l3-3m0 0l3 3m-3-3v12"
            />
          </svg>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </div>

        {/* Profile Icon */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l6 6m-6-6l-6 6m6-6V8m0 0a4 4 0 10-8 0m8 0a4 4 0 108 0m-8 0V8"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
