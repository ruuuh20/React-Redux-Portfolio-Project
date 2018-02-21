Rails.application.routes.draw do
  get '/listings/featured', to: "listings#featured_listings"

  resources :listings do
    resources :comments
  end

  resources :realtors, only: [:index, :show]

  resources :realtors do
    resources :listings
  end

  resources :comments, only: [:create, :index]
  resources :sessions
end
