Rails.application.routes.draw do
  root 'positions#index'
  get '/positions' => 'positions#index'
  get '/positions/:ticker' => 'positions#show'
  post '/positions' => 'positions#create'


  get  '/portfolios/new' => 'portfolios#new'
  post '/portfolios' => 'portfolios#create'
  # get  '/portfolios/:id/positions/:id' => 'positions#show'

  get  "/login", to: "sessions#new"
  post "/login", to: "sessions#create"
  get  "/logout", to: "sessions#destroy"

  resources :users, except: :destroy
end
