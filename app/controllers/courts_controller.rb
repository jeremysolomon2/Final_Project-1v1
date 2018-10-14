class CourtsController < ApplicationController

  def index
    respond_to do |format|
      format.html do
        @coordinates = request.location.coordinates.reverse
        @coordinates = [0.0, 0.0] if @coordinates.empty?
      end
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
    @games = Game.where(court_id: @court).order('id ASC')
  end

end
