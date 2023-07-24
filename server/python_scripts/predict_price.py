import pickle
import json
import sys
import numpy as np

__locations = {'loc': ['a', 'b', 'c']}
__model = None

def get_estimated_price(location,sqft,bhk,bath):
    global __model
    try:
        loc_index = __locations.index(location.lower()) + 3
    except:
        loc_index = -1

    x = np.zeros(len(__locations) + 3)
    x[0] = sqft
    x[1] = bath
    x[2] = bhk
    if loc_index>=0:
        x[loc_index] = 1

    return round(__model.predict([x])[0],3)

def load_saved_artifacts():
    global __locations
    with open("./artifacts/columns.json", "r") as f:
        __locations = json.load(f)['data_columns']

    global __model
    if __model is None:
        with open('./artifacts/house_price_model.pickle', 'rb') as f:
            __model = pickle.load(f)

# Accept input arguments from command-line
if __name__ == "__main__":
    if len(sys.argv) != 5:
        print("Usage: python predict_price.py <location> <sqft> <bhk> <bath>")
        sys.exit(1)

    location = sys.argv[1]
    sqft = float(sys.argv[2])
    bhk = int(sys.argv[3])
    bath = int(sys.argv[4])

    load_saved_artifacts()

    # print(get_estimated_price('1st Phase JP Nagar',18990, 2, 2))
    # print(get_estimated_price('xoxos',18990, 2, 2))

    price = get_estimated_price(location,sqft,bhk,bath)
    result = json.dumps({'estimated_price': price})
    print(result)
