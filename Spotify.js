//Spotify
//Client ID: 21110200b1da4bf7a591bc91b16ef0f0
//Client Secret: 935c9ccb7de24f9a82a89abc945af306

createwidget = function() {
    widgetlist = document.querySelector("#widgetlist");
    widget= document.createElement("IFRAME");
    var x= getArtistID(stringconvert());
}

callback = function(artistID) {
    widget.setAttribute("src", "https://embed.spotify.com/follow/1/?uri="+artistID+"&size=detail&theme=light");
    widget.style.width = 300+"px";
    widget.style.height = 56+"px";
    widget.style.frameborder = "0";
    widgetlist.appendChild(widget);
}
stringconvert = function() {
    make = document.getElementById("input").value;
    console.log(make);
    return make;
}	
artistmaker = function(someartist) {
    artistname = someartist.split(' ').join('_')
    return artistname
}
getArtistID = function(artname) {
    var request = new XMLHttpRequest()

    request.onreadystatechange = function(){

    if (request.readyState == 4)   //
        if (request.status == 200){  //successful request OK

            console.log(request.responseText)

            var res = eval( '(' + request.responseText + ')' )

            var count = res['resultsCount']
            var limit = res['resultsLimit']

            if (count>limit)
                count = limit

            artistID = (res['artists'][0]['href'])
            callback(artistID)

        }
    }
    theartist = artistmaker(artname)
    console.log(theartist)
    var theResource = 'http://ws.spotify.com/search/1/artist.json?q='+theartist

    request.open('GET', theResource , true)

    //request.open('GET','urlread.cgi',true)

    request.send(null)	
}