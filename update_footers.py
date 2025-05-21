#!/usr/bin/env python3
import os
import re

# Read the index.html file
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the footer section
footer_pattern = re.compile(r'<footer id="footer">.*?</footer>', re.DOTALL)
footer_match = footer_pattern.search(content)

if not footer_match:
    print("Footer not found in index.html")
    exit(1)

footer_content = footer_match.group(0)

# Find all HTML files except index.html
html_files = []
for root, dirs, files in os.walk('.'):
    for file in files:
        if file.endswith('.html') and file != 'index.html':
            html_files.append(os.path.join(root, file))

# Update the footer in each file
for file_path in html_files:
    print(f"Processing {file_path}...")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            file_content = f.read()
        
        # Check if the file has a footer
        if '<footer id="footer">' in file_content:
            # Replace the footer
            updated_content = re.sub(r'<footer id="footer">.*?</footer>', 
                                    footer_content, file_content, flags=re.DOTALL)
            
            # Write the updated content back to the file
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(updated_content)
            
            print(f"Footer updated in {file_path}")
        else:
            print(f"No footer found in {file_path}")
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

print("All footers updated!") 