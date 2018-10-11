class GamesController < ApplicationController
    before_action :set_game
    skip_before_action :verify_authenticity_token

    def show
      @court = @game.court
      @user = @game.user
      @score_keeper = @game.score_keeper
      @opponent = @game.opponent
    end

    def update
      @game.update(game_params)
      render json: @game
    end

    private

    def set_game
      @game = Game.find(params[:id])
    end

    def game_params
      params.require(:game).permit(:user_points, :opponent_points)
    end
  
  end
  