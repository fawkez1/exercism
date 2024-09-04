import requests
import tkinter as tk
from tkinter import ttk
import asyncio
from telegram import Bot
from telegram.error import TelegramError

# CSFloat API Call to get item data
def get_item_seed(api_token, market_hash_name):
    url = f"https://api.csgofloat.com/?url=https://steamcommunity.com/market/listings/730/{market_hash_name}"
    
    headers = {
        'Authorization': f'Bearer {api_token}',
        'Content-Type': 'application/json'
    }
    
    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        data = response.json()
        if 'iteminfo' in data and 'floatid' in data['iteminfo']:
            seed = data['iteminfo']['floatid']
            return seed
        else:
            print("Seed nicht gefunden.")
            return None
    else:
        print(f"Fehler bei der API-Anfrage: {response.status_code}")
        return None

# Telegram bot notification function
async def send_telegram_message(token, chat_id, message):
    bot = Bot(token=token)
    try:
        await bot.send_message(chat_id=chat_id, text=message)
        print("Nachricht erfolgreich gesendet.")
    except TelegramError as e:
        print(f"Fehler beim Senden der Nachricht: {e}")

# Function to monitor market for items
async def monitor_market(api_token, market_hash_name, target_seeds, token, chat_id):
    while True:
        seed = get_item_seed(api_token, market_hash_name)
        if seed and str(seed) in target_seeds:
            message = f"Gefundener Seed: {seed} für {market_hash_name}\nLink: https://steamcommunity.com/market/listings/730/{market_hash_name}"
            await send_telegram_message(token, chat_id, message)
        else:
            print(f"Kein passender Seed gefunden. Aktueller Seed: {seed}")
        await asyncio.sleep(600)  # Überprüfung alle 10 Minuten

# Function to start monitoring the market based on user input from GUI
def start_monitoring(api_token, token, chat_id, weapon, skin, condition, seeds):
    # Erstelle den Market Hash Name basierend auf der Auswahl
    market_hash_name = f"{weapon}%20%7C%20{skin}%20({condition.replace(' ', '%20')})"
    
    # Liste der gesuchten Seeds aus dem Textfeld
    target_seeds = seeds.split(",")
    
    # Starte die Überwachung
    asyncio.run(monitor_market(api_token, market_hash_name, target_seeds, token, chat_id))

# GUI Setup using Tkinter
def create_gui(api_token, token, chat_id):
    root = tk.Tk()
    root.title("Skin Pattern Hunter")

    # Waffen-Dropdown
    weapon_label = tk.Label(root, text="Waffe")
    weapon_label.pack()
    weapon_var = tk.StringVar()
    weapon_dropdown = ttk.Combobox(root, textvariable=weapon_var)
    weapon_dropdown['values'] = ('AK-47', 'M4A1-S', 'AWP')  # Beispielhafte Waffen
    weapon_dropdown.pack()

    # Skin-Dropdown
    skin_label = tk.Label(root, text="Skin")
    skin_label.pack()
    skin_var = tk.StringVar()
    skin_dropdown = ttk.Combobox(root, textvariable=skin_var)
    skin_dropdown['values'] = ('Case Hardened', 'Redline', 'Asiimov')  # Beispielhafte Skins
    skin_dropdown.pack()

    # Condition-Dropdown
    condition_label = tk.Label(root, text="Zustand")
    condition_label.pack()
    condition_var = tk.StringVar()
    condition_dropdown = ttk.Combobox(root, textvariable=condition_var)
    condition_dropdown['values'] = ('Factory New', 'Minimal Wear', 'Field-Tested')  # Zustände
    condition_dropdown.pack()

    # Textfeld für Seeds
    seed_label = tk.Label(root, text="Gesuchte Seeds (kommagetrennt)")
    seed_label.pack()
    seed_entry = tk.Entry(root)
    seed_entry.pack()

    # Start-Button
    start_button = tk.Button(root, text="Überwachung starten", 
                             command=lambda: start_monitoring(api_token, token, chat_id, weapon_var.get(), skin_var.get(), condition_var.get(), seed_entry.get()))
    start_button.pack()

    root.mainloop()

# Hauptprogramm
if __name__ == "__main__":
    # Telegram Bot Token und Chat-ID
    telegram_token = '6887305319:AAElN-0z7qU3N_PFJpj2FyRyHjVMkXSh-oE'
    chat_id = '144846074'
    
    # Dein CSFloat API-Token
    csfloat_api_token = 'DEIN_CS_FLOAT_API_TOKEN'
    
    # Erstelle die GUI und starte das Programm
    create_gui(csfloat_api_token, telegram_token, chat_id)