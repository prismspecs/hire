#!/usr/bin/env bash
# Generate a PDF version of the hire portfolio.
# Output: grayson-earle-portfolio.pdf in the repository root.
#
# Requirements: ruby/bundler, google-chrome

set -e

export PATH="/home/grayson/.local/share/gem/ruby/3.2.0/bin:$PATH"

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"
OUT="$SCRIPT_DIR/grayson-earle-portfolio.pdf"
PORT=4447

# Clean up any leftover server on this port
OLD_PID=$(lsof -ti tcp:$PORT 2>/dev/null) && [ -n "$OLD_PID" ] && kill "$OLD_PID" 2>/dev/null || true

echo "Building site..."
bundle exec jekyll build --quiet

echo "Starting local server on port $PORT..."
ruby -run -e httpd _site -p $PORT > /dev/null 2>&1 &
SERVER_PID=$!

# Wait until the server responds
for i in $(seq 1 15); do
    if curl -sf "http://localhost:$PORT/pdf.html" > /dev/null 2>&1; then
        break
    fi
    sleep 1
done

echo "Generating PDF..."
google-chrome \
    --headless \
    --no-sandbox \
    --disable-gpu \
    --disable-software-rasterizer \
    --run-all-compositor-stages-before-draw \
    --print-to-pdf-no-header \
    --paper-width=8.27 \
    --paper-height=11.69 \
    --print-to-pdf="$OUT" \
    "http://localhost:$PORT/pdf.html"

kill $SERVER_PID 2>/dev/null || true

echo ""
echo "Done: $OUT"
