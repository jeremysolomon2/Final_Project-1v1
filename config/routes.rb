Rails.application.routes.draw do
  devise_for :users
  root 'courts#index'

  # resource :courts, only: [:index]
  get 'courts', to: 'courts#index'

end
