import React, { useState } from "react";

const CustomSelect = ({ options }) => {
	const [selectedOption, setSelectedOption] = useState(options[0].value);
	const [isOpen, setIsOpen] = useState(false);

	const handleOptionClick = value => {
		setSelectedOption(value);
		setIsOpen(false);
	};

	return (
		<div className="relative">
			<div
				className="bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 flex items-center justify-between cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
			>
				<span>{selectedOption}</span>
				<svg
					className={`transition transform duration-200 ${isOpen ? "rotate-180" : ""}`}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					width="20px"
					height="20px"
				>
					<path
						fillRule="evenodd"
						d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
			{isOpen && (
				<div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-2">
					{options.map(option => (
						<div
							key={option.value}
							className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
								selectedOption === option.value ? "bg-gray-100" : ""
							}`}
							onClick={() => handleOptionClick(option.value)}
						>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default CustomSelect;
