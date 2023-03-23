import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const Drawer = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="relative bg-gray-800 h-screen">
			<button
				className="fixed top-3 left-3 bg-gray-700 rounded-full p-2"
				onClick={() => setIsOpen(!isOpen)}
			>
				<svg viewBox="0 0 24 24" className="w-6 h-6">
					{isOpen ? (
						<path fill="#fff" d="M6 18L18 6M6 6l12 12" />
					) : (
						<path fill="#fff" d="M4 6h16M4 12h16M4 18h16" />
					)}
				</svg>
			</button>
			<Transition
				show={isOpen}
				enter="transition ease-out duration-100 transform"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="transition ease-in duration-75 transform"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50">
					<div className="fixed top-0 right-0 w-1/2 bg-gray-900 h-full p-8">
						<h2 className="text-2xl font-bold text-white mb-5">Drawer Content</h2>
						<p className="text-gray-400 mb-5">
							Here's some example text to display in the drawer. You can put whatever you want here!
						</p>
						<button
							className="rounded-full bg-gray-800 text-white py-3 px-6 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
							onClick={() => setIsOpen(false)}
						>
							Close Drawer
						</button>
					</div>
				</div>
			</Transition>
		</div>
	);
};

export default Drawer;
