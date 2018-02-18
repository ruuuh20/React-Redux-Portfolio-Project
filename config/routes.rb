Rails.application.routes.draw do
  get '/listings/featured', to: "listings#featured_listings"

  resources :listings do
    resources :comments
  end

  resources :comments, only: [:create, :index]
end
