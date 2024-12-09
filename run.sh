#!/bin/bash

LANG=$1
DAY=$2

if [ "$LANG" = "ts" ]; then
  echo "Lancement de la solution en TypeScript pour le jour $DAY..."
  cd ts
  npx tsc
  node dist/day$DAY.js
elif [ "$LANG" = "pascal" ]; then
  echo "Lancement de la solution en Pascal pour le jour $DAY..."
  cd pascal
  make DAY=$DAY run
else
  echo "Le langage n'a pas été reconnu, utilise 'ts' ou 'pascal'."
fi
