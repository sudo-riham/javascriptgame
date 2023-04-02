fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postData = data.slice(0,5)
        let html = ""
        for(post of postData){
            html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr/>
            `
        }
        document.getElementById("blog-list").innerHTML = html
    })