$(document).ready(function() {
    // Establishing connection with the channel
    var pusher = new Pusher('103fe749f6ddc155878f');
    var myChannel = pusher.subscribe('nicolas');

    // Binding
    myChannel.bind('create', function(thing) {
        alert('A thing was created: ' + thing.text);
    });
});