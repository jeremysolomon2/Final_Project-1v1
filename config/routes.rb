Rails.application.routes.draw do
  # get 'courts/index'
  # get 'courts/show'
  devise_for :users
  root 'courts#index'
  resources :courts
  

end
