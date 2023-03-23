const { src, dest, watch } = require("gulp");
const postCSS = require("gulp-postcss");
const minHTML = require("gulp-htmlmin");
const autoprefixer = require("autoprefixer");
const presetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");
const concat = require("gulp-concat");
const cleanCss = require("gulp-clean-css");

const processCSS = () => {
	return src([
		"styles/tokens.css",
		"styles/reset.css",
		"styles/layout/*.css",
		"styles/components/*.css",
		"styles/modifiers/*.css",
		"styles/overrides.css"
	])
		.pipe(postCSS([presetEnv({ stage: 0 }), autoprefixer(), cssnano({ preset: "default" })]))
		.pipe(concat("style.css"))
		.pipe(cleanCss())
		.pipe(dest("dist/"));
};

const processHTML = () => {
	return src(["views/*.html"])
		.pipe(
			minHTML({
				collapseWhitespace: true,
				removeComments: true
			})
		)
		.pipe(dest("./dist"));
};

const processAssets = () => {
	return src(["assets/**/*"]).pipe(dest("./dist/assets"));
};

const watchFiles = () => {
	watch("styles/**/**.css", processCSS);
	watch("views/*.html", processHTML);
	watch("assets/*", processAssets);
};

exports.processCSS = processCSS;
exports.processHTML = processHTML;
exports.processAssets = processAssets;
exports.watch = watchFiles;
