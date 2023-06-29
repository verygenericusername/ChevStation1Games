var gameIcons = {
    create: function(src,name,url){
        var games = ['Target Shooter'];
        for(let i = 0; i < games.length; i++){
            if(name === games[i]){
                break;
            }else {
                return;
            }
        }
        var div = document.createElement("div");
        div.style.display = "inline-block";
        div.style.padding = "10px";

        var img = document.createElement("img");
        img.src = "assets/icons/" + src;
        img.height = "100";
        img.style.display = "inline-block";
        img.style.padding = "10px";

        var text = document.createElement("h3");
        text.style.color = "white";
        text.innerHTML = name;

        var download = document.createElement("button");
        download.textContent = "Download";
        download.addEventListener("click", function(){
            downloader.download(url);
        });

        var center = document.querySelector("center");
        var br = document.createElement("br");
        div.appendChild(img);
        div.appendChild(br);
        div.appendChild(text);
        div.appendChild(download);
        center.appendChild(div);
    }
}