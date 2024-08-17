"""
This module contains functions used in preparing Guido's gorgeous lasagna.

The module includes functions to calculate the bake time remaining, the preparation time
based on the number of layers, and the total elapsed time.
"""

# Define the 'EXPECTED_BAKE_TIME' constant.
EXPECTED_BAKE_TIME = 40

def bake_time_remaining(elapsed_bake_time):
    """
    Calculate the bake time remaining.

    :param elapsed_bake_time: int - The time already spent baking.
    :return: int - The remaining bake time (in minutes).
    """
    return EXPECTED_BAKE_TIME - elapsed_bake_time

def preparation_time_in_minutes(number_of_layers):
    """
    Calculate the preparation time based on the number of lasagna layers.

    :param number_of_layers: int - The number of layers in the lasagna.
    :return: int - The preparation time in minutes.
    """
    return number_of_layers * 2

def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):
    """
    Calculate the total elapsed cooking time.

    :param number_of_layers: int - The number of layers in the lasagna.
    :param elapsed_bake_time: int - The time already spent baking.
    :return: int - The total time spent on preparation and baking.
    """
    return preparation_time_in_minutes(number_of_layers) + elapsed_bake_time
