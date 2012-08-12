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

	      if result.has_key? 'Error'
		      raise "web service error"
		   end
		   return result
	    end		

	    def search_places_of_interest(lat_long,query=[], limit=20)
          client = Foursquare2::Client.new(:client_id => 'I4LODILPNSH1KSHBGSMCNCIO3IFCZDMPCBJT2CBMIUWVW2C1', 
          	                               :client_secret => 'XJWCWDSZLMDKXHSYXT5QXC15GP1JIJZWLDJKRXMXSB4DK2DA')
          #client.search_venues(:ll => '36.142064,-86.816086', :query => 'Starbucks')
          client.search_venues(:ll => 'lat_long', :query => query, :limit => limit)
	    end  	

    end
end