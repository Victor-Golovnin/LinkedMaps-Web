window.onload = function() {
	// TODO:: Do your initialization job

	// add eventListener for tizenhwkey
	window
			.addEventListener(
					'tizenhwkey',
					function(ev) {
						if (ev.keyName !== "back")
							return;

						var page = document
								.getElementsByClassName('ui-page-active')[0], pageid = page ? page.id
								: "";

						switch (pageid) {
						case "mainPage":
							console.log("pop from main, exiting");
							if (AppState === STATE.SELECTING_ROUTE)
								tau.back();
							else 
								tizen.application.getCurrentApplication().exit();
							break;
						case "menuPage":
							console.log("pop from menu to mainPage");
							tau.changePage("#mainPage");
							break;
						case "routesMain":
							console.log("pop from routes main to menuPage");
							tau.changePage("#menuPage");
							break;

						case "searchByAddressPage":
							console
									.log("pop from searchByAddressPage main to menuPage");
							tau.changePage("#menuPage");
							break;
						default:
							console.log("BACK KEY STATE IS UNPREDICTABLE: " + pageid);

						}

					});

};
function googleInit() {
	console.log("google was inited");
}