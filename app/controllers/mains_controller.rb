class MainsController < ActionController::Base
  layout 'application'

  def send_me
    Pusher['nicolas'].trigger('create', {:text=>"hola"})
  end
end
