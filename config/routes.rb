Rails.application.routes.draw do
  get '/listings/featured', to: "listings#featured_listings"

  resources :listings do
    resources :comments
  end

  resources :realtors, only: [:index, :show]

  get '/realtors/:realtor_id/search_listings', to: "realtors#realtor_listings_query"
  get '/realtors/:realtor_id/listings', to: "realtors#realtor_listings_index"

  resources :images, only: [:index, :show, :create]

  resources :comments, only: [:create, :index]
  resources :sessions
end
