// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random fun fact about me.
 */
function addFunFacts() {
    const facts = [
        '🎮 My favorite video games are FIFA, The Last Of Us and Batman Arkham Knight.',
        '💻 I have used 6 major operating systems. They are Microsoft Windows, Linux (Ubuntu), MacOS, iPadOS, Android, and iOS.',
        '📱 I developed my first android app at the age of 18 before entering the university.',
        '🏫 I graduated from high school at the age of 16.',
        '🎬 My favorite movies are the 23 Marvel Cinematic Universe films, Kingsman, and The Pirates of the Caribbean.',
        '🎧 My best musician is Ed Sheeran.'
    ]

    // Pick a random fact.
    const fact = facts[Math.floor(Math.random() * facts.length)];

    // Add it to the page.
    const factsContainer = document.getElementById('facts-container');
    factsContainer.innerText = fact;
}

/** Fetches stats from the server and adds them to the page. */
async function getMovieQuotes() {
  const responseFromServer = await fetch('/movie-quotes');
  // The json() function returns an object that contains fields that we can
  // reference to create HTML.
  const stats = await responseFromServer.json();

  // Pick a random fact.
  const favoriteMovieQuotes = stats[Math.floor(Math.random() * stats.length)];

  const statsListElement = document.getElementById('quote-container');
  statsListElement.innerText = favoriteMovieQuotes;
}

/** Creates a map and adds it to the page. */
function initMap() {
  const schoolLocation = { lat: 35.657494863085404, lng: -97.47099028809195 };
  let map = new google.maps.Map(document.getElementById("map"), {
    center: schoolLocation,
    zoom: 16,
    clickableIcons: true,
    fullScreenControl: false,
    fullScreenControlOptions: false,
    mapTypeId: 'roadmap',
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],    
  });

  // The marker, positioned at schoolLocation
  const marker = new google.maps.Marker({
    position: schoolLocation,
    map: map,
    title: "The University of Central Oklahoma"
  });

  // Info window.
  const infowindow = new google.maps.InfoWindow({
      content: '<p id="describe">The University of Central Oklahoma is the Oklahoma\'s oldest institution of higher learning founded in 1890.</p>'
  });

  // Click event listener for the marker.
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}

// Google Chart Implementation
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

/** Creates a chart and adds it to the page. */
function drawChart() {
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Activities');
  data.addColumn('number', 'Count');
        data.addRows([
          ['Assignment/Projects', 45],
          ['Coding', 35],
          ['Reading', 15],
          ['Interview Preparation', 28],
          ['Watching Movies', 6],
          ['Hanging Out/Others', 2],
        ]);

  const options = {
    title: 'My Daily Activity',
    titleTextStyle: { color: 'chartreuse', fontName: 'Comic Sans MS', fontSize: 18, bold: true, italic: true },
    width: 700,
    height: 470,
    is3D: true,
    backgroundColor: '#212529',
    tooltip: {textStyle: {color: 'black'}, showColorCode: true},
    legend: {
        textStyle: { color: 'white' }
    },
  };

  const chart = new google.visualization.PieChart(
      document.getElementById('chart-container'));
  chart.draw(data, options);
}