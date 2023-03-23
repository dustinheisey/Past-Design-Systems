import React from "react";

const Alert = () => {
	return (
		<div
			className="bg-red-100 border border-red-500 text-red-700 px-4 py-3 rounded relative"
			role="alert"
		>
			<strong className="font-bold">Danger!</strong>
			<span className="block sm:inline"> Something seriously bad happened.</span>
			<span className="absolute top-0 bottom-0 right-0 px-4 py-3">
				<svg
					onClick={() => alert("Close button clicked")}
					className="fill-current h-6 w-6 text-red-500 hover:text-red-800 cursor-pointer"
					role="button"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
				>
					<title>Close</title>
					<path d="M14.348 5.652a1 1 0 00-1.414 0L10 8.586 6.066 4.652a1 1 0 00-1.414 1.414L8.586 10l-3.934 3.934a1 1 0 001.414 1.414L10 11.414l3.934 3.934a1 1 0 001.414-1.414L11.414 10l3.934-3.934a1 1 0 000-1.414z" />
				</svg>
			</span>
		</div>
	);
};

export default Alert;
