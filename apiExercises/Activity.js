document.getElementById("getActivity").addEventListener("click",function(){
fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity").textContent = data.activity
      document.body.classList.add("newTheme")
    })
})