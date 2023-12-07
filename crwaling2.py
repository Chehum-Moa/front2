from selenium import webdriver
from selenium.webdriver.common.by import By

from bs4 import BeautifulSoup
import math 


from selenium import webdriver

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


url = 'https://xn--939au0g4vj8sq.net/cp/?ca=2005&loca_prt=&local_1=&local_2='
driver.get(url)



html = BeautifulSoup(driver.page_source, 'lxml')


data_name = html.find_all(class_ = 'tit')
[i.get_text() for i in data_name]

datalist = [i.text for i in data_name]  # Store the text in datalist

# Now, datalist contains the list of strings you extracted
print(datalist)

from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

url = 'https://4blog.net/list/all/reporter'
driver.get(url)

WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.CLASS_NAME, "camp-name"))
)

html = BeautifulSoup(driver.page_source, 'lxml')



data_name = html.find_all(class_ = 'camp-name')
[i.get_text() for i in data_name]

datalist.extend(i.get_text()for i in data_name)
print(datalist)

import json



# JSON 형식으로 파일에 저장
with open('data.json', 'w', encoding='utf-8') as f:
    json.dump(datalist, f, ensure_ascii=False)
