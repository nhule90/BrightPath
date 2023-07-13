# Part 1: SWAPI¶

1. The height of Darth Vader: 202
`https://swapi.dev/api/people?search=Darth Vader`

2. the population of the planet Alderaan: 2000000000

`https://swapi.dev/api/planets?search=Alderaan`

3. the name of the manufacturer of the Millennium Falcon: Corellian Engineering Corporation

`https://swapi.dev/api/starships?search=Millennium Falcon`

4. the name of the species that C-3PO belongs to (multiple URLs): Droid

`https://swapi.dev/api/people?search=C-3PO`
`https://swapi.dev/api/species/2/`

5. the title of each film that Obi-Wan Kenobi is in (multiple URLs)

`https://swapi.dev/api/people?search=Obi-Wan Kenobi`
"https://swapi.dev/api/films/1/",
"https://swapi.dev/api/films/2/",
"https://swapi.dev/api/films/3/",
"https://swapi.dev/api/films/4/",
"https://swapi.dev/api/films/5/",
"https://swapi.dev/api/films/6/"


# Part 2: Social Mountain
---
## Summary
In this section, you’ll be looking through the documentation for the Social Mountain API and answering questions. You’ll also be making requests and recording the URLs and some information about the responses. Run the requests in Postman. Note: this API is live and viewable by your classmates and staff. Keep things appropriate for class.

You can view the documentation for the Social Mountain API here

The base URL of your requests is: https://practiceapi.devmountain.com/api (make sure to have the “s” in “https”)

1. Check if the POST request accept params, queries, and/or a body. Which one(s) and what information is it expecting to be sent?
- POST request accepts a body (text of the new post). Parameter content type is application/json

2. What data type does the GET request return?

it returns an array of all post, which is a list of objects

3. What would the URL look like for deleting the post with the id 555? (This post does not exist anymore, but the syntax is the same for existing posts, )

`https://practiceapi.devmountain.com/api/posts?id=555`

4. List the possible response codes from the GET request at ‘/posts/filter’

https://practiceapi.devmountain.com/api/posts/filter?text=wo

response codes are  200, 409

5. Create a post whose text is your name, record the URL and body here:

curl -X 'POST' \
  'https://practiceapi.devmountain.com/api/posts' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "text": "Hoa Nhu Le"
}'

6. What would the URL and body object be to update the post you just made to contain your faovrite color instead of your name?

curl -X 'PUT' \
  'https://practiceapi.devmountain.com/api/posts?id=1799' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "text": "Daisy"
}'


7. What is the URL to get posts that contain the text “blue”?

'https://practiceapi.devmountain.com/api/posts/filter?text=blue'

8. Make a request to GET all the posts. What are the content type and charset of the response? (Hint: look on the Headers)

application/json and utf-8

9. What would cause a PUT request to return a 409 status?

Request was missing req.query.id or req.body.text

10. What happens if you try to send a query in the GET request URL? Why do you get that response?

Nothing happen. Because it does not take input