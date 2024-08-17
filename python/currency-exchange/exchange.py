"""Functions for calculating steps in exchanging currency.

Python numbers documentation: https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex

Overview of exchanging currency when travelling: https://www.compareremit.com/money-transfer-tips/guide-to-exchanging-currency-for-overseas-travel/
"""



def exchange_money(budget: float, exchange_rate: float) -> float:
    """
    Calculate the exchanged value of the foreign currency.

    Args:
        budget (float): Amount of money you are planning to exchange.
        exchange_rate (float): Unit value of the foreign currency.

    Returns:
        float: Exchanged value of the foreign currency you can receive.
    """
    return budget / exchange_rate


def get_change(budget: float, exchanging_value: float) -> float:
    """
    Calculate the amount left of your starting currency after exchanging.

    Args:
        budget (float): Amount of money you own.
        exchange_value (float): Amount of your money you want to exchange now.

    Returns:
        float: Amount left of your starting currency after exchanging.
    """
    return budget - exchanging_value


def get_value_of_bills(denomination: int, number_of_bills: int) -> int:
    """
    Calculate the total value of the bills.

    Args:
        denomination (int): The value of a bill.
        number_of_bills (int): Total number of bills.

    Returns:
        int: Calculated value of the bills.
    """
    return denomination * number_of_bills  

    


def get_number_of_bills(amount: float, denomination: int) -> int:
    """
    Calculate the number of bills that can be obtained from the given amount.

    Args:
        amount (float): The total starting value.
        denomination (int): The value of a single bill.

    Returns:
        int: The number of bills that can be obtained from the amount.
    """
    if amount < 0:
        raise ValueError("Amount cannot be negative")
    if denomination <= 0:
        raise ValueError("Denomination must be a positive integer")
    return amount // denomination


def get_leftover_of_bills(amount, denomination):
    return amount % denomination
    """

    :param amount: float - the total starting value.
    :param denomination: int - the value of a single bill.
    :return: float - the amount that is "leftover", given the current denomination.
    """



def exchangeable_value(budget, exchange_rate, spread, denomination):
    # Calculate actual exchange rate with spread
    actual_exchange_rate = exchange_rate + (exchange_rate * (spread / 100))
    # Calculate value in foreign currency
    value_in_foreign_currency = budget / actual_exchange_rate
    # Calculate maximum bills
    max_bills = int(value_in_foreign_currency // denomination)
    # Return maximum value
    return max_bills * denomination
    

    """

    :param budget: float - the amount of your money you are planning to exchange.
    :param exchange_rate: float - the unit value of the foreign currency.
    :param spread: int - percentage that is taken as an exchange fee.
    :param denomination: int - the value of a single bill.
    :return: int - maximum value you can get.
    """

    
