import os
import requests
from pathlib import Path

def download_logo(url, filename, save_dir):
    response = requests.get(url)
    if response.status_code == 200:
        file_path = os.path.join(save_dir, f"{filename}.svg")
        with open(file_path, 'wb') as f:
            f.write(response.content)
        print(f"Successfully downloaded {filename} logo")
    else:
        print(f"Failed to download {filename} logo")

def create_directory(directory):
    Path(directory).mkdir(parents=True, exist_ok=True)

def main():
    # Set the directory where logos will be saved
    SAVE_DIR = "tech_logos"
    create_directory(SAVE_DIR)

    # Dictionary of technology names and their Simple Icons slugs
    # Note: Some technologies might use different names in Simple Icons
    tech_logos = {
        "bigquery": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/googlecloud.svg",
        "google-cloud-functions": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/googlecloud.svg",
        "python": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/python.svg",
        "airflow": "https://raw.githubusercontent.com/apache/airflow/main/airflow/www/static/pin_100.png",
        "dagster": "https://raw.githubusercontent.com/dagster-io/dagster/master/assets/dagster-logo.svg",
        "apache-spark": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/apachespark.svg",
        "postgres": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/postgresql.svg",
        "snowflake": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/snowflake.svg",
        "pubsub": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/googlecloud.svg",
        "fastapi": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/fastapi.svg",
        "reactjs": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/react.svg",
        "nextjs": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nextdotjs.svg",
        "nuxtjs": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nuxtdotjs.svg",
        "gcp": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/googlecloud.svg",
        "aws": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/amazonaws.svg",
        "terraform": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/terraform.svg",
        "docker": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/docker.svg",
        "kubernetes": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/kubernetes.svg",
        "helm": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/helm.svg"
    }

    # Download each logo
    for name, url in tech_logos.items():
        download_logo(url, name, SAVE_DIR)

if __name__ == "__main__":
    main()