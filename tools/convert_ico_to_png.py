import os
from PIL import Image
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def convert_ico_to_png(directory):
    """Convert all .ico files in directory to .png and delete original .ico files."""
    try:
        # Get all .ico files in directory
        ico_files = [f for f in os.listdir(directory) if f.endswith('.ico')]

        if not ico_files:
            logger.info(f"No .ico files found in {directory}")
            return

        for ico_file in ico_files:
            try:
                ico_path = os.path.join(directory, ico_file)
                # Create png filename by replacing .ico extension
                png_file = ico_file.rsplit('.', 1)[0] + '.png'
                png_path = os.path.join(directory, png_file)

                # Open and convert ico file
                with Image.open(ico_path) as img:
                    # Get the largest size available in the ICO file
                    if hasattr(img, 'ico'):
                        biggest_size = max(img.ico.sizes())
                        img.size = biggest_size

                    # Convert to RGBA if needed
                    if img.mode != 'RGBA':
                        img = img.convert('RGBA')
                    # Save as PNG
                    img.save(png_path, 'PNG')

                # Delete original ico file
                os.remove(ico_path)
                logger.info(f"Converted {ico_file} to {png_file}")

            except Exception as e:
                logger.error(f"Error converting {ico_file}: {str(e)}")
                continue

    except Exception as e:
        logger.error(f"Error processing directory {directory}: {str(e)}")

def main():
    directory = "assets/job_logos"
    # Create directory if it doesn't exist
    if not os.path.exists(directory):
        os.makedirs(directory)
        logger.info(f"Created directory {directory}")
    convert_ico_to_png(directory)

if __name__ == "__main__":
    main()
