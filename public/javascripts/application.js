$(document).ready(function() {
    // Establishing connection with the channel
	Pusher.channel_auth_endpoint = '/main/auth';
	var pusher = new Pusher('103fe749f6ddc155878f');
    var myChannel = pusher.subscribe('presence-arrow');

    var user_id;

    // Binding
    myChannel.bind('pusher:subscription_succeeded', function(user) {
        user_id = user.user_id;
    });
    
    myChannel.bind('message', function(data) {
        alert(data.id);
    });
    
    
	var player;
	var lastX = 0;
	var lastY = 0;
	var canvas;
	var ctx;
	var width = 800;
	var height = 600;

	function drawPlayer(){
		ctx.clearRect(lastX, lastY, width , height);
		
		lastX += 10;
		ctx.fillStyle = "rgb(200,0,0)"; 
		ctx.fillRect(lastX, lastY, width, height);
		
		setTimeout(drawPlayer, 100);
	}

	function init() {
		setTimeout(drawPlayer, 10);	
			canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");	
}
    
	function draw() {  
      var canvas = document.getElementById("canvas");  
      if (canvas.getContext) {  
        var ctx = canvas.getContext("2d");  
  
        ctx.fillStyle = "rgb(200,0,0)";  
        ctx.fillRect (10, 10, 55, 50);  
  
        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";  
        ctx.fillRect (30, 30, 55, 50);
      }  
    }  

	$.get('/main/finish', {id: user_id});
	
});
