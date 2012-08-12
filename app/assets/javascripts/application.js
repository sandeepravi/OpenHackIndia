// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery.tinycarousel.min.js
//= require twitter/bootstrap
//= require_tree .

var weatherLocCode = {"Ahmadabad":"INXX0001", "Ajmer":"INXX0002", "Allahabad":"INXX0003", "Alleppey":"INXX0004", "Amer":"INXX0005", "Amravati":"INXX0006", "Amritsar":"INXX0007", "Anakapalle":"INXX0008", "Ara":"INXX0009", "Aruppukkottai":"INXX0010", "Auraiya":"INXX0011", "Bangalore":"INXX0012", "Barddhaman":"INXX0013", "Basirhat":"INXX0014", "Batala":"INXX0015", "Benares":"INXX0016", "Bhandara":"INXX0017", "Bhatkal":"INXX0018", "Bhatpara":"INXX0019", "Bhiwandi":"INXX0020", "Bhiwani":"INXX0021", "Bhongir":"INXX0022", "Bhopal":"INXX0023", "Bhubaneshwar":"INXX0024", "Bihar":"INXX0025", "Bombay":"INXX0026", "Bulandshahr":"INXX0027", "Calcutta":"INXX0028", "Chavakkad":"INXX0029", "Chhapra":"INXX0030", "Chittoor":"INXX0031", "Cochin":"INXX0032", "Cuttack":"INXX0033", "Daman":"INXX0034", "Daosa":"INXX0035", "Darjiling":"INXX0036", "Daund":"INXX0037", "Delhi":"INXX0038", "Dewas":"INXX0039", "Dindigul":"INXX0040", "Dod Ballapur":"INXX0041", "Duraha":"INXX0042", "Elamanchili":"INXX0043", "Etawah":"INXX0044", "Faizabad":"INXX0045", "Faridabad":"INXX0046", "Fatehpur":"INXX0047", "Gandhinagar":"INXX0048", "Gangtok":"INXX0049", "Gaya":"INXX0050", "Ghaziabad":"INXX0051", "Ghazipur":"INXX0052", "Godhra":"INXX0053", "Haora":"INXX0054", "Hisar":"INXX0055", "Hoshiarpur":"INXX0056", "Hyderabad":"INXX0057", "Indore":"INXX0058", "Jaipur":"INXX0059", "Jalandhar":"INXX0060", "Jatni":"INXX0061", "Jaunpur":"INXX0062", "Jharsuguda":"INXX0063", "Kalimpang":"INXX0064", "Kalyan":"INXX0065", "Kamthi":"INXX0066", "Kanpur":"INXX0067", "Kasaragod":"INXX0068", "Khadki":"INXX0069", "Khammam":"INXX0070", "Kharagpur":"INXX0071", "Kolar":"INXX0072", "Koregaon":"INXX0073", "Lucknow":"INXX0074", "Madras":"INXX0075", "Madurai":"INXX0076", "Mahbubnagar":"INXX0077", "Mahesana":"INXX0078", "Malegaon":"INXX0079", "Mandya":"INXX0080", "Mangalore":"INXX0081", "Medinipur":"INXX0082", "Meerut":"INXX0083", "Mhow":"INXX0084", "Mirzapur":"INXX0085", "Moga":"INXX0086", "Mumbai":"INXX0087", "Murud":"INXX0088", "Muzaffarnagar":"INXX0089", "Muzaffarpur":"INXX0090", "Nadiad":"INXX0091", "Nagercoil":"INXX0092", "Nagpur":"INXX0093", "Nawabganj":"INXX0094", "Nellore":"INXX0095", "New Delhi":"INXX0096", "Neyyattinkara":"INXX0097", "Nizamabad":"INXX0098", "Panvel":"INXX0099", "Patna":"INXX0100", "Pondicherry":"INXX0101", "Pune":"INXX0102", "Puri":"INXX0103", "Quilon":"INXX0104", "Rae Bareli":"INXX0105", "Raigarh":"INXX0106", "Rajapalaiyam":"INXX0107", "Rohtak":"INXX0108", "Sambalpur":"INXX0109", "Sanwer":"INXX0110", "Saraipali":"INXX0111", "Satara":"INXX0112", "Sehore":"INXX0113", "Shertallai":"INXX0114", "Sitapur":"INXX0115", "Sivakasi":"INXX0116", "Solapur":"INXX0117", "Sonipat":"INXX0118", "Srikakulam":"INXX0119", "Tambaram":"INXX0120", "Thana":"INXX0121", "Tirupati":"INXX0122", "Tiruvottiyur":"INXX0123", "Tonk":"INXX0124", "Trivandrum":"INXX0125", "Tumkur":"INXX0126", "Udupi":"INXX0127", "Ulhasnagar":"INXX0128", "Unnao":"INXX0129", "Vadodara":"INXX0130", "Vellore":"INXX0131", "Vidisha":"INXX0132", "Virudunagar":"INXX0133", "Visakhapatnam":"INXX0134", "Vizianagaram":"INXX0135", "Warangal":"INXX0136", "Wardha":"INXX0137", "Zahirabad":"INXX0138", "Patiala":"INXX0139", "Dehradun":"INXX0140", "Bikaner":"INXX0141", "New Delhi/Safdarjung":"INXX0142", "Dibrugarh/Mohanbari":"INXX0143", "Jaisalmer":"INXX0144", "Jodhpur":"INXX0145", "Gwalior":"INXX0146", "Gauhati":"INXX0147", "Tezpur":"INXX0148", "Satna":"INXX0149", "Bhuj-Rudramata":"INXX0150", "Jabalpur":"INXX0151", "M. O. Ranchi":"INXX0152", "Agartala":"INXX0153", "Rajkot":"INXX0154", "Pendra Road":"INXX0155", "Jamshedpur":"INXX0156", "Surat":"INXX0157", "Balasore":"INXX0158", "Veraval":"INXX0159", "Akola":"INXX0160", "Aurangabad Chikalthan Aerodrome":"INXX0162", "Jagdalpur":"INXX0163", "Poona":"INXX0164", "Ratnagiri":"INXX0165", "Sholapur":"INXX0166", "Machilipatnam":"INXX0167", "Kakinada":"INXX0168", "Goa/Panjim":"INXX0169", "Belgaum/Sambra":"INXX0170", "Gadag":"INXX0171", "Kurnool":"INXX0172", "Chitradurga":"INXX0173", "Anantapur":"INXX0174", "Kozhikode":"INXX0176", "Coimbatore/Peelamedu":"INXX0177", "Cuddalore":"INXX0178", "Port Blair":"INXX0179", "Tiruchchirapalli":"INXX0180", "Minicoy":"INXX0181", "Ahmednagar":"INXX0183", "Aurangabad":"INXX0184", "Chandigarh":"INXX0185", "Dispur":"INXX0187", "Guwahati":"INXX0188", "Imphal":"INXX0189", "Itanagar":"INXX0190", "Kohima":"INXX0191", "Kolhapur":"INXX0192", "Ludhiana":"INXX0193", "Nasik":"INXX0194", "Shimla":"INXX0195", "Shillong":"INXX0196", "Srinagar":"INXX0197", "Thiruvan":"INXX0198", "Varanasi":"INXX0199", "Aizwal":"INXX0200", "Kerala":"INXX0201", "Chennai":"INXX0202", "Agra":"INXX0203", "Kovur":"INXX0205", "Bankura":"INXX0206", "Honavar":"INXX0212", "Bagdogra":"INXX0220", "Bhavnagar":"INXX0221", "Jammu":"INXX0222", "Jamnagar":"INXX0223", "Jorhat":"INXX0224", "Khajuraho":"INXX0225", "Porbandar":"INXX0227", "Raipur":"INXX0228", "Udaipur":"INXX0229", "Kolkata":"INXX0300", "Aligarh":"INXX0301", "Ambala":"INXX0302", "Anand":"INXX0303", "Asansol":"INXX0304", "Azamgarh":"INXX0305", "Baharampur":"INXX0306", "Balia":"INXX0307", "Banda":"INXX0308", "Barrackpur":"INXX0309", "Bharuch":"INXX0310", "Bhatinda":"INXX0311", "Bhavani":"INXX0312", "Bhind":"INXX0313", "Bidar":"INXX0314", "Bijnaur":"INXX0315", "Bilaspur":"INXX0316", "Bokaro":"INXX0317", "Buxar":"INXX0318", "Chamba":"INXX0319", "Chandannagar":"INXX0320", "Chhindwara":"INXX0321", "Coonoor":"INXX0322", "Dadra+And+Nagar+Haveli":"INXX0323", "Darbhanga":"INXX0324", "Davanagere":"INXX0325", "Dhanbad":"INXX0326", "Dharamsala":"INXX0327", "Dharwad":"INXX0328", "Dhule":"INXX0329", "Dimapur":"INXX0330", "Durgapur":"INXX0331", "Dwarka":"INXX0332", "Erode":"INXX0333", "Faridkot":"INXX0334", "Ferozepur":"INXX0335", "Firozabad":"INXX0336", "Gondia":"INXX0337", "Greater+Noida":"INXX0338", "Gudivada":"INXX0339", "Gulbarga":"INXX0340", "Guntur":"INXX0341", "Gurgaon":"INXX0342", "Haldia":"INXX0343", "Hamirpur":"INXX0344", "Hardoi":"INXX0345", "Haridwar":"INXX0346", "Hathras":"INXX0347", "Hazaribagh":"INXX0348", "Howrah":"INXX0349", "Hubli":"INXX0350", "Jhansi":"INXX0351", "Jolarpet":"INXX0352", "Junagadh":"INXX0353", "Kalka":"INXX0354", "Kanchipuram":"INXX0355", "Kangra":"INXX0356", "Kanyakumari":"INXX0357", "Karimnagar":"INXX0358", "Karnal":"INXX0359", "Katra":"INXX0360", "Kaziranga":"INXX0361", "Khambhat":"INXX0362", "Kodaikanal":"INXX0363", "Kottayam":"INXX0364", "Kullu":"INXX0365", "Kutch":"INXX0366", "Lonavala":"INXX0367", "Mahabaleswar":"INXX0368", "Mandi":"INXX0369", "Mangalagiri":"INXX0370", "Margao":"INXX0371", "Mayurbhanj":"INXX0372", "Mohali":"INXX0373", "Mokameh":"INXX0374", "Motihari":"INXX0375", "Murshidabad":"INXX0376", "Mussoorie":"INXX0377", "Mysore":"INXX0378", "Nalanda":"INXX0379", "Nalgonda":"INXX0380", "Nangal":"INXX0381", "Navi+Mumbai":"INXX0382", "Navsari":"INXX0383", "Noida":"INXX0384", "Osmanabad":"INXX0385", "Palwal":"INXX0386", "Panaji":"INXX0387", "Panchkula":"INXX0388", "Panipat":"INXX0389", "Patan":"INXX0390", "Pathankot":"INXX0391", "Pimpri-Chinchwad":"INXX0392", "Purulia":"INXX0393", "Raichur":"INXX0394", "Rajahmundry":"INXX0395", "Rangareddy":"INXX0396", "Ratlam":"INXX0397", "Rishikesh":"INXX0398", "Roorkee":"INXX0399", "Rourkela":"INXX0400", "Saharanpur":"INXX0401", "Samastipur":"INXX0402", "Shahjahanpur":"INXX0403", "Silchar":"INXX0404", "Siliguri":"INXX0405", "Sindri":"INXX0406", "Siwan":"INXX0407", "Sultanpur":"INXX0408", "Surendranagar":"INXX0409", "Tenali":"INXX0410", "Thanjavur":"INXX0411", "Thoothukudi":"INXX0412", "Thrissur":"INXX0413", "Tinsukia":"INXX0414", "Tirupur":"INXX0415", "Udhampur":"INXX0416", "Ujjain":"INXX0417", "Una":"INXX0418", "Uttarkashi":"INXX0420", "Valsad":"INXX0421", "Vasai":"INXX0422", "Vijayawada":"INXX0423", "Wayanad":"INXX0424"};

