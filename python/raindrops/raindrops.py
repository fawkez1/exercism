def convert(number):
    sound = ''
    
    if number == 0:
        raise ValueError('Cannot divide by 0')
    
    if number % 3 == 0:
        sound += 'Pling'
        
    if number % 5 == 0:
        sound += 'Plang'
        
    if number % 7 == 0:
        sound += 'Plong'
        
    if sound == '':
        return str(number)
    else:
        return sound