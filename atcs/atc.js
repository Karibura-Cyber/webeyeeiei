$.getJSON('https://api.ivao.aero/v2/tracker/whazzup', function (data) {
      var clients = data.clients;
      var atcs = data.clients.atcs;
      for (var i = 0; i < atcs.length; i++) {
        var atc = atcs[i];
        var callsign = atc.callsign;
        var frequency = atc.atcSession.frequency;
        var atis = atc.atis.lines;
        var potision = atis[1];
        var metar = atis[3];
        var rating = atc.rating;
        rating = parseInt(rating);
        var rating_list = ["AS1", "AS2", "AS3", "ADC", "APC", "ACC", "SEC", "SAI", "CAI"]
        atis = atis.join('<br>');
        var rating_name = rating_list[rating - 2];
        if (rating == 2){
          var row = '<tr class="table-danger"><th scope="row">' + callsign + '</th><td>' + rating_name + '</td><td>' + frequency + '</td><td>' + potision + '</td><td>' + atis + '</td></tr>';
        }
        else if (rating == 3){
          var row = '<tr class="table-warning"><th scope="row">' + callsign + '</th><td>' + rating_name + '</td><td>' + frequency + '</td><td>' + potision + '</td><td>' + atis + '</td></tr>';
        }
        else if (rating == 4){
          var row = '<tr class="table-info"><th scope="row">' + callsign + '</th><td>' + rating_name + '</td><td>' + frequency + '</td><td>' + potision + '</td><td>' + atis + '</td></tr>';
        }
        else if (rating == 5){
          var row = '<tr class="table-primary"><th scope="row">' + callsign + '</th><td>' + rating_name + '</td><td>' + frequency + '</td><td>' + potision + '</td><td>' + atis + '</td></tr>';
        }
        else if (rating == 6){
          var row = '<tr class="table-success"><th scope="row">' + callsign + '</th><td>' + rating_name + '</td><td>' + frequency + '</td><td>' + potision + '</td><td>' + atis + '</td></tr>';
        }
        else if (rating == 7){
          var row = '<tr class="table-success"><th scope="row">' + callsign + '</th><td>' + rating_name + '</td><td>' + frequency + '</td><td>' + potision + '</td><td>' + atis + '</td></tr>';
        }
        else if (rating == 8){
          var row = '<tr class="table-success"><th scope="row">' + callsign + '</th><td>' + rating_name + '</td><td>' + frequency + '</td><td>' + potision + '</td><td>' + atis + '</td></tr>';
    }
        $('#Table').append(row);
      }
  });
