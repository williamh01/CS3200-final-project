# Food Reviews
by William Hsia

Problem Statement: The problem my project is trying to solve is to facilitate the search for a good restaurant by reading the reviews and ratings.

Solution Satement: The solution I implemented is to have users create reviews to many restaurants and a list of users, reviews, and restaurants can be displayed. In addition, a user or a restaurant can be viewed and their respective reviews are displayed, so all the reviews a user wrote or all the reviews to a restaurant. At any time the user can navigate to the different lists with the option to add, edit, view, or delete. 

Typical user: The typical user would be a user that has a difficult time searching for a restaurant and by using my project, the user's search would be facilitated and faster.

The uml is can be viewed by clicking on db_design_final_project_UML.pdf above.

Description of user data model: The user data model will have the firstName, lastName, username, password, email and dateOfBirth.

Description of the domain object data models: The domain objects are cuisine, restaurant and review. The cuisine object will have a cuisine field that will get user input. The restaurant object will have cuisine and name fields. The review object will have review and rating fields with foreign keys to user and restaurant. 

Description of the user to domain object relationship: The relationship between user and cuisine will be 1 to many and the relationship between user and review will be 1 to many.

Description of the domain object to domain object relationship: The relationship between cuisine and restaurant will be 1 to many and the relationship between review to restaurant will be many to 1.

Description of the portable enumeration(s): There will be one enumaration which will be "ratingLimit" for limiitng the range of rating number from 1 to 5.

Description of the user interface requirements: The user will be able to view all the users, reviews, and restaurants. The user's list can add, edit, view, and delete a user and while viewing a particular user, the list of reviews made from the user is displayed. The review's list can add, edit, and delete a review. The restaurant's list can add, edit, view, and delete a restaurant and while viewing a restaurant, the list of reviews made to the restaurant is displayed. The user can also navigate to a cuisine tab where a cuisine can be inputed and the restaurants will be filtered according to the cuisine. 

The code is in the github branch from this repository called code.

Disclaimer: The code is made in React and using the firebase firestore database. 
