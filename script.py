from selenium import webdriver 
from dotenv import load_dotenv
import os 

BASEDIR = os.path.abspath(os.path.dirname(__file__))
load_dotenv(os.path.join(BASEDIR, '.env'))

pwd = os.getenv("PWDI")
login = os.getenv("LOGIN")

browser = webdriver.Chrome(executable_path='/home/nopc/Downloads/chromedriver_linux64/chromedriver')

browser.get('https://github.com/decipher07/Grity-Me')

elem = browser.find_element_by_link_text('Sign in')

elem.click()

# <input type="text" name="login" id="login_field" class="form-control input-block" tabindex="1" autocapitalize="off" autocorrect="off" autocomplete="username" autofocus="autofocus">
# <input type="password" name="password" id="password" class="form-control form-control input-block" tabindex="2" autocomplete="current-password">
# <input type="submit" name="commit" value="Sign in" tabindex="3" class="btn btn-primary btn-block" data-disable-with="Signing in…">
loginCred = browser.find_element_by_id('login_field')
passCred = browser.find_element_by_id('password')

loginCred.send_keys(login)
passCred.send_keys(pwd)

signin = browser.find_element_by_link_text('Sign in')

signin.click()