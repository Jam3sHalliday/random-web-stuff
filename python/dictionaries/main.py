dict = {
    'name': 'Python',
    'age': 32,
    'isGood': True
}

vals = dict.items()

# print(object['age'])

for key in dict:
    print(key, dict[key])

del dict['name']

# print(dict)