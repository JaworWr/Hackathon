import numpy as np
import random
import json
import time


min_date = 1491004800

def normal_price(price, sigma, min_p=0.01):
    return max(min_p, round(random.gauss(price, sigma), 2))

def MarketProduct():
    q = random.randint(1, 5)
    cont_q = round(random.random() * 5 + 0.5, 1)
    eggs_q = random.randint(5, 10)

    return random.choice([("Milk", 0.80 * q, q, False, "Food"), ("Eggs", 0.10 * eggs_q, eggs_q, False, "Food"), ("Tea", 2.50 * q, q, False, "Food"),\
           ("Apples", 1 * cont_q, cont_q, True, "Food"), ("Bread", 0.5 * q, q, False, "Food"), ("Potatoes", 0.3 * cont_q, cont_q, True, "Food"),\
           ("Tomatoes", 0.7 * cont_q, cont_q, True, "Food"), ("Bananas", 0.5 * cont_q, cont_q, True, "Food"), ("Oranges", 1.1 * cont_q, cont_q, True, "Food"),\
           ("Mineral Water 1L", 0.80 * q, q, False, "Food"), ("Pepsi 1L", 1 * q, q, False, "Food"),  ("Fanta 0.5L", 0.6 * q, q, False, "Food"),\
           ("Newspaper", 0.5, 1, False, "Entertainment"), ("Vodka", 8.00 * q, q, False, "Food"), ("Cheese", 2.00 * q, q, False, "Food"), \
           ("Beer", 2.00 * q, q, False, "Food"), ("Champagne", 12.00 * q, q, False, "Food"), ("CD", 10.00 * q, q, False, "Entertainment"),
           ("Movie", 15.00 * q, q, False, "Entertainment"), ("Carrots", 0.4 * cont_q, cont_q, True, "Food"), ("Juice 1L", 1 * q, q, False, "Food"),\
           ("Chocolate", 1.3 * q, q, False, "Food"), ("Butter", 2.3 * q, q, False, "Food"), ("Flour", 1.7 * q, q, False, "Food"),\
           ("Sugar", 2.0 * q, q, False, "Food"), ("Salt", 1.8 * q, q, False, "Food"), ("Ketchup", 3.8 * q, q, False, "Food"), \
           ("Grapes", 1.2 * cont_q, cont_q, True, "Food"), ("Cucumbers", 0.4 * cont_q, cont_q, True, "Food"), ("Avocados", 1.4 * cont_q, cont_q, True, "Food")])

def BakeryProduct():
    q = random.randint(1, 3)
    return random.choice([("Bread", 0.5 * q, q, False, "Food"), ("Black Bread", 0.7 * q, q, False, "Food"), ("Muffin", 0.3 * q, q, False, "Food"),\
           ("Bread roll", 0.2 * q, q, False, "Food"), ("Ciabatta", 0.35 * q, q, False, "Food"), ("Corn Bread", 0.7 * q, q, False, "Food"),\
           ("Croissant", 0.5 * q, q, False, "Food"), ("Donut", 0.5 * q, q, False, "Food"), ("Cookies", 0.1 * q, q, False, "Food")])

def Cosmetics():
    return random.choice([("Shower Gel", 5, 1, False, "Health"), ("Hand Cream", 3, 1, False, "Health"), ("Shampoo", 4, 1, False, "Health"),
           ("Deodorant", 3, 1, False, "Health"), ("Perfume", 15, 1, False, "Health"), ("Toothpaste", 5, 1, False, "Health"),
           ("Toothbrush", 5, 1, False, "Health"), ("Tissues", 1.5, 1, False, "Health"),  ("Soap", 2.5, 1, False, "Health"),\
           ("Lotion", 5.5, 1, False, "Health")])

def Clothes():
    return random.choice([("T-Shirt", 15, 1, False), ("Jeans Trousers", 35, 1, False), ("Socks", 5, 1, False),\
           ("Sweatshirt", 25, 1, False), ("Coat", 50, 1, False), ("Dress", 40, 1, False), ("Skirt", 40, 1, False)])

def Shoes():
    return random.choice([("Sandals", 30, 1, False), ("Trainers", 50, 1, False), ("Trainers", 40, 1, False), \
            ("Trainers", 45, 1, False), ("Sneakers", 40, 1, False), ("Sneakers", 45, 1, False), ("Shoes", 40, 1, False), ("Shoes", 35, 1, False)])

def Flight():
    cities = ["London", "Warsaw", "Paris", "Rome", "Berlin", "Frankfurt", "Cracow", "Zurich", "Vienna", "Porto", "Madrid", "Prague"]
    r = np.random.choice(cities,2, False)
    seats = random.randint(1,4)
    return ("Flight: " + r[0] + " - "+r[1], normal_price(100, 50, 50) * seats, seats, False)

