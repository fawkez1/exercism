def translate(text):
    """
    Translate a text into Pig Latin.
    
    :param text: The text to translate
    :return: The translated text
    """
    vowels = 'aeiou'
    special_starts = ['xr', 'yt']

    def translate_word(word):
        """
        Translate a single word into Pig Latin.
        
        :param word: The word to translate
        :return: The translated word
        """
        # Rule 1: Word starts with a vowel or "xr"/"yt"
        if word[0] in vowels or word[:2] in special_starts:
            return word + 'ay'

        # Rule 3: Word starts with zero or more consonants followed by "qu"
        for i in range(len(word)):
            if word[i:i+2] == 'qu':
                return word[i+2:] + word[:i+2] + 'ay'

        # Rule 2: Word starts with one or more consonants
        for i, char in enumerate(word):
            if char in vowels:
                return word[i:] + word[:i] + 'ay'
        
        # Rule 4: Word starts with one or more consonants followed by "y"
        for i, char in enumerate(word):
            if char == 'y' and i != 0:
                return word[i:] + word[:i] + 'ay'

        # If no rules apply, return the word unchanged (this should not happen)
        return word

    # Split text into words, translate each word, and join them back together
    return ' '.join(translate_word(word) for word in text.split())