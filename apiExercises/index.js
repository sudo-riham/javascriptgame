fetch("https://dog.ceo/api/breeds/image/random/2")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("image-container0").innerHTML = `
        <img src="${data.message[0]}" /> `
        document.getElementById("image-container1").innerHTML = `
        <img src="${data.message[1]}" /> `
    })