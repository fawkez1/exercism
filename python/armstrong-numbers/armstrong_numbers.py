def is_armstrong_number(number):
    # implement function that splits number in digits (i.e. 153 = 1, 5, 3)

    # implement function that counts digits of number (i.e. 153 = 3)

    # implement function that takes first digit to the power of total digits and combines the value. then the function should compare whether the value is the same as the input number. if yes, return true.
    # ( i.e. 1^3 + 5ˆ3 + 3ˆ3 = 153. should return true)

     # Split number into its digits
    digits = [int(digit) for digit in str(number)]
    
    # Count the number of digits
    num_digits = len(digits)
    
    # Calculate the sum of each digit raised to the power of the total number of digits
    armstrong_sum = sum(digit ** num_digits for digit in digits)
    
    # Compare the calculated sum with the original number
    return armstrong_sum == number