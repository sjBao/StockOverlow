Rails.application.routes.draw do



  get '/portfolios/new' => 'portfolios#new'
  post '/portfolios' => 'portfolios#create'
  get 'portfolios/:id/positions/:id' => 'positions#show'
end
