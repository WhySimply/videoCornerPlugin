# Vidéo Corner Plugin

Move a youtube video to the top right when scroll.

## Getting Started

This plugin was developed as part of my studies in Bac +3, it takes up the concept of the new system of facebook. That allows you to continue to play a video (only youtube at the moment) when you go down the page.

### Prerequisites

you simply need Jquery
https://code.jquery.com/jquery-3.2.1.min.js

### Installation

1. Surround the iframe of your youtube video with a div
2. made the link between your page and the plugin.js file, like this: 
 ```html
 <script src="plugin.js"></script>
 ```
 3. put a div containing an ID around the iframe of your youtube video
 ```html
<div id="myVideo">
    <iframe width='560' height="315" src="https://www.youtube.com/embed/P747cFg9y6Q" frameborder="0" allowfullscreen></iframe>
</div>
 ```
## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)
