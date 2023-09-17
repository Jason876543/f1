## Getting Started

run the mock server (i mocked as i did not want to put my card details in the sports api, to get round the restrictive limits):

yarn mock

note: the mock provides seasons 2019 and 2020 for teams and drivers

run the development server:

yarn dev

Open [http://localhost:3000](http://localhost:3000) with your browser to view the web page.

## improvements

* spend more time on general polish including things like project structure eg layout
* spend more time on styling. I roughly eyeballed the design and have not acurately matched the figma design. I only designed the page for the desktop sized break point.
* the season buttons should not have margin at the first and last element  
* there would likely be issues with things seasons if there was a large amount of dates.
* the page header should probably be fixed.
* the table might be better if it scrolled instead of the whole page.
* the table could use pagination or infinite scroll to handle large data sets.4
* performance could be improved by using different sized images approriate of the resolution.
* spend more time typing 
* implement storybook
* test 
* the table sorts but does not have a hover over or ability to filter
* improve error handling eg messages
* i only tried the website out on a windows chrome browser, cross platform / browser testing is needed
* lint the project 
