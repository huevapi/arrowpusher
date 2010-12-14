class MainsController < ActionController::Base
  layout 'application'

  #user name
  def do_login
    cookies[:user] = params[:user]
    redirect_to :action=>:show
  end



  def send_me
    Pusher['presence-nicolas'].trigger('create', {:text=>"hola"})
  end

  def auth
      auth = Pusher[params[:channel_name]].authenticate(params[:socket_id],
        :user_id => cookies[:user] # => required
      )
      render :json => auth
  end
end
