def response(hey_bob):
    # Remove any whitespace characters like newlines, carriage returns, and tabs
    hey_bob = hey_bob.replace('\n', '').replace('\r', '').replace('\t', '').strip()
    
    # Check for silence (empty string after trimming)
    if hey_bob == '':
        return "Fine. Be that way!"
    
    # Check for yelling + question
    elif hey_bob.isupper() and hey_bob.endswith('?'):
        return "Calm down, I know what I'm doing!"
    
    # Check for yelling
    elif hey_bob.isupper():
        return "Whoa, chill out!"
    
    # Check if the sentence ends with a question mark
    elif hey_bob.endswith('?'):
        return "Sure."
    
    # Default response for anything else
    else:
        return "Whatever."