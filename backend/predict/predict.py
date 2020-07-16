from cv2 import cv2
import tensorflow as tf

CATEGORIES = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
	          "K", "L", "M", "N", "nothing", "O", "P", "Q", "R", "S", "space", "T", "U", "V", "W", "X", "Y", "Z"]

def prepare(file):
    IMG_SIZE = 200
    img_array = cv2.imread(file, cv2.IMREAD_GRAYSCALE)
    new_array = cv2.resize(img_array, (IMG_SIZE, IMG_SIZE))
    return new_array.reshape(-1, IMG_SIZE, IMG_SIZE, 1)

def makePredict(file):
    CATEGORIES = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
	          "K", "L", "M", "N", "nothing", "O", "P", "Q", "R", "S", "space", "T", "U", "V", "W", "X", "Y", "Z"]
    model = tf.keras.models.load_model("predict/CNN.model")
    image = file #your image path
    image = prepare(image)
    prediction = model.predict([image])
    prediction = list(prediction[0])
    return CATEGORIES[prediction.index(max(prediction))]

def finalPredict(file):
    predict = makePredict(file)
    raw = {
        "predict": str(predict)
    }
    return raw