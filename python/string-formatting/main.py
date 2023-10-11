str = 'world'
num = 12
str2 = 'Py'

# print('Hello %s! This is %s, I\'m %d' % (str, str2, num))

list = [1, 2, 3, 4]
# print('Hello list,', list)

# %s: string
# %d: number
# %f: float
# %<number of digits>f: amount of digits after .
# %x/%X: integer in hex (lowercase / uppercase)

# String operation

str3 = 'hello world'
print('len', len(str))
print('index', str.index('d'))
print('count', str3.count('l'))
print('[splice:]', str3[1:3])  # el

# 2 6 -> take from index 1 to 7 -> skip 4 '1[2]345[6]7'
print('[splice::]', '1234567'[1:6:4])
print('reverse', str3[::-1])
print('startsWith', str3.startswith('hesll'))
