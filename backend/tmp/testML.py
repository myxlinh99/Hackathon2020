import base64

load = 'G1_Test.jpg'

# Base 64 encode picture that is loaded in
with open(load, 'rb') as f:
    encoded = base64.b64encode(f.read())

# Save encoding to file
with open('output', 'wb') as f:
    f.write(encoded)