def score(x, y):
    # Calculate the distance from the origin (0, 0)
    distance_squared = x**2 + y**2
    
    # Check if the point is outside the largest circle (radius > 10)
    if distance_squared > 100:
        return 0
    
    # Check for the middle circle (radius > 5 and <= 10)
    elif distance_squared > 25:
        return 1
    
    # Check for the inner circle (radius > 1 and <= 5)
    elif distance_squared > 1:
        return 5
    
    # Check for the bullseye (radius <= 1)
    else:
        return 10