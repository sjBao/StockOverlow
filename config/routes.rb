Rails.application.routes.draw do
  root 'positions#index'
  get  '/portfolios/new' => 'portfolios#new'
  post '/portfolios' => 'portfolios#create'
  get  '/portfolios/:id/positions/:id' => 'positions#show'

  get  "/login", to: "sessions#new"
  post "/login", to: "sessions#create"
  get  "/logout", to: "sessions#destroy"
  
  resources :users, except: :destroy do
    resources :portfolios, only: [:show]
  end

end
