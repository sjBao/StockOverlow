Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "application#home"

  resources :user

  get "/login", to: "sessions#login", as: "login"
  get "/logout", to: "sessions#logout", as: "logout"
end
