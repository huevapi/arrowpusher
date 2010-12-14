class MainsController < ActionController::Base
  layout 'application'

  def send_me
    Pusher['nicolas'].trigger('create', {:text=>"hola"})
  end

  def auth
      auth = Pusher[params[:channel_name]].authenticate(params[:socket_id],
        :user_id => 123 # => required
      )
      render :json => auth
  end
end
