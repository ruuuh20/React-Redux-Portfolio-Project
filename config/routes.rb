Rails.application.routes.draw do
  get '/listings/featured', to: "listings#featured_listings"

  resources :listings do
    resources :comments
  end

  resources :realtors, only: [:index, :show]

  resources :realtors do
    resources :listings
  end

  get '/realtors/:realtor_id/search_listings', to: "realtors#listings_index"

  resources :images, only: [:index, :show, :create]

  resources :comments, only: [:create, :index]
  resources :sessions
end
