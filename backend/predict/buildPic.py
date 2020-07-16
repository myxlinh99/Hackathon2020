import base64

def buildPicture(img):
    with open("..\\tmp\\predictimg.jpg", "wb") as f:
        f.write(base64.decodebytes(img))
    return "..\\tmp\\predictimg.jpg"