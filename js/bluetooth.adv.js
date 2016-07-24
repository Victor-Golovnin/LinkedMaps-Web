(function(){
	var adapter = tizen.bluetooth.getLEAdapter();
	
	function successcallback(device)
	{
	   console.log("Found device: " + device.name + " [" + device.address + "]");
	};
	
	adapter.startScan(successcallback);
		
	var payload = {lat: 123.456, lon: 232.123};
	
	var advertiseData = new tizen.BluetoothLEAdvertiseData(
			{
			   includeName: true,
			   serviceuuids: ["1819"],  /* 1819 is Location&Navigation UUID */
			   serviceData: payload
			});
			var connectable = true;

			adapter.startAdvertise(advertiseData, "ADVERTISE",
			                       function onstate(state)
			                       {
			                          console.log("Advertising configured: " + state);
			                       },
			                       function(error)
			                       {
			                          console.log("startAdvertise() failed: " + error.message);
			                       },
			                       "LOW_LATENCY", connectable);
			
			//adapter.stopScan();
	
}())