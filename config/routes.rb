Rails.application.routes.draw do
  
  resources :reviews
  resources :users
  resources :recipes

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
end
