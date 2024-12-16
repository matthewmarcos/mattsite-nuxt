import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def get_favicon_url(url):
  """Extract favicon URL from a website."""
  try:
    # Make request to the website
    response = requests.get(url, timeout=10)
    response.raise_for_status()

    soup = BeautifulSoup(response.text, 'html.parser')

    # Check for favicon in different link tags
    favicon_links = soup.find_all('link', rel=lambda r: r and ('icon' in r.lower() or 'shortcut' in r.lower()))

    if favicon_links:
      # Get the first favicon link
      favicon_url = favicon_links[0].get('href', '')
      if favicon_url:
        return urljoin(url, favicon_url)

    # If no favicon found in links, try the default location
    default_favicon = urljoin(url, '/favicon.ico')
    response = requests.head(default_favicon)
    if response.status_code == 200:
      return default_favicon

  except Exception as e:
    logger.error(f"Error getting favicon for {url}: {str(e)}")

  return None

def download_favicon(url, output_folder):
  """Download favicon from a URL to the specified folder."""
  try:
    # Create output folder if it doesn't exist
    os.makedirs(output_folder, exist_ok=True)

    # Get favicon URL
    favicon_url = get_favicon_url(url)
    if not favicon_url:
      logger.warning(f"No favicon found for {url}")
      return False

    # Download the favicon
    response = requests.get(favicon_url, timeout=10)
    response.raise_for_status()

    # Generate filename from domain
    domain = urlparse(url).netloc
    # Remove www. and .com from domain name
    clean_domain = domain.replace('www.', '').replace('.com', '')
    filename = f"{clean_domain.replace('.', '_')}_favicon.ico"
    filepath = os.path.join(output_folder, filename)

    # Save the favicon
    with open(filepath, 'wb') as f:
      f.write(response.content)

    logger.info(f"Successfully downloaded favicon for {url} to {filepath}")
    return True

  except Exception as e:
    logger.error(f"Error downloading favicon for {url}: {str(e)}")
    return False

def main():
  # List of websites
  websites = [
    # "https://www.freelancer.com/",
    # "https://thinkingmachin.es/",
    # "https://www.ridezoomo.com/ca/home",
    # "https://uplb.edu.ph/",
    # "https://www.amihan.net/",
    # "https://www.getopenpay.com/",
    "https://www.stationfive.com/"
  ]

  # Output folder for favicons
  output_folder = "assets/job_logos"

  # Download favicons for each website
  for website in websites:
    download_favicon(website, output_folder)

if __name__ == "__main__":
  main()
