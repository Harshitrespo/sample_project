header({'Content-Type': 'application/javascript'});
window.onload = function()
{
    const path = window.location.pathname.split('/');
    console.log(path,"jkjkjk")
    switch(path[1]) {
        case "" : 
        {
            loadPage("home");
            break;
        }
        case "about" : 
        {
            loadPage("about");
            break;
        }
        case "price" : 
        {
            loadPage("price");
            break;
        }
        default: 
        {
            loadPage("404");
            break;
        }
    }
    document.querySelectorAll(".menu-items").forEach((items) => {
        items.addEventListener("click", function()
        {
            const path = items.getAttribute("value")
            console.log(path);
            loadPage(path)
            if(path == "home") {
                window.history.pushState("","","/")
            }

            window.history.pushState("","",path)
        })
    })
}

function loadPage($path) {
    if($path == "") return;

    const container = document.getElementById("container")
    const request = new XMLHttpRequest();
    request.open("GET", "pages/" + $path + ".html");
    request.send()
    request.onload = function() {
        if(request.status == 200) {
            container.innerHTML = request.responseText
            document.title = $path;
        }
    }
}
