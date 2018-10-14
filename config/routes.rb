Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  # get 'courts/index'
  # get 'courts/show'
  devise_for :users
  root 'courts#index'
  resources :courts, only: [:index, :show]
  resources :games

  get 'games/:id/set_opponent', to: 'games#set_opponent'
  put 'games/:id/set_opponent', to: 'games#set_opponent'
  post 'games/:id/set_opponent', to: 'games#set_opponent'

  get 'games/:id/set_scorekeeper', to: 'games#set_scorekeeper'
  put 'games/:id/set_scorekeeper', to: 'games#set_scorekeeper'
  post 'games/:id/set_scorekeeper', to: 'games#set_scorekeeper'
  

end
