//import axios from "axios";
import "./styles.scss";

//2fagixy1rxd8utqq1i4l3fbn
//jhyvi0fgmnuxvfv0zjzorvdn
//9rpdpo4ylh67zcyc2d16zrc6
window.onload = () => {
	new Vue({
		el: "#app",
		mounted: function () {
			Gp.Services.getConfig({
				serverUrl: "/autoconf.json",
				callbackSuffix: "",
				onSuccess: function (response) {
					let map = Gp.Map.load("app", {
						center: {
							x: 2.445286,
							y: 46.1310096,
							projection: "CRS:84",
						},
						zoom: 7,
						layersOptions: {
							"GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN-EXPRESS.STANDARD": {},
						},
						controlsOptions: {
							search: { maximised: true },
							mouseposition: {},
							overview: {},
							route: {},
							length: {},
							boostrelief: {},
							layerswitcher: { maximised: true },
						},
						mapEventsOptions: {
							mapLoaded: (evt) => {
								let layers = {};
								for (let key in response.layers)
									layers[response.layers[key].name] = { visibility: false };
								map.addLayers(layers);
							},
						},
					});
				},
			});
		},
	});
};
