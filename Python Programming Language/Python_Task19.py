print("OBJECT ORIENTED PROGRAMMING 3\n")


class Human:
    leg_count = 4
    can_walk = True

    def get_description(self, description):
        return description

    def get_leg_count(self, leg_count):
        self.leg_count = leg_count


black_man = Human()
print(black_man.get_description("This is human"))
print(black_man.leg_count)

