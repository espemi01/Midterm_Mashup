//Spotify
//Client ID: 21110200b1da4bf7a591bc91b16ef0f0
//Client Secret: 935c9ccb7de24f9a82a89abc945af306

var reqLST = []

CW = function(iName) {
    widgetList = document.querySelector("#widgetlist");
    widget = document.createElement("IFRAME");
    var name = artistName(iName);
    makeW(name);
}
artistName = function(iName) {
    if (document.getElementById("artistIN").value == '') {
        name = iName.split(' ').join('_')
    }
    else {
        name = document.getElementById("artistIN").value;
    }
    return name
}
makeW = function(name) {
    var request = new XMLHttpRequest()
    var theResource = 'https://ws.spotify.com/search/1/artist.json?q='+name

    request.onload = function() {
            console.log(request.responseText)

            var res = eval( '(' + request.responseText + ')' )

            var count = res['resultsCount']
            var limit = res['resultsLimit']

            if (count>limit)
                count = limit

            artistID = (res['artists'][0]['href'])
            
            widget.setAttribute("src","https://embed.spotify.com/follow/1/?uri="+artistID+"&size=detail&theme=dark");
            widget.style.width = 300;
            widget.style.height = 56;
            //widget.style.frameborder = none;
            widgetlist.appendChild(widget);
         }
    
    request.open('GET', theResource , false)
    request.send(null)
}