![logo](https://github.com/mmmajder/booking-knowledge-based-systems/assets/91467463/821d338e-18a7-43f4-8c1b-cccc2c2dd5e2)
# Booking web app

This is an application similar to a Booking. Utilizing Drools rules, various conveniences and discounts are defined, along with flight and hotel recommendations based on the number of website visitors and similar factors. Additionally, flight recommendations with layovers are provided. 
Principles of **forward chaining**, **backward chaining**, **rule templates**, and **Complex Event Processing (CEP)** have been employed in its development.

Pre requirements:
- Node.js
- Angular 15+
- JDK version 11
- PostgreSQL

Backend:
- Model project
- Kjar project(drools rules)
- Service project(controllers, services and repositories)

Setup:
- Open Model application in InteliJ IDE
  - Maven run Clean
  - Maven run Install
- Open Kjar application in InteliJ IDE
  - Maven run Clean
  - Maven run Install
- Open Service application and run BackwardServiceApplication.java

Frontend:
- Open frontend folder in desired IDE
- Run npm install in terminal to install dependencies
- Run ng serve in terminal to start application
