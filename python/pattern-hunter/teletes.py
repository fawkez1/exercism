import asyncio
from telegram import Bot
from telegram.error import TelegramError

async def send_telegram_message(token, chat_id, message):
    # Erstelle eine Bot-Instanz
    bot = Bot(token=token)
    
    try:
        # Sende die Nachricht (mit await)
        await bot.send_message(chat_id=chat_id, text=message)
        print("Nachricht erfolgreich gesendet.")
    except TelegramError as e:
        # Fange mögliche Fehler ab und zeige sie an
        print(f"Fehler beim Senden der Nachricht: {e}")

if __name__ == "__main__":
    # Dein Telegram Bot Token vom BotFather
    token = '6887305319:AAElN-0z7qU3N_PFJpj2FyRyHjVMkXSh-oE'
    
    # Deine persönliche Chat-ID
    chat_id = '144846074'
    
    # Test-Nachricht
    message = "Hallo, dies ist ein Test vom Telegram-Bot!"
    
    # Nachricht asynchron senden
    asyncio.run(send_telegram_message(token, chat_id, message))