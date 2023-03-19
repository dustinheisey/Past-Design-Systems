const { src, dest, watch } = require("gulp");
const minifyCSS = require("gulp-clean-css");
const concatCSS = require("gulp-concat");

const processCSS = () => {
	return src("src/**/*.css")
		.pipe(minifyCSS())
		.pipe(concatCSS("style.css"))
		.pipe(dest("website/styles"));
};

const watchCSS = () => {
	watch("src/**/**.css", processCSS);
};

exports.process = processCSS;
exports.watch = watchCSS;
