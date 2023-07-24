import pickle
import json
import numpy as np

__locations = {'loc': ['a', 'b', 'c']}
__model = None


def load_saved_artifacts():
    global __locations
    with open("./artifacts/columns.json", "r") as f:
        __locations = json.load(f)['data_columns']

    global __model
    if __model is None:
        with open('./artifacts/house_price_model.pickle', 'rb') as f:
            __model = pickle.load(f)

if __name__ == "__main__":
    load_saved_artifacts()
    print(json.dumps({'locations': __locations}))
    