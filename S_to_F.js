<script>
    
//Spotify
Client ID: 21110200b1da4bf7a591bc91b16ef0f0
Client Secret: 935c9ccb7de24f9a82a89abc945af306

//Facebook
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '577702369027634',
      xfbml      : true,
      version    : 'v2.1'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
    
</script>