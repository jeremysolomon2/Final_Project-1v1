class GamesController < ApplicationController
  
    def show
      @game = Game.find(params[:id])
      @court = @game.court
      @user = @game.user
      @scorekeeper = @game.score_keeper
      @opponent = @game.opponent

      respond_to do |format|
        format.html
        format.json do
          render json: { 
              game: @game,
              user: @user,
              score_keeper: @score_keeper,
              opponent: @opponent
            }
        end
      end
    end
  
  end
  