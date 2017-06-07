#RESTful Routing

REST - a mapping between HTTP routes and CRUD

BLOG

CREATE
READ    /allBlogs
UPDATE  /updateBlog/:id
DESTROY /destroyBlog/:id

DOGS

1 Index   -   /dogs             -   GET     -   List all dogs
2 New     -   /dogs/new         -   GET     -   Show new dog form
3 Create  -   /dogs             -   POST    -   Create a new dog, redirect after
4 Show    -   /dogs/:id         -   GET     -   Show info about one dog
5 Edit    -   /dogs/:id/edit    -   GET     -   Show edit form for one dog
6 Update  -   /dogs/:id         -   PUT     -   Update a particular dog, redirect after
7 Destroy -   /dogs/:id         -   DELETE  -   Delete a particular dog, redirect after