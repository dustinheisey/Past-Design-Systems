import React from "react";

const CustomRadio = ({ label, name, value, checked, onChange }) => {
	return (
		<label className="inline-flex items-center">
			<input
				type="radio"
				className="form-radio text-green-500 h-4 w-4"
				name={name}
				value={value}
				checked={checked}
				onChange={onChange}
			/>
			<span className="ml-2">{label}</span>
		</label>
	);
};

export default CustomRadio;
