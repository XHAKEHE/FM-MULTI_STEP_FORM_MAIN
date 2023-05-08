const { src, dest, series, parallel, watch } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const cssnano = require('gulp-cssnano')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')
const clean = require('gulp-clean')
const kit = require('gulp-kit')

const sourcemaps = require('gulp-sourcemaps')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

const paths = {
	html: './html/**/*.kit',
	sass: './src/sass/**/*.scss',
	js: './src/js/**/*.js',
	img: './src/img/*',
	dist: './dist',
	sassDest: './dist/css',
	jsDest: './dist/js',
	imgDest: './dist/img',
}

function sassCompiler(done) {
	src(paths.sass)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({ cascade: false }))
		.pipe(cssnano())
		.pipe(rename({ suffix: '.mini' }))
		.pipe(sourcemaps.write())
		.pipe(dest(paths.sassDest))
	done()
}

function javaScriptBabel(done) {
	src(paths.js)
		.pipe(sourcemaps.init())

		.pipe(
			babel({
				presets: ['@babel/env'],
			})
		)
		.pipe(uglify())
		.pipe(rename({ suffix: '.mini' }))
		.pipe(sourcemaps.write())
		.pipe(dest(paths.jsDest))
	done()
}

function manageKit(done) {
	src(paths.html).pipe(kit()).pipe(dest('./'))
	done()
}
function minifyImage(done) {
	src(paths.img)
		.pipe(imagemin())
		// .pipe(rename({ suffix: '.mini' }))
		.pipe(dest(paths.imgDest))
	done()
}

function distClean(done) {
	src(paths.dist, { read: false }).pipe(clean()).pipe(dest(paths.imgDest))
	done()
}

function startBrowserSync(done) {
	browserSync.init({
		server: {
			baseDir: './',
		},
	})
	done()
}

function watchForChanges(done) {
	watch('./*.html').on('change', reload)
	watch([paths.html, paths.sass, paths.js], parallel(manageKit, sassCompiler, javaScriptBabel)).on('change', reload)
	watch(paths.img, minifyImage).on('change', reload)
	done()
}

const mainFunctions = parallel(manageKit, sassCompiler, javaScriptBabel, minifyImage)
exports.default = series(mainFunctions, startBrowserSync, watchForChanges)
exports.distClean = distClean
