class CourtsController < ApplicationController
  # def index
  #   @courts = Court.all
  # end

  def index
    respond_to do |format|
      format.html
      format.json do
        @courts = Court.all
        render json:  {
                        type: "FeatureCollection",
                        features: @courts.map do |court|
                          {
                            type: "Feature",
                            geometry: {
                              type: "Point",
                              coordinates: [court.longitude, court.latitude]
                            },
                            properties: {
                              name: court.name,
                              id: court.id
                            }
                          }
                        end
                      }
      end
    end
  end

  def show
    @court = Court.find(params[:id])
    @games = Game.where(court_id: @court)
  end
end
