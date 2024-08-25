def square(number):
    if number > 0 and number <= 64:
        return 2**(number-1)
    else:
        raise ValueError ("square must be between 1 and 64")

"""
Feld 1 = 1
Feld 2 = 2
Feld 3 = 4
Feld 5 = 8
Feld 6 = 16
"""


def total():
    total_grains = 0
    for square in range(1,65):
        total_grains += 2**(square -1)
    return total_grains
