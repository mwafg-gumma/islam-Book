import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <section className="bg-gray-100">
                <nav className="mx-auto p-10">
                    <div className="flex flex-row items-center justify-between">
                        {/* Hamburger Icon for mobile */}
                        <button
                            className="md:hidden block mx-2"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            {/* Hamburger SVG */}
                            <svg
                                className="w-8 h-8 text-gray-700"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        {/* Links */}
                    <ul
                        className={`
                            flex flex-col md:flex-row md:items-center items-end mx-2
                            md:static absolute left-0 right-0 bg-gray-100 md:bg-transparent
                            transition-all duration-500 ease-in-out
                            ${menuOpen ? "top-20 opacity-100" : "top-[-400px] opacity-0"}
                            md:opacity-100 md:top-auto
                            z-10
                        `}
                    >
                    <li className="m-2" title="أذكار الصباح">
                        <NavLink
                            to="/four"
                            className="text-gray-600 hover:text-gray-900 px-2 py-2 font-bold"
                            onClick={() => setMenuOpen(false)}
                        >
                            أذكار الصباح
                            </NavLink>
                        </li>
                        <li className="m-2">
                            <NavLink
                                to="/third"
                                className="text-gray-600 hover:text-gray-900 px-2 py-2 font-bold"
                                onClick={() => setMenuOpen(false)}
                            >
                                أذكار المساء
                            </NavLink>
                        </li>
                        <li className="m-2">
                            <NavLink
                                to="/second"
                                className="text-gray-600 hover:text-gray-900 px-2 py-2 font-bold"
                                onClick={() => setMenuOpen(false)}
                            >
                                الاذكار
                            </NavLink>
                        </li>
                        <li className="m-2">
                            <NavLink
                                to="/one"
                                className="text-gray-600 hover:text-gray-900 px-2 py-2 font-bold"
                                onClick={() => setMenuOpen(false)}
                            >
                                الحديث
                            </NavLink>
                        </li>
                        <li className="m-2">
                            <NavLink
                                to="/islam-Book"
                                className="text-gray-600 hover:text-gray-900 px-2 py-2 font-bold"
                                onClick={() => setMenuOpen(false)}
                            >
                                الرئسيه
                            </NavLink>
                        </li>
                    </ul>
                        {/* logo */}
                        <div className="mx-5">
                            <h1 className="md:text-2xl text-lg font-normal " title="أذكار المسلم">
                                أذكار المسلم
                            </h1>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
};

export default NavBar;
