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
        'My favorite video games are FIFA, The Last Of Us and Batman Arkham Knight.',
        'I have used 6 major operating systems. They are Microsoft Windows, Linux (Ubuntu), MacOS, iPadOS, Android, and iOS.',
        'I developed my first android app at the age of 18 before entering the university.',
        'I graduated from high school at the age of 16.',
        'My favorite movies are the 23 Marvel Cinematic Universe films, Kingsman, and The Pirates of the Caribbean.',
        'My best musician is Ed Sheeran.'
    ]

    // Pick a random fact.
    const fact = facts[Math.floor(Math.random() * facts.length)];

    // Add it to the page.
    const factsContainer = document.getElementById('facts-container');
    factsContainer.innerText = fact;
}


/** Fetches the current date from the server and adds it to the page. */
async function showServerTime() {
  const responseFromServer = await fetch('/date');
//   const responseFromServer = await fetch('Saturday 6th March, 2021');
  const textFromResponse = await responseFromServer.text();

  const dateContainer = document.getElementById('date-container');
  dateContainer.innerText = textFromResponse;
}
