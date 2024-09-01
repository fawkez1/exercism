def steps(number):
    def calculations(number):
        # If the number is even
        if number % 2 == 0:
            return number // 2  # Use integer division to ensure the result is an integer
        # If the number is odd
        else:
            return number * 3 + 1

    count = 0  # Initialize step count
    while number != 1:  # Continue until the number becomes 1
        number = calculations(number)
        count += 1  # Increment the step count

    return count  # Return the number of steps it took to reach 1

# Example usage:
print(steps(12))  # Should return 9
print(steps(19))  # Should return 20