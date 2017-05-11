class Api::V1::SearchesController < ApiController
  skip_before_action :verify_authenticity_token

  def index
    render json: Beer.all
  end

  def create
    @beers = Beer.all
    if params[:search]
      search=params[:search]
      @beers= Beer.where("name_of_beer ilike ?", "%#{search}%")
      render json: @beers
    else
      @beers = Beer.all.order("created_at DESC")
    end
  end

  private

  def search_params
    params.permit(:search)
  end

end
