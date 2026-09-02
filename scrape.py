from facebook_scraper import get_posts

for post in get_posts('southernleyteppo47', pages=50):
    print(post['text'])   