def steps(number):
    if number < 1:
        raise ValueError('Only positive integers are allowed')
    def calculations(number):
        # If the number is even
        if number % 2 == 0:
            return number // 2  # Use integer division to ensure the result is an integer
        # If the number is odd
        else:
            return number * 3 + 1

    count = 0  # Initialize step count
    max_iterations = 100000  # Set a limit for the maximum number of iterations to prevent infinite loops

    while number != 1:
        number = calculations(number)
        count += 1
        if count > max_iterations:
            raise RuntimeError("Exceeded maximum number of iterations. Possible infinite loop detected.")
    
    return count  # Return the number of steps it took to reach 1

# Example usage:
print(steps(12))  # Should return 9
print(steps(19))  # Should return 20