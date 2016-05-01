# CRATE

##### CRATE is a web application for collecting and organizing your personal record collection. We wanted to take the ideas and database of discogs.com and create a more intuitive and user-friendly UI for viewing and accessing your record collection.

March 11, 2016

##### By Molly Curtin, Lauryn Davis, Jeff Seymour, Eddie Duro, Yvonna Contreras and Erik Tolentino.

### Description

CRATE is a responsive website for collecting, viewing, organizing and adding to or deleting albums from your record collection.


##### Technologies Used

* HTML
* SCSS
* PHP
* Composer
* Twig
* PHPMyAdmin
* Apache
* PHPUnit
* Silex
* Google Fonts
* Font Awesome
* Discogs API

CRATE can be viewed at http://crate-app.herokuapp.com 
or
####Install CRATE locally by cloning this repository:

https://github.com/patternandshape/crate.git
@epicodus~~~~~~~~~
* From terminal, enter "mysql.server start" to start the MySQL servers and enter mysql shell
* Next enter "mysql -uroot -proot" to set username and password for PhpMyAdmin

* From bash terminal, enter "apachectl start" to start PhpMyAdmin
@home~~~~~~~~~~~~
* download MAMP if you don't already have it on your computer. // https://www.mamp.info/en/ follow instructions for your OS.

* start MAMP application.
* enter "mysql -uroot -proot" to set username and password for PhpMyAdmin

* In browser, type "localhost:8080/phpmyadmin"
  - or go to preferences to see which port MySql is using. Might be localhost:8888/phpmyadmin.
* If prompted, both your username and password are "root"

* From PhpMyAdmin, import "discogs" and "discogs_test" databases included in crate folder

* From mysql shell in terminal, enter "USE discogs;" to enter database

* From bash terminal, run "composer install" while in project root folder

* From bash terminal, enter "php -S localhost:8000" while in the web folder

* To view, type "localhost:8000" in browser


#### Known Bugs
* Some records will add multiple copies to your collection, and not display message about already being in your collection
* My Collection not hidden when not logged in to site
* Media queries a bit muddled on older iPhone models

##### License

*This software is licensed under the MIT license.*

&copy; 2016 **Molly Curtin, Lauryn Davis, Jeff Seymour, Eddie Duro, Yvonna Contreras and Erik Tolentino**
