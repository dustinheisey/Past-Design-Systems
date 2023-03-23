import React from "react";

const MyComponent = () => {
	return (
		
		<div className="flex flex-col items-center justify-center h-screen bg-gray-200">
			<div className="bg-white p-10 rounded-lg shadow-lg">
				<h1 className="text-3xl font-bold mb-4">Hello World</h1>
				<p className="text-gray-800">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed tellus porttitor,
					placerat quam vel, condimentum augue. Sed vel purus quis libero lobortis feugiat. Duis in
					lorem in magna aliquet interdum. Nulla justo magna, placerat a viverra nec, tempus sed
					nulla. Curabitur ullamcorper, urna eu pellentesque luctus, turpis ipsum consectetur lacus,
					ac tincidunt tortor augue ac dolor. Morbi euismod, metus quis volutpat dapibus, libero dui
					rutrum metus, vel bibendum elit odio at sapien.
				</p>
				<button className="mt-6 rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white">
					Click Me!
				</button>
			</div>
		</div>
	);
};

export default MyComponent;
