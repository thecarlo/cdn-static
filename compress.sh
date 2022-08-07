#!/usr/bin/env bash
OLDIFS=$IFS

IFS=$'\n'

for FILE in $( find dist -type f \( -iname "*.html" \) ); do
    echo -e "Compressing ${FILE}\n"
    brotli ${FILE} -o ${FILE}.br -f --best;
done

IFS=$OLDIFS
