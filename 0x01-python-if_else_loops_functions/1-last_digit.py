#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
if number[:-1] > 5:
    print("the last digit of {} is {:-1} and is greater than 5".format(number, number[:-1]))
elif number[:-1] == 0:
    print("the last digit of {} is {:-1} and is 0".format(number, number[:-1]))
elif number < 6 and number != 0:
    print("the last digit of {} is {:-1} and is less than 6 and not 0".format(number, number[:-1]))
print()
