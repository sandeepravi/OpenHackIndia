module TripAdvisor
	require 'open-uri'
	require 'json'
	
	class << self

		require 'uri'
    	require 'json'
    	require 'net/http'
        
        #enter the locations to get the list of hotels or enter the hotel name.
	    def hotels_search(query)
	      base_url = "http://www.tripadvisor.in/TypeAheadJson?action=HOTELHOME&types=hotel,geo&hglt=true&global=true"
	      url = "#{base_url}&query=#{URI.encode(query)}"
	      resp = Net::HTTP.get_response(URI.parse(url))
	      data = resp.body
	      result = JSON.parse(data)
	    end		

	    def search_places_of_interest(lat_long)
          client = Foursquare2::Client.new(:client_id => 'I4LODILPNSH1KSHBGSMCNCIO3IFCZDMPCBJT2CBMIUWVW2C1', 
          	                               :client_secret => 'XJWCWDSZLMDKXHSYXT5QXC15GP1JIJZWLDJKRXMXSB4DK2DA')
          #client.search_venues(:ll => '36.142064,-86.816086', :query => 'Starbucks')
          interest_areas = client.search_venues(:ll => lat_long,:limit => 50, :radius => 3000, :section => "outdoors")
          
          arr = []
          hash_arr = {}	
          if interest_areas.present?
            if interest_areas.first[1].blank?
              interest_areas.first[1].first["items"].each do |u|
              	hash_arr["distance"] = u.location.distance if u.location.present
                hash_arr["name"] = u.categories[0].present? ? u.categories[0]["name"] : nil
                hash_arr["tag"] =   u.categories[0].present? ? u.categories[0]["parents"] : nil
                arr << hash_arr
              end	
            end  
          end  
          arr

	    end  	

    end
end
