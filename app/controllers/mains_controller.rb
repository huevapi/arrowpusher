class MainsController < ActionController::Base
  layout 'application'

  def reset

  end

  def get_id

  end

  def finish
    Pusher['presence-nicolas'].trigger('create', {:text=>"hola"})
  end

  def auth
      auth = Pusher[params[:channel_name]].authenticate(params[:socket_id],
        :user_id => cookies[:user] # => required
      )
      render :json => auth
  end
end
