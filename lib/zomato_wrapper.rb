module ZomatoWrapper
  class << self
    def get_city(city)
      zomato = initialize_zomato
      search(zomato.cities, city)
    end

    def restaurants(city)
      city = get_city(city)
      Zomato::Restaurant.search(city.id, "").restaurants
    end

    private 

    def initialize_zomato
      Zomato::Base.new(ZOMATO_KEY)
    end

    def search(cities, city)
      cities.each do |c|
        return c if c.name.match /#{city}/i
      end
    end
  end
end
