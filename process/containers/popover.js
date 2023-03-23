import React, { useState } from "react";

const Popover = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="relative">
			<button
				type="button"
				className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
				onClick={() => setIsOpen(!isOpen)}
			>
				Click me!
			</button>
			{isOpen && (
				<div className="absolute z-10 right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
					<div className="py-1">
						<a
							href="#"
							className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
						>
							Edit
						</a>
						<a
							href="#"
							className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
						>
							Duplicate
						</a>
						<a
							href="#"
							className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
						>
							Archive
						</a>
						<a
							href="#"
							className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
						>
							Move
						</a>
					</div>
				</div>
			)}
		</div>
	);
};

export default Popover;
