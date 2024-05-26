import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-900">
      <div className="container mx-auto flex justify-between py-3">
        <Link href="/">
          <h3 className="font-bold text-3xl">Next CRUD</h3>
        </Link>
        <ul className="flex gap-2 text-lg font-bold">
          <li>
            <Link href="/new" className="text-slate-300 hover:text-slate-200">
              New
            </Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
