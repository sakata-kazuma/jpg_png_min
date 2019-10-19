const gulp = require("gulp");

// 画像を圧縮するプラグインの読み込み
const imagemin = require("gulp-imagemin");
const mozjpeg = require("imagemin-mozjpeg");
const pngquant = require("imagemin-pngquant");
const changed = require("gulp-changed");
const imageOptim = require('gulp-imageoptim');

// srcImgフォルダのjpg,png画像を圧縮して、distImgフォルダに保存する
gulp.task("default", function() {
  return gulp
    .src("./min-before-img/*.{png,jpg}") // srcImgフォルダ以下のpng,jpg画像を取得する
    .pipe(changed("min-after-img")) // srcImg と distImg を比較して異なるものだけ圧縮する
    .pipe(
      imagemin([
        pngquant({
          quality: [.7, .85], // 画質
          speed: 1 // スピード
        }),
        mozjpeg({
          quality: 85, // 画質
          progressive: true
        })
      ])
    )
    .pipe(imageOptim.optimize())
    .pipe(gulp.dest("./min-after-img/")); //保存
});
