n1 = 1
n2 = 2
n3 = 3
n4 = 3.14

# print(n1 + n2 - n3 * n4 % n2 - n2 ** 2)

evens = [2, 4, 6, 8]
odds = [1, 3, 5, 7]

merge = evens + odds

# shallow clone, mutate original list
a = evens
a.append(33)

print ('merge', merge)
print ('a', a)
print ('evens', evens)