$(document).ready(function(){
  $('#slider-code').tinycarousel({ pager: true });

  var toplace, departure, arrival;

  $('#search-form').submit(function() {
    var formdata = $(this).serializeArray();

    $.each(formdata, function(key, value) {
      if(value.name == 'toplace') {
        toplace = value.value;
      } else if(value.name == 'departure') {
        departure = value.value;
      } else if(value.name == 'arrival') {
        arrival = value.value;
      }
    });

    $("#search-box").css({'margin-left': $("#search-box").position().left, 'float':'left'});
    $("#search-box").animate({ "margin-top": "0px", "margin-left": "0px" }, 2000);
    $("#map").slideDown(2000);
    $("#slider-code").slideDown(2000);
    $("#weather").slideDown(2000);
    $("body").css('background', 'none');
    initialize();

    //display weather condition
    $("#weather").html();
    var deptDateSplit = departure.split('-');
    var deptStringDate = new Date(Number(deptDateSplit[2]), Number(deptDateSplit[0])-1, Number(deptDateSplit[1]));
    var arrivalDateSplit = arrival.split('-');
    var arrivalStringDate = new Date(Number(arrivalDateSplit[2]), Number(arrivalDateSplit[0])-1, Number(arrivalDateSplit[1]));
    var weatherForDate = new Date(deptStringDate.getTime() + (24 * 60 * 60 * 1000));

    displayWeather(departure);
    while(weatherForDate.getTime() <= arrivalStringDate.getTime()) {
      displayWeather(weatherForDate.getMonth()+1 + "-" + weatherForDate.getDate() + "-" + weatherForDate.getFullYear());
      weatherForDate = new Date(weatherForDate.getTime() + (24 * 60 * 60 * 1000));
    }

    get_hotels();
    get_restaurants();
    return false;
  });

  //google maps api
  var directionDisplay;
  var directionsService = new google.maps.DirectionsService();
  var bangalore = new google.maps.LatLng(12.9833, 77.5833);

  function get_hotels(){
    var place = $("input[name='toplace']").val()
    $.ajax({
      url: "/plan/hotels",
      dataType: "script",
      data: {place: place}
    });
  }
  function get_restaurants(){
    var place = $("input[name='toplace']").val();
     $.ajax({
      url: "/plan/restaurants",
      dataType: "script",
      data: {place: place}
    });

}
  function initialize() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var mapOptions = {
      zoom: 7,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: bangalore
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    directionsDisplay.setMap(map);

    directionsDisplay.setPanel(document.getElementById("directions-panel"));


    var request = {
       origin: bangalore,
       destination: toplace,
       optimizeWaypoints: true,
       travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(result);
      }
    });

    directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
      var route = response.routes[0];
      var summaryPanel = document.getElementById("directions-panel");
      summaryPanel.innerHTML = "";
      // For each route, display summary information.
      for (var i = 0; i < route.legs.length; i++) {
        var routeSegment = i+1;
        summaryPanel.innerHTML += "<b>Route Segment: " + routeSegment + "</b><br />";
        summaryPanel.innerHTML += route.legs[i].start_address + " to ";
        summaryPanel.innerHTML += route.legs[i].end_address + "<br />";
        summaryPanel.innerHTML += route.legs[i].distance.text + "<br /><br />";
      }
    }
  });

  }

  //weather report data
  function displayWeather(forDate) {
    var todaysDate = new Date();
    var currentMonth = todaysDate.getMonth()+1;
    var dateSplit = forDate.split('-');
    var stringDate = new Date(Number(dateSplit[2]), Number(dateSplit[0])-1, Number(dateSplit[1]));
    var cityName = toplace.charAt(0).toUpperCase() + toplace.slice(1);

    if(Number(dateSplit[0]) > currentMonth+1) {
      $("#weather").html("Oops!! Weather condition is available only for current month and next month.");
    } else {
      if(Number(departure.split('-')[0]) == currentMonth) {
        urlFinal = "http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url='http://in.weather.com/weather/monthly-" + cityName + "-" + weatherLocCode[cityName] + "'%20AND%20xpath='/html/body//div[@class=\"monthly_item\"]'&format=json";
      } else {
        urlFinal = "http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url='http://in.weather.com/weather/monthly-" + cityName + "-" + weatherLocCode[cityName] + "?flag=1'%20AND%20xpath='/html/body//div[@class=\"monthly_item\"]'&format=json";
      }
      $.ajax({
        type: 'GET',
        url: urlFinal,
        dataType: 'json',
        success: function(data, textStatus) {
          $.each(data.query.results.div, function(key1, value1) {
            if($.isArray(value1.div)) {
              if(Number(value1.div[0].p) == Number(dateSplit[1])) {
                $("#weather").append('<strong>' + stringDate.toDateString() + '</strong><br />');
                if(value1.div[1].class == "monthly_item_title") {
                  $("#weather").append(value1.div[1].p + " data<br />");
                  if(typeof value1.div[2].p != "undefined") {
                    $("#weather").append(value1.div[2].p.content + "<br /><hr />");
                  } else if(typeof value1.div[2].strong != "undefined") {
                    $("#weather").append(value1.div[2].strong.content + "<br /><hr />");
                  }
                } else if(value1.div[1].class == "monthly_item_title_forecast"){
                  $("#weather").append("Forecast data<br />");
                  $("#weather").append("<img src=" + value1.div[2].a.img.src + " />");
                  $("#weather").append(value1.div[3].strong.content + "<br />");
                  $("#weather").append(value1.div[4].p + "<br /><hr />");
                }
              }
            }
          });
        }
      });
    }

  }

});
