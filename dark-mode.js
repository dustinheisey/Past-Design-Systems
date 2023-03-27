const toggle = document.querySelector("#color_mode_toggle");

toggle.addEventListener("change", switchTheme, false);

const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function switchTheme(e) {
	if (preferDark) {
		if (e.target.checked) {
			document.querySelector("html").setAttribute("data-theme", "light");
			localStorage.setItem("theme", "light");
		} else {
			document.querySelector("html").setAttribute("data-theme", "dark");
			localStorage.setItem("theme", "dark");
		}
	} else {
		if (e.target.checked) {
			document.querySelector("html").setAttribute("data-theme", "dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.querySelector("html").setAttribute("data-theme", "light");
			localStorage.setItem("theme", "light");
		}
	}
}

const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
	document.querySelector("html").setAttribute("data-theme", currentTheme);

	if (preferDark) {
		toggle.checked = currentTheme === "light";
	} else {
		toggle.checked = currentTheme === "dark";
	}
} else {
	localStorage.setItem("theme", preferDark ? "dark" : "light");
}
