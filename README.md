# hackaplant

## Inspiration
The idea originated from the future Polytechnique ST Aquapoly at Polytechnique Montreal, which aims to make hydroponics accessible to everyone. For this purpose, we need to automate as much as possible and to reduce the prices.

We decided to take action against climate change and one of its leading challenges : how to feed the whole planet while using less precious area. Indeed our model for producing food is extremely pollution enclined, and without any drastic changes on the way people think to eat, we cannot make progress towards our green goals.

Hydroponics are a great way to self-sustain, take control of what we eat and diminish our carbon footprint as a society.

## What it does
Our app is aimed at the individuals who want to grow their own plants. It's a mobile app that offer it's users the possibility to get informations on the plants they own and the potential diseases they may suffer from and how to heal them.

The project is composed of a mobile app bundled with an embedded system. The embedded system gives information on the physical state of the Hydroponics system, sends data to a database. The database then treats the information through the use of image recognition Artificial Intelligence neural network. The treated data is then forwarded to the mobile app for the user to read and take plant-specific app-recommended actions for a safer and better Hydroponics system.

Through education and user-friendlyness, Hackaplant empowers young and old people in order to take concrete action in reducing their carbon footprint. As a side bonus, it is a cheaper way of consuming food overall.

## How we built it
We used an API called Plant.id which analyses a plant photo which is sent from the phone gallery or taken on the spot and send back data concerning the plant itself and the possible diseases they might have. We used React Native paired with expo to develop an intuitive and state of the art mobile app. In the backend we used Firebase to store data and communicate with a microcontroller which can send photos of a plant at regular intervals.

## Challenges we ran into
Most of us didn't know how to code using React and Firebase so we had to understand the syntax and the way to code these types of app. We also didn't know each other apart from two of us so we had to learn how to work in cohesion to build a good project as a Team.

## Accomplishments that we're proud of
We came up with a great concept in touch with our personal beliefs. We created a fully functional and well designed full-stack web application with technologies most of us didn't know. We participated in activities/workshops from the Hackathon together.

## What we learned
We learned a new framework and how to develop a mobile app with it. We learned how to communicate with a microcontroller using firebase and http requests. Finally we learned to use an existing api and make it useful for our personal purposes.

## What's next for HackaPlant
We plan to update the application with a logs system to keep track of the plants growth and monitor other variables like pH or EC to make a hydroponics/aquaponics system fully autonomous.
