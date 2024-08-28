def is_valid_triangle(sides):
    a, b, c = sorted(sides)
    return a > 0 and a + b > c

def equilateral(sides):
    if not is_valid_triangle(sides):
        return False
    a, b, c = sides
    return a == b == c

def isosceles(sides):
    if not is_valid_triangle(sides):
        return False
    a, b, c = sides
    return a == b or b == c or a == c

def scalene(sides):
    if not is_valid_triangle(sides):
        return False
    a, b, c = sides
    return a != b and b != c and a != c