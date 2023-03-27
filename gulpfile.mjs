import gulp from "gulp";
import postCSS from "gulp-postcss";
import minHTML from "gulp-htmlmin";
import autoprefixer from "autoprefixer";
import presetEnv from "postcss-preset-env";
import cssnano from "cssnano";
import concat from "gulp-concat";
import cleanCss from "gulp-clean-css";
import { deleteSync } from "del";
import imagemin from "gulp-imagemin";

const { src, dest, watch } = gulp;

function cleanBuild() {
	deleteSync(["build/**"]);
}

function processHtml() {
	return src("*.html")
		.pipe(
			minHTML({
				collapseWhitespace: true,
				removeComments: true
			})
		)
		.pipe(dest("build/"));
}

function processCss() {
	return src([
		"styles/foundations/*.css",
		"styles/layout/*.css",
		"styles/components/*.css",
		"styles/util/*.css",
		"styles/overrides.css"
	])
		.pipe(
			postCSS([
				presetEnv({ stage: 0 }),
				autoprefixer(),
				cssnano({ preset: "default" })
			])
		)
		.pipe(concat("style.css"))
		.pipe(cleanCss())
		.pipe(dest("./"));
}

function processAssets() {
	return gulp
		.src("./assets/**/*")
		.pipe(imagemin())
		.pipe(gulp.dest("./build/assets"));
}

function moveCss() {
	return src("./style.css").pipe(gulp.dest("./build"));
}

const watchFiles = () => {
	watch(["styles/**/**.css"], processCss);
};

async function buildFiles() {
	cleanBuild();
	processHtml();
	moveCss();
	processAssets();
}

export { watchFiles, buildFiles };