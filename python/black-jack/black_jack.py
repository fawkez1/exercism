"""Functions to help play and score a game of blackjack.

How to play blackjack:    https://bicyclecards.com/how-to-play/blackjack/
"Standard" playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck
"""


def value_of_card(card):
    """
    Returns the value of a card in a standard deck.

    Args:
        card (str): The card to evaluate (e.g., 'A', '2', '3', ..., '10', 'J', 'Q', 'K')

    Returns:
        int: The value of the card
    """
    if card in ['J', 'Q', 'K']:
        return 10
    elif card == 'A':
        return 1
    else:
        # Assuming card is a string representation of a number (e.g., '2', '3', etc.)
        # We use int() to convert the string to an integer
        return int(card)
      
    """Determine the scoring value of a card.

    :param card: str - given card.
    :return: int - value of a given card.  See below for values.

    1.  'J', 'Q', or 'K' (otherwise known as "face cards") = 10
    2.  'A' (ace card) = 1
    3.  '2' - '10' = numerical value.
    """

  


def higher_card(card_one, card_two):
    """
    Determine which card has a higher value in the hand.

    Args:
        card_one (str): The first card to compare.
        card_two (str): The second card to compare.

    Returns:
        str or tuple: The card with the higher value, or a tuple of both cards if they are of equal value.
    """
    value_one = value_of_card(card_one)
    value_two = value_of_card(card_two)

    if value_one > value_two:
        return card_one
    elif value_one < value_two:
        return card_two
    else:
        return card_one, card_two
    


def value_of_ace(card_one, card_two):
    """
    Calculate the most advantageous value for the ace card.

    :param card_one, card_two: str - cards dealt. See below for values.
    :return: int - either 1 or 11 value of the upcoming ace card.

    Card values:
    - 'J', 'Q', or 'K' (face cards) = 10
    - 'A' (ace card) = 11 (if already in hand)
    - '2' - '10' = numerical value
    """
    # Define a helper function to calculate the value of a card
    def value_of_card(card):
        if card in ['J', 'Q', 'K']:
            return 10
        elif card == 'A':
            return 11
        else:
            return int(card)

    # Calculate the total value of the cards in hand
    total_value = value_of_card(card_one) + value_of_card(card_two)

    # If an ace is already in hand, return 1
    if card_one == 'A' or card_two == 'A':
        return 1

    # Return 11 if the ace can be added without exceeding 21, otherwise return 1
    return 11 if total_value <= 10 else 1


def is_blackjack(card_one, card_two):
    """Determine if the hand is a 'natural' or 'blackjack'.

    :param card_one, card_two: str - card dealt. See below for values.
    :return: bool - is the hand is a blackjack (two cards worth 21).

    1.  'J', 'Q', or 'K' (otherwise known as "face cards") = 10
    2.  'A' (ace card) = 11 (if already in hand)
    3.  '2' - '10' = numerical value.
    """

    if (card_one == 'A') and value_of_card(card_two) == 10:
        return True
    elif (card_two == 'A') and value_of_card(card_one) == 10:
        return True
    else:
        return False


def can_split_pairs(card_one, card_two):
    """Determine if a player can split their hand into two hands.

    :param card_one, card_two: str - cards dealt.
    :return: bool - can the hand be split into two pairs? (i.e. cards are of the same value).
    """
    # Calculate the values of the cards
    card_one_value = value_of_card(card_one)
    card_two_value = value_of_card(card_two)

    #scenario for cards 1 - K
    if card_one_value == card_two_value:
        return True
    elif card_one or card_two == 'A':
        return False
    elif card_one and card_two == 'A':
        return True


def can_double_down(card_one, card_two):
    """Determine if a blackjack player can place a double down bet.

    :param card_one, card_two: str - first and second cards in hand.
    :return: bool - can the hand can be doubled down? (i.e. totals 9, 10 or 11 points).
    """

    # Calculate the values of the cards
    card_one_value = value_of_card(card_one)
    card_two_value = value_of_card(card_two)
    total_value = card_one_value + card_two_value

     # Check if the total value is 9, 10, or 11
    return total_value in [9, 10, 11]
    
