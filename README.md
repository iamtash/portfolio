Portfolio
=========

Introduction
------------
A first attempt at building an eventual portfolio site. The site admin has the ability to create, edit, and delete technical projects, as well as search/filter when viewing projects. Visitors may navigate to Home, About, and Projects pages, and on the projects page may 'like' and search/filter down projects.

Usage
-----
Clone the repository.
```
bundle install
rails db:migrate
```
To use admin functionality, create a user account from the server, then start the server.
```
rails c
User.create(email: 'name@something.com', password: 'password')
exit
rails s -p 3001
```
Open another tab in Terminal.
```
cd client
npm install
npm start
```
Go to http://localhost:3000.

Contributions
-------------
Bug reports and pull requests are welcome, with adherence to the [Code of Conduct](./CODE_OF_CONDUCT.md)

License
-------
The project uses the MIT [License](./LICENSE)

Blog & Video
---------

[Read about what I learned while building this project!](https://iamtash.github.io/react-redux_go_with_the_flow)

[Check out a demo of my app!]()
