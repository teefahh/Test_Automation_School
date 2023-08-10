import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import time

def main():
    s = Service(executable_path='../drivers/chromedriver')
    driver = webdriver.Chrome(service=s)
    driver.get('http://www.google.com')
    time.sleep(10)



main()





