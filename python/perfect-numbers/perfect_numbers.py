def classify(number):
    """Classify a number as perfect, abundant, or deficient based on its divisors.

    :param number: int a positive integer
    :return: str the classification of the input integer
    """
    if number <= 0:
        raise ValueError("Classification is only possible for positive integers.")
    
    divisors_added = 0
    
    # Loop through all numbers less than the input number
    for i in range(1, number):
        if number % i == 0:
            divisors_added += i
    
    # Classify the number
    if divisors_added == number:
        return 'perfect'
    elif divisors_added > number:
        return 'abundant'
    else:
        return 'deficient'