# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
Pusherapp::Application.initialize!

require 'pusher'

Pusher.app_id = '3149'
Pusher.key = '5741a20201f65ee83af9'
Pusher.secret = '8378efde8bedb39dc0d5'
Pusher.host="192.168.101.107"
Pusher.port=8081