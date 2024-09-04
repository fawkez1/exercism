"""Functions for creating, transforming, and adding prefixes to strings."""


def add_prefix_un(word):
    """Take the given word and add the 'un' prefix.

    :param word: str - containing the root word.
    :return: str - of root word prepended with 'un'.
    """

    return 'un' + word


def make_word_groups(vocab_words):
    """Transform a list containing a prefix and words into a string with the prefix followed by the words with prefix prepended.

    :param vocab_words: list - of vocabulary words with prefix in first index.
    :return: str - of prefix followed by vocabulary words with
            prefix applied.

    This function takes a `vocab_words` list and returns a string
    with the prefix and the words with prefix applied, separated
     by ' :: '.

    For example: list('en', 'close', 'joy', 'lighten'),
    produces the following string: 'en :: enclose :: enjoy :: enlighten'.
    """
    # Nimm das erste Wort als Präfix
    prefix = vocab_words[0]
    
    # Kombiniere das Präfix mit den restlichen Wörtern
    combined_words = [prefix + word for word in vocab_words[1:]]
    
    # Verbinde das Präfix und die kombinierten Wörter mit ' :: '
    result = ' :: '.join([prefix] + combined_words)
    
    return result


def remove_suffix_ness(word):
    """Remove the suffix 'ness' from the word while keeping spelling in mind.

    :param word: str - The word to remove the suffix from.
    :return: str - The word with the suffix removed & spelling adjusted.

    For example: "heaviness" becomes "heavy", but "sadness" becomes "sad".
    """
    # Entferne den Suffix 'ness'
    base_word = word[:-4]  # Nimmt das Wort ohne die letzten 4 Zeichen ('ness')

    # Überprüfe, ob das Wort mit einem 'i' endet und ersetze es durch 'y'
    if base_word.endswith('i'):
        return base_word[:-1] + 'y'
    else:
        return base_word


def adjective_to_verb(sentence, index):
    """Change the adjective within the sentence to a verb.

    :param sentence: str - that uses the word in sentence.
    :param index: int - index of the word to remove and transform.
    :return: str - word that changes the extracted adjective to a verb.

    For example, ("It got dark as the sun set.", 2) becomes "darken".
    """
    
    
    
    # Split the sentence into a list of words
    sentence_words = sentence.split()

# Extract the word at the specified index
    extracted_word = sentence_words[index]

# Remove unnecessary punctuation signs from the extracted word
    extracted_word = extracted_word.strip('., ')

# Append 'en' to the end of the extracted word and return the result
    return extracted_word + 'en'
    
