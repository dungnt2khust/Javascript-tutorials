var postAPI = 
    'https://jsonplaceholder.typicode.com/posts';

// stream
fetch(postAPI) // Return a promise
    .then(function(response){
        return response.json(); // JSON.parse: JSON -> Javascript types
    })
    .then(function(posts){
        var htmls = posts.map(function(post) {
            return `<li><h2>${post.title}</h2><p>${post.body}</p></li>`;
        })
        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    })