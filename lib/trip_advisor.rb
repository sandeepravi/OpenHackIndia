module TripAdvisor
	require 'open-uri'
	require 'json'
	
	class << self
        
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

	    def search_places_of_interest()
          
	    end  	

    end
end