#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
n1 = "and is greater than 5"
n2 = "and is 0"
n3 = "and is less than 6 and not 0"
if number < 0:
    last = number % -10
else:
    last = number % 10
if last > 5:
    print("Last digit of {} is {} ".format(number, last) + n1)
elif last == 0:
    print("Last digit of {} is {} ".format(number, last) + n2)
else:
    print("Last digit of {} is {} ".format(number, last) + n3)
