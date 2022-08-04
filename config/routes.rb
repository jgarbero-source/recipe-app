Rails.application.routes.draw do
  
  resources :reviews
  resources :users
  resources :recipes

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  get "/randomrecipe", to: "recipes#random"
  post "/signup", to: "users#create"
  get "/me", to: "users#me"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
