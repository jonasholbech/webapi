/**
 * Created by holbech on 28/06/16.
 */
var chargeElem = document.createElement('p'),
    levelElem = document.createElement('p'),
    chargeTimeElem = document.createElement('p'),
    disChargeTimeElem = document.createElement('p');
document.body.appendChild(chargeElem);
document.body.appendChild(levelElem);
document.body.appendChild(chargeTimeElem);
document.body.appendChild(disChargeTimeElem);
navigator.getBattery().then(function(battery) {
    function updateAllBatteryInfo(){
        updateChargeInfo();
        updateLevelInfo();
        updateChargingInfo();
        updateDischargingInfo();
    }
    updateAllBatteryInfo();

    battery.addEventListener('chargingchange', function(){
        updateChargeInfo();
    });
    function updateChargeInfo(){
        chargeElem.innerHTML="Battery charging? "
            + (battery.charging ? "Yes" : "No");
    }

    battery.addEventListener('levelchange', function(){
        updateLevelInfo();
    });
    function updateLevelInfo(){
        levelElem.innerHTML="Battery level: "
            + battery.level * 100 + "%";
    }

    battery.addEventListener('chargingtimechange', function(){
        updateChargingInfo();
    });
    function updateChargingInfo(){
        chargeTimeElem.innerHTML="Battery charging time: "
            + battery.chargingTime + " seconds";
    }

    battery.addEventListener('dischargingtimechange', function(){
        updateDischargingInfo();
    });
    function updateDischargingInfo(){
        disChargeTimeElem.innerHTML="Battery discharging time: "
            + battery.dischargingTime + " seconds";
    }

});