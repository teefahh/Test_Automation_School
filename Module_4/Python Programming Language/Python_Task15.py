print("BASIC LIST OPERATIONS\n")

books = ["Fiction", "Horror", "Romance", "Inspirational", "Inspirational", "Inspirational", "Gothic"]
print("Books:", books)

# sorting the List
sort_list = books.sort()
print("Sorted:", books)

# Return the no of occurence of item specified
count_list = books.count("Inspirational")
print("Count:", count_list)

# Append to the list
append_list = books.append("Gospel")
print("Append:", books)

# Insert to the list
books.insert(3, "Sci-Fi")
print("Books Inserted:", books)

# Pop from the list from a specified position
books.pop(5)
print("Popped:", books)


# Remove from the list
books.remove('Inspirational')
print("Removed:", books)

# Length of a string
length_of_list = len(books)
print ("Length of list:", length_of_list)

# Copying the variable
copy_list = books.copy()
print("Copy:", copy_list)

# Reverse the order of items in a list
before_reverse = copy_list
copy_list.reverse()
print("Before Reversed:", copy_list, "\nReversed_List:", books)

# clearing the list
books.clear()
print("cleared:", books)
