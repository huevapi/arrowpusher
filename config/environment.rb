# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
Pusherapp::Application.initialize!

require 'pusher'

Pusher.app_id = '3279'
Pusher.key = '103fe749f6ddc155878f'
Pusher.secret = '972c0b07721fd494b726'