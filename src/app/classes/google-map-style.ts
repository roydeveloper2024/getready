export class GoogleMapStyle {

	getRetro(){
		return [
		  {
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#ebe3cd"
		      }
		    ]
		  },
		  {
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#523735"
		      }
		    ]
		  },
		  {
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#f5f1e6"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative",
		    "elementType": "geometry.stroke",
		    "stylers": [
		      {
		        "color": "#c9b2a6"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative.land_parcel",
		    "elementType": "geometry.stroke",
		    "stylers": [
		      {
		        "color": "#dcd2be"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative.land_parcel",
		    "elementType": "labels",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative.land_parcel",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#ae9e90"
		      }
		    ]
		  },
		  {
		    "featureType": "landscape.natural",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#dfd2ae"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#dfd2ae"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "elementType": "labels.text",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#93817c"
		      }
		    ]
		  },
		  {
		    "featureType": "poi.business",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "poi.park",
		    "elementType": "geometry.fill",
		    "stylers": [
		      {
		        "color": "#a5b076"
		      }
		    ]
		  },
		  {
		    "featureType": "poi.park",
		    "elementType": "labels.text",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "poi.park",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#447530"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#f5f1e6"
		      }
		    ]
		  },
		  {
		    "featureType": "road.arterial",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#fdfcf8"
		      }
		    ]
		  },
		  {
		    "featureType": "road.arterial",
		    "elementType": "labels",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#f8c967"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway",
		    "elementType": "geometry.stroke",
		    "stylers": [
		      {
		        "color": "#e9bc62"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway",
		    "elementType": "labels",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway.controlled_access",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#e98d58"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway.controlled_access",
		    "elementType": "geometry.stroke",
		    "stylers": [
		      {
		        "color": "#db8555"
		      }
		    ]
		  },
		  {
		    "featureType": "road.local",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "road.local",
		    "elementType": "labels",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "road.local",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#806b63"
		      }
		    ]
		  },
		  {
		    "featureType": "transit.line",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#dfd2ae"
		      }
		    ]
		  },
		  {
		    "featureType": "transit.line",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#8f7d77"
		      }
		    ]
		  },
		  {
		    "featureType": "transit.line",
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#ebe3cd"
		      }
		    ]
		  },
		  {
		    "featureType": "transit.station",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#dfd2ae"
		      }
		    ]
		  },
		  {
		    "featureType": "water",
		    "elementType": "geometry.fill",
		    "stylers": [
		      {
		        "color": "#b9d3c2"
		      }
		    ]
		  },
		  {
		    "featureType": "water",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#92998d"
		      }
		    ]
		  }
		];
	}
	
	getDark(){
		return [
		    {
		        "featureType": "all",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#000000"
		            }
		        ]
		    },
		    {
		        "featureType": "all",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "visibility": "on"
		            }
		        ]
		    },
		    {
		        "featureType": "all",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "color": "#8ec3b9"
		            }
		        ]
		    },
		    {
		        "featureType": "all",
		        "elementType": "labels.text.stroke",
		        "stylers": [
		            {
		                "color": "#1a3646"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative",
		        "elementType": "all",
		        "stylers": [
		            {
		                "color": "#6e98ff"
		            },
		            {
		                "visibility": "on"
		            },
		            {
		                "weight": .5
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.country",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "color": "#4b6878"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.province",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "color": "#4b6878"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.neighborhood",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.land_parcel",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.land_parcel",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "color": "#64779e"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape.man_made",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "color": "#334e87"
		            },
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape.natural",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#000000"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape.natural.terrain",
		        "elementType": "all",
		        "stylers": [
		            {
		                "color": "#000000"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "all",
		        "stylers": [
		            {
		                "color": "#000000"
		            },
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#283d6a"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "color": "#6f9ba5"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "labels.text.stroke",
		        "stylers": [
		            {
		                "color": "#1d2c4d"
		            }
		        ]
		    },
		    {
		        "featureType": "poi.business",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "poi.park",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#023e58"
		            }
		        ]
		    },
		    {
		        "featureType": "poi.park",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "color": "#3C7680"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "all",
		        "stylers": [
		            {
		                "weight": 0.5
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#6f98ff"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "color": "#98a5be"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "labels.text.stroke",
		        "stylers": [
		            {
		                "color": "#1d2c4d"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#2c6675"
		            },
		            {
		                "weight": 0.5
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "color": "#255763"
		            },
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "color": "#b0d5ce"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "labels.text.stroke",
		        "stylers": [
		            {
		                "color": "#023e58"
		            }
		        ]
		    },
		    {
		        "featureType": "road.local",
		        "elementType": "all",
		        "stylers": [
		            {
		                "color": "#6e98ff"
		            }
		        ]
		    },
		    {
		        "featureType": "transit",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "transit",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "color": "#98a5be"
		            }
		        ]
		    },
		    {
		        "featureType": "transit",
		        "elementType": "labels.text.stroke",
		        "stylers": [
		            {
		                "color": "#1d2c4d"
		            }
		        ]
		    },
		    {
		        "featureType": "transit.line",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#283d6a"
		            }
		        ]
		    },
		    {
		        "featureType": "transit.station",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#3a4762"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#0e1626"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "color": "#4e6d70"
		            }
		        ]
		    }
		];
	}

}
