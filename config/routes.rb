Rails.application.routes.draw do
  devise_for :users
  get 'pages/index'
  root to: 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :items, only: [:index, :create, :destroy, :update]
    end
  end
end
