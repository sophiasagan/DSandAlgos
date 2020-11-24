cache = {}

def get_page(url):
    if cache.get(url):
        return cache[url] # returns cached data
    else:
        data = get_data_from_server(url)
        cache[url] = data
        return data # saves this data in your cache first