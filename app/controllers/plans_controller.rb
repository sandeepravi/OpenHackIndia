class PlansController < ApplicationController

  include TripAdvisor

  def index; end

  def hotels
    @hotels = TripAdvisor.hotels_search(params[:place])
  end

  def places_of_interest
    
    @places_of_interest = TripAdvisor.search_places_of_interest(lat_long)
  end

  def buses
    @buses
  end

  def restaurants
    @restaurants = ZomatoWrapper.restaurants(params[:place])
  end

  def flights
    #Replace date after adding date plugin
    @dep_flights = Cleartrip.flights("Bangalore",params[:place],"17/08/2012")
    @arr_flights = Cleartrip.flights(params[:place],"Bangalore","18/08/2012")
  end

  def visits
    @visits
  end
end
