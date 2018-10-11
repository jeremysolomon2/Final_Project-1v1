class GamesController < ApplicationController
  
    def show
      @court = Court.find(params[:id])
      @game = Game.find(params[:id])
    end
  
  end
  