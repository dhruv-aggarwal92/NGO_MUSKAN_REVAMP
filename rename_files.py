import os

def rename_files_in_dir(directory):
    for root, dirs, files in os.walk(directory, topdown=False):
        # Rename files
        for name in files:
            if " " in name:
                old_path = os.path.join(root, name)
                new_name = name.replace(" ", "")
                new_path = os.path.join(root, new_name)
                print(f"Renaming file: '{old_path}' -> '{new_path}'")
                try:
                    # If target exists, we might need to handle it. For now, just rename.
                    if os.path.exists(new_path):
                        print(f"Warning: {new_path} already exists. Overwriting.")
                        os.remove(new_path)
                    os.rename(old_path, new_path)
                except Exception as e:
                    print(f"Error renaming file {name}: {e}")

        # Rename directories
        for name in dirs:
            if " " in name:
                old_path = os.path.join(root, name)
                new_name = name.replace(" ", "")
                new_path = os.path.join(root, new_name)
                print(f"Renaming folder: '{old_path}' -> '{new_path}'")
                try:
                    if os.path.exists(new_path):
                        print(f"Warning: {new_path} already exists. Merging is not supported by this simple script.")
                    else:
                        os.rename(old_path, new_path)
                except Exception as e:
                    print(f"Error renaming folder {name}: {e}")

if __name__ == "__main__":
    # Target the images directory primarily as it contains the files with spaces
    base_dir = os.path.dirname(os.path.abspath(__file__))
    images_dir = os.path.join(base_dir, "images")
    
    if os.path.exists(images_dir):
        print(f"Starting rename process in {images_dir}...")
        rename_files_in_dir(images_dir)
        print("Rename process complete.")
    else:
        print(f"Directory not found: {images_dir}")
