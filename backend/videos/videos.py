import requests
import sys
import json
from bs4 import BeautifulSoup

# Entry point to create initial url
def createURL(keyword):
    page = 'https://signingsavvy.com/search/'
    page += keyword
    return page

# Attempts to parse the page it lands on and find a video link
def getVideoLink(page):
    res = requests.get(page)
    content = BeautifulSoup(res.content, 'html.parser')

    video = content.find_all('div', { 'class': 'videocontent' })
    if not video:
        # Likely landed on a search page
        # Find relevant word and try again
        search = content.find_all('div', { 'class': 'search_results' })
        if not len(search):
            return None
        terms = search[0].find_all('li')
        newpage = 'https://signingsavvy.com/'
        newpage += terms[0].find_all('a')[0]['href']
        return getVideoLink(newpage)
        
    else:
        # Landed on page with video
        link = video[0].find_all('link', { 'as': 'video' })[0]['href']
        videolink = 'https://signingsavvy.com/'
        videolink += link
        return videolink

# Takes a string of words and gets a video for each individual word
def translateString(string):
    videos = []
    for word in string.split():
        url = createURL(word)
        video = getVideoLink(url)
        if not video:
            continue
        videos.append(video)
    raw = {
        'videos': videos
    }
    return raw

# Entry point for the program
# You can call it with a single argument, being the string you want to translate in quotes
# Ex: python text-to-videos.py "the quick brown fox jumped over the lazy dog"
# Returns a json with a single element "videos" that contains an ordered list of all videos needed
if __name__ == "__main__":
    if len(sys.argv) == 2:
        translate = sys.argv[1]
        print(translateString(translate))
    else:
        print("Invalid arguments")