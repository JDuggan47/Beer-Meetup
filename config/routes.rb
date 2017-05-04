Rails.application.routes.draw do
  devise_for :users
  root 'static_pages#index'

  resources :users, only: [:show] do
    resources :beers
  end

  resources :beers

  namespace :api do
    namespace :v1 do
      resources :beers
    end
  end
end
