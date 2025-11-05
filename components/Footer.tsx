import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 bg-[#073737] text-white text-center">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Abel Ronoh. All rights reserved.</p>
      </div>
    </footer>
  );
}