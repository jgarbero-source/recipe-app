Rails.application.routes.draw do
  
  resources :reviews
  resources :users
  resources :recipes

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
  post "/signup", to: "users#create"
  get "/me", to: "users#me" #show
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
