Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  # get 'courts/index'
  # get 'courts/show'
  devise_for :users
  root 'courts#index'
  resources :courts, only: [:index, :show]
  resources :games
  

end
