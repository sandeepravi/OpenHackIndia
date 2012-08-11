class PlansController < ApplicationController

  include TripAdvisor

  def index; end

  def hotels
    @hotels = TripAdvisor.hotels_search(params[:place])
  end

  def buses
    @buses
  end

  def restaurants
    @restaurants = ZomatoWrapper.restaurants(params[:place])
  end

  def flights
    @flights
  end

  def visits
    @visits
  end
end
