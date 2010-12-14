class MainsController < ActionController::Base
  layout 'application'

  def reset
    @@id = 1
  end

  def get_id
    @@id ||= 0
    @@id=@@id+1
  end

  def finish
    unless params[:id]
      render :text=>"Error: /finish has to receive id", :status=>405
    else
      Pusher['presence-arrow'].trigger('message', {:id=>params[:id]})
      render :nothing=>true
    end
  end

  def auth
      auth = Pusher[params[:channel_name]].authenticate(params[:socket_id],
        :user_id => get_id # => required
      )
      render :json => auth
  end
end
