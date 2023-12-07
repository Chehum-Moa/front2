
from selenium import webdriver
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
import math


# Set ChromeDriver executable path
chrome_driver_path = 'C:/Users/gpdbs/Desktop/chromedriver-win64/chromedriver.exe'

# Create ChromeOptions object
chrome_options = webdriver.ChromeOptions()

# Add any desired options to the ChromeOptions object
# For example, you can add options to run Chrome in headless mode:
# chrome_options.add_argument('--headless')

# Specify the path to the ChromeDriver executable within options
chrome_options.add_argument(f'--webdriver-path={chrome_driver_path}')

# Initialize the WebDriver with the specified options
driver = webdriver.Chrome(options=chrome_options)

# Now you can use the 'driver' object to interact with the web page.

url = 'https://4blog.net/list/all/reporter'
driver.get(url)

data_name = html.find_all(class_ = 'camp-name')
[i.get_text() for i in data_name]