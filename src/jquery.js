$ (document).ready(function(){
  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.getCurrentTemperature()+'°C');
  $('#increase-temp').click(function(){
    thermostat.increaseTemperature();
    updatesTemp();
  })

  $('#decrease-temp').click(function(){
    thermostat.decreaseTemperature();
    updatesTemp();
  })

  $('#reset-temp').click(function(){
    thermostat.reset();
    updatesTemp();
  })

  $('#psm-on').click(function(){
    thermostat.switchPowerSavingModeOn();
    updatesPSM('ON');
  })

  $('#psm-off').click(function(){
    thermostat.switchPowerSavingModeOff();
    updatesPSM('OFF');
  })

function updatesTemp(){
  $('#temperature').text(thermostat.getCurrentTemperature()+'°C')
  if(thermostat.energyUsage() === 'low-usage') {
    $('#temperature').css('color', 'green')
  } else if(thermostat.energyUsage() === 'medium-usage') {
    $('#temperature').css('color', 'blue')
  } else {
    $('#temperature').css('color', 'red')
  }

};

  function updatesPSM(OnOff){
    $('#power-saving-status').text(OnOff)
  };

});
