$(document).ready(function() {
    // Establishing connection with the channel
    Pusher.channel_auth_endpoint = '/main/auth';
    Pusher.host = '192.168.101.107'
    Pusher.ws_port = '8090'
    Pusher.
    var pusher = new Pusher('103fe749f6ddc155878f');
    var myChannel = pusher.subscribe('presence-nicolas');

    var user_id;

    // Binding
    myChannel.bind('pusher:subscription_succeeded', function(user) {
        user_id = user.user_id;
    });
    
    myChannel.bind('create', function(thing) {
        alert('A thing was created: ' + thing.text);
    });

});