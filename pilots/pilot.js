$.getJSON('https://api.ivao.aero/v2/tracker/whazzup', function (data) {
    var clients = data.clients;
    var pilots = data.clients.pilots;
    for (var i = 0; i < pilots.length; i++) {
      var pilot = pilots[i];
      var callsign = pilot.callsign;
      var fpl = pilot.flightPlan;
      var aircraftType = fpl.aircraft.icaoCode;
      var route = fpl.route;
      var remarks = fpl.remarks;
      var departure = fpl.departureId;
      var arrival = fpl.arrivalId;
      var state = pilot.lastTrack.state;
      var sqk = pilot.lastTrack.transponder;
      var rating = pilot.rating;
      rating = parseInt(rating);
      var rating_list = ["FS1", "FS2", "FS3", "PP", "SPP", "CP"]
      if (state == "On Blocks" || state == "Landed") {
        var row = $('<tr class="table-success">');
      }
      else if(state == "En Route" || state == "Departing"){
        var row = $('<tr class="table-warning">');
      }
      else if(state == "Approach"){
        var row = $('<tr class="table-info">');
      }
      else if(state == "Initial Climb"){
        var row = $('<tr class="table-danger">');
      }          
      else {
        var row = $('<tr class="table-secondary">');
      }
      row.append($('<td>').text(callsign));
      row.append($('<td>').text(rating_list[rating-2]));
      row.append($('<td>').text(aircraftType));
      row.append($('<td>').text(departure));
      row.append($('<td>').text(arrival));
      row.append($('<td>').text(sqk));
      row.append($('<td>').text(route));
      row.append($('<td>').text(remarks));
      row.append($('<td>').text(state));
      $('tbody').append(row);

    }
  }
);