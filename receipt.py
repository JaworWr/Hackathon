# import the necessary packages
from PIL import Image
import pytesseract
import argparse
import cv2
import os
from PIL import Image
import pytesseract
import json
import time

def transform(path):
    # load the example image and convert it to grayscale
    image = cv2.imread(path, 0)
    print(image)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    
    # check to see if we should apply thresholding to preprocess the
    # image
    #preprocess
    gray = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY | cv2.THRESH_OTSU)[1]
    
    # make a check to see if median blurring should be done to remove
    # noise
    gray = cv2.medianBlur(gray, 3)
    
    # write the grayscale image to disk as a temporary file so we can
    # apply OCR to it
    filename = "result.png"
    cv2.imwrite(filename, gray)

def parse(text):
    text = text.split('\n')
    products = []
    for line in text:
        print(line)
        bDigit = False
        bPoint = False
        for l in line:
            if str.isdigit(l):
                bDigit = True
            elif l == '.':
                bPoint = True
                
        if bDigit and bPoint:
            splitLine = line.split('£')
            #print(splitLine)
            (name, price) = splitLine
            if name[len(name) - 1] == ' ':
                name = name[:len(name) - 1]
            #print(name)
            #print(price)
            products.append((name, float(price)))
            
    # remove two last
    name = text[0]
    products = products[:len(products) - 2]

    return (name, '£', products)
    
def tojson(triple):
    (name, currency, products) = triple
    total = 0
    for i in range(0, len(products)):
        n, p = products[i]
        total += p
        
    productsList = []
    for i in range(0, len(products)):
        n, p = products[i]
        productsList.append({"name" : n, "quantity" : 1, "isWeight" : False, "prize": p, "category" : "Food"})
    
    jsonObject = {"shop" : name, "date" : int(time.time()), "Total" : total, "products" : productsList}
    return json.dumps(jsonObject)

def process_img(img):
    text = pytesseract.image_to_string(img)
    print(text)
    return tojson(parse(text))