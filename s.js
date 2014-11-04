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
//callback = function(artistID) {
//    widget.setAttribute("src","https://embed.spotify.com/follow/1/?uri="+artistID+"&size=detail&theme=dark");
//    widget.style.width = 300;
//    widget.style.height = 56;
//    widget.style.frameborder = none;
//    widgetlist.appendChild(widget);
//}
artistName = function(iName) {
    //name = document.getElementById("artistIN").value;
    name = iName.split(' ').join('_')
    //console.log(name)
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
            //callback(artistID)
            
            widget.setAttribute("src","https://embed.spotify.com/follow/1/?uri="+artistID+"&size=detail&theme=dark");
            widget.style.width = 300;
            widget.style.height = 56;
            //widget.style.frameborder = none;
            widgetlist.appendChild(widget);
         }

    //console.log(name)
    
    request.open('GET', theResource , true)
    reqLST.push(request)
    for (var i = 0; i < reqLST.length; i++) {
        reqLST[i].send(null)
    }
    //snd(reqLST)
//    request.setRequestHeader('Access-Control-Allow-Origin','http://espemi01.github.io')
//    request.setRequestHeader('Content-Type','application/json')
}

snd = function(lst) {
    for (var i = 0; i < lst.length; i++) {
        lst[i].send(null)	
    }
}