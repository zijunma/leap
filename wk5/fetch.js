fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
        console.log(users);
    });



fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        title: "My New Post",
        body: "content",
        userId: 1
    })
})
.then(res => res.json())
.then(data => console.log("created post", data));


fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        id: 1,
        title: "My New Post",
        body: "content",
        userId: 1
    })
})
.then(res => res.json())
.then(data => console.log("created post", data));

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        id: 1,
        title: "My New Post",
        body: "content",
        userId: 1
    })
})
.then(res => res.json())
.then(data => console.log("created post", data));


fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
})
.then(res => res.json())
.then(data => console.log("created post", data));
