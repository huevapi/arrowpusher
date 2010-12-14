$(document).ready(function() {
    // Establishing connection with the channel
    Pusher.channel_auth_endpoint = '/main/auth';
    Pusher.host = '192.168.101.107';
    Pusher.ws_port = '8090';
    
    Pusher.log = function() {
    if (window.console) {
      window.console.log.apply(window.console, arguments);
        }
    };
    
    var pusher = new Pusher('5741a20201f65ee83af9');
    var myChannel = pusher.subscribe('presence-arrow');

    var user_id;

    // Binding
    myChannel.bind('pusher:subscription_succeeded', function(user) {
        user_id = user.length;

        myChannel.bind('message', function(data) {
            alert('hi');
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
    
});
