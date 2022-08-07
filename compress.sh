#!/usr/bin/env bash
OLDIFS=$IFS

IFS=$'\n'

for FILE in $( find out -type f \( -iname "*.js" -o -iname "*.css" -o -iname "*.svg" -o -iname "*.html" -o \) ); do
    echo -e "Compressing ${FILE}\n"
    brotli ${FILE} -o ${FILE}.br -f --best;
    gzip -c ${FILE} > ${FILE}.gz -f --best;
done

IFS=$OLDIFS
