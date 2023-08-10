print("OBJECT ORIENTED PROGRAMMING INHERITANCE\n")


class Human:

    leg_count = 4
    gender = "unknown"

    def get_gender(self):
        #print("Gender is:", self.gender)
        return self.gender





class Man(Human):
    pass


class Woman(Human):

    def __init__(self, gender):
        self.gender = gender
        print("Woman\'s gender is:", self.gender)


man1 = Man()
print("Man\'s gender is: ", man1.get_gender())
man1.get_gender()

woman1 = Woman("Female")
woman1.get_gender()
