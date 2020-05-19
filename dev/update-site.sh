#!/bin/zsh

rm ../main.*.css
rm ../main.*.js
cp dist/*.* ../
cp -r dist/images/* ../images
cp -r dist/images/favicons/* ../images/favicons
cp -r dist/fonts ../fonts
cd ..
git add .
git status
git commit -am "update site"
git push