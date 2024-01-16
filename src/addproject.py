import os
import json

# Get a list of all the image files in the img directory
image_files = os.listdir('../public/img')

# Initialize an empty list to store the projects
projects = []

# Loop through each image file
for i, image_file in enumerate(image_files, start=1):
    # Get the filename without the extension
    filename_without_extension = os.path.splitext(image_file)[0]

    # Create a new project
    project = {
        "id": i,
        "subject": filename_without_extension,
        "name": f"Project {filename_without_extension}",
        "image": f"img/{image_file}",
        "description": f"Description of Project {filename_without_extension}",
        "pdf": f"img/{filename_without_extension}.pdf"
    }

    # Add the project to the list of projects
    projects.append(project)

# Write the projects to the projects.json file
with open('projects.json', 'w') as f:
    json.dump(projects, f, indent=2)