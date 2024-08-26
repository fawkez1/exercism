"""Functions to prevent a nuclear meltdown."""


def is_criticality_balanced(temperature, neutrons_emitted):
    return (temperature < 800 and 
            neutrons_emitted > 500 and 
            temperature * neutrons_emitted < 500000)

"""Verify criticality is balanced.

    :param temperature: int or float - temperature value in kelvin.
    :param neutrons_emitted: int or float - number of neutrons emitted per second.
    :return: bool - is criticality balanced?

    A reactor is said to be critical if it satisfies the following conditions:
    - The temperature is less than 800 K.
    - The number of neutrons emitted per second is greater than 500.
    - The product of temperature and neutrons emitted per second is less than 500000.
    """

pass

def reactor_efficiency(voltage, current, theoretical_max_power):
    # Berechnung der erzeugten Leistung
    generated_power = voltage * current
    
    # Berechnung der Effizienz in Prozent
    efficiency = (generated_power / theoretical_max_power) * 100

    # Bestimmung der Effizienzklasse
    if efficiency >= 80:
        return "green"
    elif efficiency >= 60:
        return "orange"
    elif efficiency >= 30:
        return "red"
    else:
        return "black"
    


def fail_safe(temperature, neutrons_produced_per_second, threshold):
    power = temperature * neutrons_produced_per_second
    
    if power < 0.9 * threshold:
        return 'LOW'
    elif 0.9 * threshold <= power <= 1.1 * threshold:
        return 'NORMAL'
    
    """Assess and return status code for the reactor.

    :param temperature: int or float - value of the temperature in kelvin.
    :param neutrons_produced_per_second: int or float - neutron flux.
    :param threshold: int or float - threshold for category.
    :return: str - one of ('LOW', 'NORMAL', 'DANGER').

    1. 'LOW' -> `temperature * neutrons per second` < 90% of `threshold`
    2. 'NORMAL' -> `temperature * neutrons per second` +/- 10% of `threshold`
    3. 'DANGER' -> `temperature * neutrons per second` is not in the above-stated ranges
    """

    pass
