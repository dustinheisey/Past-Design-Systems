import React from "react";

const Dropdown = () => {
	return (
		<div className="relative">
			<button className="bg-gray-800 text-white py-2 px-4 rounded inline-flex items-center">
				<span className="mr-1">Dropdown</span>
				<svg
					className="fill-current h-4 w-4"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
				</svg>
			</button>
			<ul className="absolute z-10 hidden">
				<li className="bg-gray-800">
					<a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">
						Home
					</a>
				</li>
				<li className="bg-gray-800">
					<a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">
						About
					</a>
				</li>
				<li className="bg-gray-800">
					<a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">
						Contact
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Dropdown;
