# Road to Utopia
![License](https://img.shields.io/badge/License-MIT-blue)

## Description
You are a traveler journeying through a post-apocalyptic world attempting to bring peace and unite two remaining pockets of humanity. Along the way, you must choose correctly between multiple answer prompts to avoid death in this world and complete your mission!

This interactive text-based game was created as a collaborative project combining front-end and back-end technologies and utilizing the MVC paradigm learned in the UT bootcamp. NodeJS and ExpressJS were used to create a RESTful API, with HandlebarsJS acting as the template engine. MySQL and Sequelize ORM were used to create a database for user info. 

Additionally, the project utilizes environment variables with a .env file (ignored in the gitignore file), and deployed on Heroku. Twinery was used to visualize the story paths.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Contact](#contact)

## Installation
Click the link below to access the text-based game. The app is deployed on Heroku.

https://road-to-utopia.herokuapp.com/

To access the repo, clone the repo using the command git clone with the http address.

The following dependencies will need to be installed:
* [https://nodejs.org/en/](NodeJS)

(Node commands can be used to install the NPM packages below:)
* [ExpressJS](https://www.npmjs.com/package/express)

* [MySQL](https://www.npmjs.com/package/mysql2)

* [Sequelize](https://www.npmjs.com/package/sequelize)

* [HandlebarsJS](https://www.npmjs.com/package/handlebars)

A .env file with hidden environment variables will be needed to use MySQL. Use survival_db as the database name and root for the database user, with the local machine password added in for local machines.

## Usage
Click the link below to access the game.

https://road-to-utopia.herokuapp.com/

Users must create an account to access the game. Upon account creation and login, users can click the button to start the game. 

![homepage](https://user-images.githubusercontent.com/113392613/201420156-6931e1e2-80dc-4630-9f01-d9fd370fe900.png)

Each prompt will offer players 3-4 answer choices. In this version of the game, there is only one correct answer that will lead the player down the path to the next question. Incorrect choices will lead to player death. 

![path1](https://user-images.githubusercontent.com/113392613/201421228-103fe837-ddd9-4ff0-93f5-6de683c010ce.png)

On the death screen, players will be able to view how many deaths they have suffered and be given an option to start over. Once the player has chosen the correct paths to the victory screen, users will have the option to either start over or logout.

![death1](https://user-images.githubusercontent.com/113392613/201421354-f3988f75-9bbe-488f-954f-f9537b2ac8b6.png)


## License
Refer to license in repo or as below:

MIT License

Copyright (c) 2022 pariselectra

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contributions
Creators of this group project and associated GitHub profiles:
* [https://github.com/pariselectra](https://github.com/pariselectra)
* [github.com/mg8955](github.com/mg8955)
* [https://github.com/dkhonenev](https://github.com/dkhonenev)
* [github.com/jimmehhuang](github.com/jimmehhuang)
* [https://github.com/LilOTechGod](https://github.com/LilOTechGod)

Images for the game were AI-generated using [beta.dreamstudio.ai](beta.dreamstudio.ai).

Story map created and visualized using [Twinery](https://twinery.org/).

Shields were generated using [shields.io](shields.io).

## Contact
If you have any additional questions, feel free to reach out via our githubs.
