print("BASIC DICTIONARY OPERATIONS\n")

python_language = {

    "source?": "open source",
    "language type": "OOP",
    "writability?": " As easy as ABC",
    "Readability": True,
    "Interpreter": "Python3",
    "uses a compiler?": False
}

print("Python Dictionary:", python_language)

print("\n GET OPERATION:")
# Get: returns the value of a specified key from the dictionary
source = python_language.get("source?")
print("Source:", source)
language = python_language.get("language type")
print("Language:", language)
Ease = python_language.get("writability?")
print("Ease:", Ease)
Readability = python_language.get("Readability")
print("Readability:", Readability)
Interpreter = python_language.get("Interpreter")
print("Interpreter:", Interpreter)


print("\n ITEMS OPERATION:")
# ITEM: returns a list as a  tuple
items = python_language.items()
print("Items:", items)

print("\n KEYS OPERATION:")
# keys: returns the list of keys in a dictionary
keys = python_language.keys()
print("Keys:", keys)

print("\n VALUES OPERATION:")
# values: returns the list of values in a dictionary
value = python_language.values()
print("Keys:", value)

print("\n POP OPERATION:")
# Pop: removes the specified key in a dictionary
print("Before Popping:", python_language)
Pop = python_language.pop("uses a compiler?")
print("After Popping:", python_language)

print("\n UPDATE OPERATION:")
# Update: adds the specified key and value in a dictionary
print("After Popping:", python_language)
update_list = python_language.update({"fun level": "very high"})
print("After Updating:", python_language)


