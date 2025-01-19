import requests
from bs4 import BeautifulSoup as bs
import json
import os
import time

def parser():
    base_url = "https://vancouver.calendar.ubc.ca/course-descriptions/courses-subject"
    base_page = requests.get(base_url)
    parsed = bs(base_page.content, "html.parser")
    subjects = parsed.find("main")
    subjects = subjects.find("ol", class_="list-buttons").find_all("li")

    links = []
    for list_item in subjects:
        links.append((list_item.string,list_item.a.attrs["href"]))
    
    data = []
    for title, url in links:
        time.sleep(1)
        print(f"Doing {title}")
        page = requests.get(url)
        html_page = bs(page.content, "html.parser")
        content = html_page.find("main").find("ol", class_="list-none")
        if content:
            content = content.find_all("li")
        else:
            print(f"Failed {title}")
            continue

        courses = []
        for item in content:
            course_name, course_description = list(item.h3.children)
            course_description = course_description.string
            course_name = " ".join(course_name.split(" ")[0:2])
            courses.append({"name": course_name, "description": course_description})
        data.append({"subject": title, "data": courses})

    with open("scraped.json", "w") as f:
        json.dump(data, fp= f, indent=4)

if __name__ == "__main__":
    parser()
    