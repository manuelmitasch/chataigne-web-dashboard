# Chataigne Web Dashboard

This project is a web dashboard for [Chataigne](http://benjamin.kuperberg.fr/chataigne).
It's a Ember.js based javascript client that connects to the Chataigne dashboard websocket. 

## How to use this with Chataigne
* Copy the "dist" folder into your Chataigne Document folder (on Windows: %USERPROFILE%\Documents\Chataigne)
* Rename the "dist" folder to "dashboard". 
* Start Chataigne
* Enable the Dashboard Server in the Chataigne "Project Settings"
* Create a Dashboard and add some parameters to it (right-click "Send to Dashboard"). 
* Open a browser and navigate to "http://localhost:9999"


## Contributing and Building on your own

### Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

### Installation

* `git clone <repository-url>` this repository
* `cd chataigne-web-dashboard`
* `npm install`

### Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* The dev server expects that the chataigne web socket is running on port 9999.

### Building

* `ember build` (development)
* `ember build --environment production` (production)


