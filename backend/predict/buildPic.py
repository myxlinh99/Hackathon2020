import base64

def buildPicture(img):
    data = base64.b64decode(img)
    with open('tmp\\predictimg.jpg', 'wb+') as f:
        f.write(data)
    return 'tmp\\predictimg.jpg'