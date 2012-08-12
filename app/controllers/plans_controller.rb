class PlansController < ApplicationController

  include TripAdvisor

  def index; end

  def hotels
    @hotels = TripAdvisor.hotels_search(params[:place])
  end

  def interests
    geo = []
    lat_long = Geocoder.coordinates(param[:place])
    geo_location = lat_long.each {|u| geo << '%.2f' % u} if lat_long.present?
    @places_of_interest = TripAdvisor.search_places_of_interest(geo_location.join(","))
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
