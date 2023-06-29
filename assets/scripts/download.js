var downloader = {
    download: function(url){
        var win = window.open(url);
        var ty = "assets/htmls/thankyou.html";
        var a = document.createElement("a");
        a.href = ty;
        a.click();
    }
}