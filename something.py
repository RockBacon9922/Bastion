averageAB = 0
while int(averageAB) == 15:
    a = 1
    AB = [a, b]
    n = 2
    while n < 100:
        AB.append((AB[n-1]+AB[n-2])/2)
        n += 1

    length = len(AB) - 4
    averageAB = (AB[length]-AB[length-1])/2
    a += 1

print(a)


