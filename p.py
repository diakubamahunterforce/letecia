from selenium import webdriver
from selenium.webdriver.common.by import By  # Importar a classe By
from selenium.webdriver.common.keys import Keys
import time

# Configuração do Selenium
driver = webdriver.Chrome()  # Ou o driver do seu navegador
driver.get("https://www.youtube.com")

# Pesquisar vídeo
search_box = driver.find_element(By.NAME, "search_query")  # Usar By.NAME
search_box.send_keys("música relaxante")
search_box.send_keys(Keys.RETURN)

# Reproduzir o primeiro vídeo
time.sleep(3)
first_video = driver.find_element(By.XPATH, '//*[@id="video-title"]')  # Usar By.XPATH
first_video.click()

# Controlar reprodução (exemplo: pausar após 10 segundos)
time.sleep(10)
video = driver.find_element(By.TAG_NAME, 'video')  # Usar By.TAG_NAME
video.send_keys(' ')  # Pausa o vídeo

# Fechar o navegador
driver.quit()