#!/bin/bash

# Extract the footer from index.html
FOOTER=$(sed -n '/<footer id="footer">/,/<\/footer>/p' index.html)

# Loop through all HTML files except index.html
for file in $(find . -name "*.html" | grep -v "index.html"); do
  echo "Processing $file..."
  
  # Check if the file has a footer
  if grep -q "<footer id=\"footer\">" "$file"; then
    # Replace the footer
    sed -i '' "/<footer id=\"footer\">/,/<\/footer>/c\\
$FOOTER" "$file"
    echo "Footer updated in $file"
  else
    echo "No footer found in $file"
  fi
done

echo "All footers updated!" 