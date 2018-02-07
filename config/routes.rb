Rails.application.routes.draw do
  resources :listings do
    get '/featured', to: "listings#featured_listings"
  end
end
