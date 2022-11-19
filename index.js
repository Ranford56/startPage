document.onreadystatechange = updateClock()
let engine_type = localStorage.getItem('engine_type');
let engine_url = localStorage.getItem('engine_url');

function updateClock() {
    const date = new Date()
    document.getElementById("time").innerText = date.toLocaleTimeString([], { hour12: false })

}

setInterval(updateClock, 1000)


function Google(){
    engine_type = 'google';
    engine_url = 'https://www.google.com/search?q=';

    localStorage.setItem('engine_type', 'google');
    localStorage.setItem('engine_url', 'https://www.google.com/search?q=');
}

function SendRequest(){
    const query = document.getElementById('search').value
    window.location.href = `https://www.google.com/search?q=${query}`
}

const searchInput = document.getElementById('search')
searchInput.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        if (engine_url != null) {
            let request = document.querySelector('.search').value;
            if (request.includes('>', -1)){
                Google();
                if (request.includes('http://', 0) || request.includes('https://', 0 )){
                    window.location.href = request.substring(1);
                }
                else {
                    window.location.href = "https://" + request.substring(1);
                }
                document.getElementById('search').style.animation = 'search-link-redirect 0.5s linear';
            }
            else{
                document.getElementById("search-button").click();
            }
        }
    }
});

function toggleCheck() {
    if(document.getElementById("myCheckbox").checked === true){
        fetch('https://flask-production-c37a.up.railway.app/bulb/on')
    } else {
        fetch('https://flask-production-c37a.up.railway.app/bulb/off')
    }
  }