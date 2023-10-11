class Demo:
    demo_v = 3

    # init used for assigning values in class
    def __init__(self, value):
        self.demo_v = value

    def print_self():
        print(self)

    def demo_func():
        print('From demo class')


c1 = Demo(1)
print(c1.demo_v)