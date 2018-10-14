class GamesController < ApplicationController
    before_action :set_game, only: [:show, :update, :set_opponent]
    skip_before_action :verify_authenticity_token

    def show
      @court = @game.court
      @user = @game.user
      @score_keeper = @game.score_keeper || {nickname: "No score keeper yer"}
      @opponent = @game.opponent || {nickname: "No opponent yet"}
    end

    def update
      # @game.update(game_params)
      render json: @game
    end

    def set_opponent 
      @game.opponent = current_user
      @game.save
      redirect_to @game
    end 

    def create
      @game = current_user.games.new(court_id: params[:court_id])
      if @game.save
        redirect_to @game,
          notice: 'game was successfully created.'
      else
        redirect_to Court.find(params[:court_id]),
          alert: "Could not create game: #{@games.errors.full_messages.join(', ')}"
      end
    end

    private

    def set_game
      @game = Game.find(params[:id])
    end

    def game_params
      params.require(:game).permit(:user_points, :opponent_points)
    end
  
  end
  