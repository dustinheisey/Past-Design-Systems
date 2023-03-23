import React, { useEffect, useState } from "react";

const Toast = ({ message, type, show, setShow }) => {
	const [className, setClassName] = useState("");

	useEffect(() => {
		if (show) {
			setClassName("opacity-100 scale-100");
			setTimeout(() => {
				setClassName("opacity-0 scale-95");
				setTimeout(() => {
					setShow(false);
				}, 300);
			}, 3000);
		}
	}, [show, setShow]);

	const getColorClass = () => {
		switch (type) {
			case "success":
				return "bg-green-500 text-white";
			case "error":
				return "bg-red-500 text-white";
			case "warning":
				return "bg-yellow-500 text-white";
			default:
				return "bg-gray-500 text-white";
		}
	};

	return (
		<div
			className={`fixed bottom-5 right-5 p-4 rounded-lg transition-transform duration-300 transform ${className}`}
		>
			<div className={`px-2 py-1 rounded-lg ${getColorClass()}`}>{message}</div>
		</div>
	);
};

export default Toast;
