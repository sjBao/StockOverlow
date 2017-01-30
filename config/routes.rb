Rails.application.routes.draw do





  root 'positions#index'
  get '/portfolios/new' => 'portfolios#new'
  post '/portfolios' => 'portfolios#create'
  get 'portfolios/:id/positions/:id' => 'positions#show'
end
