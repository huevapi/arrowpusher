$(document).ready(function() {
    // Establishing connection with the channel
    var pusher = new Pusher('103fe749f6ddc155878f');
    var myChannel = pusher.subscribe('presence-nicolas');
    Pusher.channel_auth_endpoint = '/main/auth';

    // Binding
    myChannel.bind('pusher:subscription_succeeded', function(member_list) {
        alert(member_list);
    });
    
    myChannel.bind('create', function(thing) {
        alert('A thing was created: ' + thing.text);
    });

});