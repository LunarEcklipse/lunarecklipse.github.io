# To run this script on your own, install python 3.12 (you can get it from the microsoft store) and then open the command prompt ('cmd')
# While this is open, type "python3.12 -m pip install pillow" and press enter
# Once that is done, place this script in the directory with the images you want to resize and then click on it to run it.
from PIL import Image
import os, sys

# Get all images from the directory this script is in with the extension .jpeg, .jpg, or .png
img_dir = os.path.dirname(os.path.abspath(__file__))
img_files = [f for f in os.listdir(img_dir) if f.endswith(('.jpeg', '.jpg', '.png'))]

new_img_path = os.path.join(img_dir, 'resized_images')
thumbnail_256_path = os.path.join(img_dir, 'thumbnails_256')
thumbnail_512_path = os.path.join(img_dir, 'thumbnails_512')

if not os.path.exists(new_img_path):
    os.makedirs(new_img_path)
if not os.path.exists(thumbnail_256_path):
    os.makedirs(thumbnail_256_path)
if not os.path.exists(thumbnail_512_path):
    os.makedirs(thumbnail_512_path)

max_thumbnail_size_512 = (512, 512)
max_thumbnail_size_256 = (256, 256)

# Loop through all images and shrink them to 3000px on their longest side
for img_file in img_files:
    img_path = os.path.join(img_dir, img_file)
    img = Image.open(img_path)
    width, height = img.size
    if width > height:
        new_width = 3000
        new_height = int((new_width / width) * height)
    else:
        new_height = 3000
        new_width = int((new_height / height) * width)
    img = img.resize((new_width, new_height))
    img.save(os.path.join(new_img_path, img_file))
    # Make the thumbnails
    img.thumbnail(max_thumbnail_size_512)
    img.save(os.path.join(thumbnail_512_path, img_file))
    img.thumbnail(max_thumbnail_size_256)
    img.save(os.path.join(thumbnail_256_path, img_file))