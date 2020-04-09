Basic Routing

app.METHOD(PATH, HANDLER)
Where:
app is an instance of express.
METHOD is an HTTP request method, in lowercase.
PATH is a path on the server.
HANDLER is the function executed when the route is matched.

get, post, put, delete

serving static files
app.use(express.static('public'))

To create a virtual path prefix
app.use('/static', express.static('public'))

absolute path of the directory
app.use('/static', express.static(path.join(__dirname, 'public')))

https://py-nodeapi.herokuapp.com/