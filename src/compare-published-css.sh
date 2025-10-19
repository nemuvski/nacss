#!/bin/sh

#
# compare-published-css.sh
#
# Compare the local built CSS with the currently published version on unpkg.
#
# Usage:
#   ./compare-published-css.sh
#
# Exit code:
#   0 - No differences (local file matches published)
#   1 - Differences detected

set -euo pipefail

LOCAL_FILE="dist/nacss.min.css"
REMOTE_URL="https://unpkg.com/nacss@latest/dist/nacss.min.css" # latest version URL

echo "🏗️  Building local CSS file ..."
npm run build

TEMP_DIR=".temp"
mkdir -p "$TEMP_DIR"
TIMESTAMP=$(date +"%Y%m%d-%H%M%S")
TEMP_FILE="${TEMP_DIR}/${TIMESTAMP}.min.css"

echo "🔍 Checking diff between local ${LOCAL_FILE} and ${REMOTE_URL} ..."

curl -sSL "$REMOTE_URL" -o "$TEMP_FILE"

# Format both files using Biome before comparing
npx biome format --write "$TEMP_FILE" "$LOCAL_FILE"

if diff -u "$TEMP_FILE" "$LOCAL_FILE"; then
  echo "✅ No differences found."
else
  echo "❌ Differences detected between local and published version."
  rm -f "$TEMP_FILE"
  exit 1
fi

rm -f "$TEMP_FILE"
