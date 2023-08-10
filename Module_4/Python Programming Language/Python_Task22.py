print("OBJECT ORIENTED PROGRAMMING POLYMORPHISM\n")


class Human:

    leg_count = 4
    gender = "unknown"

    def get_gender(self):
        # print("Gender is:", self.gender)
        return self.gender


class Man(Human):
    def get_man_gender(self, gender):
        self.gender = gender
        print("Gender is:", self.gender)
        # return self.gender


class Woman(Human):

    def __init__(self, gender):
        self.gender = gender
        print("Woman\'s gender is:", self.gender)


man1 = Man()
man1.get_man_gender("Man")

woman1 = Woman("Woman")
woman1.get_gender()
