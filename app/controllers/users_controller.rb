class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    @beer = Beer.all
    @meetup = Meet.find(params[:meetup_id])
  end

  def index
    @user = User.find(params[:id])
    @beers = @beer.user
  end

  def new
    @member = Member.new
  end

  def create
    @member = Member.new(meetup_id: params[:meetup_id], user_id: current_user.id)
    @meetup = Meetup.find(params[:meetup_id])

    if @member.save
      flash[:success] = 'You succesfully joined!'
      redirect_to meetup_path(@meetup)
    else
      flash[:errors] = @meetup.errors.full_messages.join(', ')
    end
  end

end
