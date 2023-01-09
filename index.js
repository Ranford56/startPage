document.onreadystatechange = updateClock()
let engine_type = localStorage.getItem('engine_type');
let engine_url = localStorage.getItem('engine_url');
var commandline = document.querySelector('#search')
var form = document.querySelector('form')

function updateClock() {
    const date = new Date()
    document.getElementById("time").innerText = date.toLocaleTimeString([], { hour12: false })

}

setInterval(updateClock, 1000)


form.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log(commandline.value)
    let q = commandline.value
    let command = q.substring(0, q.indexOf(' ') + 1)
    if(command === "w "){
        window.location.href = "http://en.wikipedia.org/wiki/" + q.slice(2)
    }
    else if(command === "y "){
        window.location.href = "http://youtube.com/results?search_query=" + q.slice(2)
    }
    else if(command === "r "){
        window.location.href = "http://reddit.com/r/" + q.slice(2)
    }
    else if(command === "d "){
        window.location.href = "https://drive.google.com/drive/u/0/search?q=" + q.slice(2)
    } 
    else if(command === "git "){
        window.location.href = "https://github.com/search?q=" + q.slice(2)
    }
    else if(command === "t "){
        window.location.href = "https://twitter.com/search?q=" + q.slice(2)
    } 
    else if(command === "g "){
        window.location.href = "https://www.google.com/search?q=" + q.slice(2)
    } 
    else{
        window.location.href = "https://you.com/search?" + q
    }
})


function toggleCheck() {
    if(document.getElementById("myCheckbox").checked === true){
        fetch('https://flask-production-c37a.up.railway.app/bulb/on')
    } else {
        fetch('https://flask-production-c37a.up.railway.app/bulb/off')
    }
  }

