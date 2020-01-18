Rails.application.routes.draw do
  resources :sessions, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  resources :projects
  root to: "static#home"
end
