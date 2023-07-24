import json
import os

__locations = {'loc': ['a', 'b', 'c']}

def load_saved_artifacts():
    global __locations
    with open("./artifacts/columns.json", "r") as f:
        __locations = json.load(f)['data_columns']


if __name__ == "__main__":
    load_saved_artifacts()
    print(json.dumps({'locations': __locations}))
    