def Train():
    cities = ["Wrocław", "Warsaw", "Poznań", "Gdańsk", "Berlin", "Cracow", "Prague"]
    r = np.random.choice(cities,2, False)
    seats = random.randint(1,4)
    return ("Train travel: " + r[0] + " - "+r[1], normal_price(20, 5, 5)  * seats, seats, False)

def Bus():
    cities = ["Wrocław", "Warsaw", "Poznań", "Gdańsk", "Berlin", "Cracow", "Prague"]
    r = np.random.choice(cities,2, False)
    seats = random.randint(1,4)
    return ("Bus travel: " + r[0] + " - "+r[1], normal_price(20, 5, 5)  * seats, seats, False)

def Hotel():
    days = random.randint(1, 7)
    return ("Room", normal_price(100, 5, 5) * days, days, False)

def Starbucks():
    q = random.randint(1, 2)
    return random.choice([("Espresso", 2.30 * q, q, False), ("Cappuccino", 4.30 * q, q, False), ("Flat white", 3.00 * q, q, False), ("Latte", 4.30 * q, q, False),\
                  ("Tiramisu", 4.00 * q, q, False), ("Frappuccino", 4.30 * q, q, False), ("Cheesecake", 3.50 * q, q, False), ("Tea", 2.50 * q, q, False)])

def Mac():
    q = random.randint(1, 2)
    return random.choice([("Hamburger", 2.30 * q, q, False), ("McWrap", 3.30 * q, q, False), ("Big Mac", 4.30 * q, q, False), ("Coffee", 1.50 * q, q, False),\
                  ("French Fries", 1.50 * q, q, False), ("Cheeseburger", 2.70 * q, q, False), ("IceCream", 1.70 * q, q, False), ("McNuggets", 2.40 * q, q, False)])

def KFC():
    q = random.randint(1, 2)
    return random.choice([("Longer", 2.60 * q, q, False), ("Grander", 4.50 * q, q, False), ("Coffee", 2.00 * q, q, False), ("Chicken Wings", 2.00 * q, q, False),\
                  ("French Fries", 1.30 * q, q, False), ("Zinger", 2.90 * q, q, False), ("Shake", 1.70 * q, q, False), ("B-Smart", 3.00 * q, q, False) ])

def Pizza():
    q = random.randint(1, 2)
    return random.choice([("Small Pizza", 4.00 * q, q, False), ("Medium Pizza", 6.00 * q, q, False), ("Coffee", 1.90 * q, q, False),\
                  ("Hot Chocolate Cake", 2.30 * q, q, False), ("Tea", 1.90 * q, q, False), ("Big Pizza", 8.00 * q, q, False), ("Lemonade", 1.70 * q, q, False)])

categories = ["Food"] * 18 + ["Clothing"] * 10 + ["Electronics"] + ["Entertainment"] * 3 + ["Travel"] * 3 + ["Health"] * 2 + ["Market"] * 30

shops_by_category =\
{
    "Food": [("McDonald’s", Mac), ("KFC", KFC), ("Starbucks", Starbucks), ("Pizza Hut", Pizza)],
    "Clothing": [("Esprit", Clothes), ("H&M", Clothes), ("Zara", Clothes), ("ECCO", Shoes), ("Converse", Shoes), ("DC Shoes", Shoes)],
    "Health": [("Medicover", ("Doctor Visit", 30, 1, False)), ("Energy Fitness", ("Training", 10, 1, False)), ("Oasis SPA", ("Massage", 10, 1, False))],
    "Electronics": ["Apple", "Samsung", "Sony", "Asus"],
    "Entertainment": ["IMAX", "National Museum", "XDemon - Night Club", "Mundo 71 - Night Club"],
    "Travel": [("Lot", Flight), ("Lufthansa", Flight), ("British Airways", Flight), ("PKP", Train), ("FlixBus", Bus), \
               ("Novotel", Hotel), ("Marriott", Hotel), ("Hilton", Hotel), ("Intercontinental", Hotel), ("Artotel", Hotel)],
    "Market": [("Tesco", MarketProduct), ("Carrefour", MarketProduct), ("Auchan", MarketProduct), ("Real", MarketProduct),\
         ("Sunny Bakery", BakeryProduct) , ("Eco Bakery", BakeryProduct),\
         ("Cosy Corner Bakery", BakeryProduct), ("Rossmann", Cosmetics)],
    "Other": []
}

