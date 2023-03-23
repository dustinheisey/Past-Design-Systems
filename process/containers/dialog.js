import React from "react";

const Dialog = () => {
	const openDialog = () => {
		const dialog = document.getElementById("my-dialog");
		dialog.style.display = "block";
	};

	const closeDialog = () => {
		const dialog = document.getElementById("my-dialog");
		dialog.style.display = "none";
	};

	return (
		<div>
			<button onClick={openDialog}>Open Dialog</button>
			<div
				id="my-dialog"
				className="fixed z-50 inset-0 bg-gray-500 bg-opacity-50 h-full w-full flex items-center justify-center"
			>
				<div className="bg-white p-6 rounded-md max-w-lg">
					<h2 className="text-xl font-bold mb-4">Dialog Title</h2>
					<p className="mb-4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet nulla ac
						interdum blandit.
					</p>
					<button
						className="bg-blue-500 text-white py-2 px-4 rounded-md mr-4"
						onClick={closeDialog}
					>
						Close
					</button>
					<button className="bg-green-500 text-white py-2 px-4 rounded-md" onClick={closeDialog}>
						Save
					</button>
				</div>
			</div>
		</div>
	);
};

export default Dialog;
