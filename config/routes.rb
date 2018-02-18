Rails.application.routes.draw do
  get '/listings/featured', to: "listings#featured_listings"

  resources :listings

  resources :comments, only: [:create]
end