def generate_Entertainment():
    price = 10
    res = {}

    count = random.randint(1, 5)
    res["shop"] = random.choice(shops_by_category["Entertainment"])

    res["date"] = random.randint(min_date, int(time.time()))
    prods = [{"name":"Entry","quantity":count,"isWeight":False,"price":normal_price(10.0, 3) * count, "category": "Entertainment"}]

    res["products"] = prods

    total = 0
    for p in prods:
        total += p["price"]
    res["total"] = total

    return res

def generate_Clothing():
    res = {}
    res["shop"], products_fun = random.choice(shops_by_category["Clothing"])
    res["date"] = random.randint(min_date, int(time.time()))
    count = random.choice([1,1,1,1,1,1,2]) if  res["shop"] in ["ECCO", "Converse", "DC Shoes"] else random.randint(1, 6)
    prods = []

    for _ in range(count):
        prod = {}
        name, price, quantity, isW = products_fun()
        prods.append({"name":name,"quantity":quantity,"isWeight":isW,"price":normal_price(float(price), 5, 2), "category":"Clothing"})

    res["products"] = prods

    total = 0
    for p in prods:
        total += p["price"]
    res["total"] = total

    return res

def generate_Travel():
    res = {}
    res["shop"], products_fun = random.choice(shops_by_category["Travel"])
    res["date"] = random.randint(min_date, int(time.time()))

    name, price, quantity, isW = products_fun()
    prods = [{"name" : name, "quantity" : quantity, "isWeight" : isW, "price" : price, "category": "Travel"}]

    res["products"] = prods

    total = 0
    for p in prods:
        total += p["price"]
    res["total"] = total

    return res

def generate_Market():
    res = {}

    res["shop"], products_fun = random.choice(shops_by_category["Market"])
    res["date"] = random.randint(min_date, int(time.time()))
    count = random.randint(1, 15) if res["shop"] in ["Tesco","Carrefour"] else random.randint(1, 6)
    prods = []

    for _ in range(count):
        name, price, quantity, isW, cat = products_fun()
        prods.append({"name" : name, "quantity" : quantity, "isWeight" : isW, "price" : normal_price(float(price), 0.25, 0.3), "category": cat})

    res["products"] = prods

    total = 0
    for p in prods:
        total += p["price"]
    res["total"] = total

    return res

def generate_Health():
    res = {}

    res["shop"], product = random.choice(shops_by_category["Health"])
    res["date"] = random.randint(min_date, int(time.time()))
    name, price, quantity, isW = product
    prods =  [{"name" : name, "quantity" : quantity, "isWeight" : isW, "price" : normal_price(price, 3, 8), "category": "Health"}]
    res["products"] = prods

    total = 0
    for p in prods:
        total += p["price"]
    res["total"] = total

    return res

def generate_Electronics():
    res = {}
    devices = [("Notebook", 1000, 1, False), ("Smartphone", 500, 1, False), ("Headphones", 50, 1, False), ("Keyboard", 50, 1, False),\
                ("Mouse", 30, 1, False)]

    res["shop"] = random.choice(shops_by_category["Electronics"])
    res["date"] = random.randint(min_date, int(time.time()))

    prods = []
    count = random.choice([1,1,1,1,1,1,1,1,1,1,1,2])

    for _ in range(count):
        name, price, quantity, isW = random.choice(devices)
        prods.append({"name" : name, "quantity" : quantity, "isWeight" : isW, "price" : normal_price(float(price), 50, 15), "category": "Electronics"})

    res["products"] = prods

    total = 0
    for p in prods:
        total += p["price"]
    res["total"] = total

    return res

def generate_Food():
    res = {}

    res["shop"], products_fun = random.choice(shops_by_category["Food"])
    res["date"] = random.randint(min_date, int(time.time()))
    count = random.choice([1,1,1,1,1,2,2,2,3,1])
    prods = []

    for _ in range(count):
        name, price, quantity, isW = products_fun()
        prods.append({"name" : name, "quantity" : quantity, "isWeight" : isW, "price" : price, "category": "Food"})

    res["products"] = prods

    total = 0
    for p in prods:
        total += p["price"]
    res["total"] = total

    return res


cat_funs =\
{
    "Food": generate_Food,
    "Clothing": generate_Clothing,
    "Health": generate_Health,
    "Electronics": generate_Electronics,
    "Entertainment": generate_Entertainment,
    "Travel": generate_Travel,
    "Market": generate_Market
}

def generate(count):
    res = []
    for _ in range(count):
        cat = random.choice(categories)
        res.append(cat_funs[cat]())

    return json.dumps(res)

f = open("receipts_all.json","w")

f.write(generate(int(input())))
f.close()