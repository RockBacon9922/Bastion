strand = input()
output = []

for base in strand:
    if base == "A":
        output.append("T")
    if base == "G":
        output.append("C")
    if base == "C":
        output.append("G")
    if base == "T" or "U":
        output.append("A")

print(str(output))

