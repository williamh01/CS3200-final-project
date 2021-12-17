# Food Reviews
by William Hsia

The project will get user input on a cuisine and a restarant's dish from that cuisine. The user can also input a review for the restaurant's dish by giving a rating and writing a review.

The uml is in the zip file 

Description of user data model: The user date model will have the firstName, lastName, username, password, email and dateOfBirth.

Description of the domain object data models: The domain objects are cuisine, restaurant and review.

Description of the user to domain object relationship: The relationship between user and cuisine will be 1 to many and the relationship between user and review will be one to many.

Description of the domain object to domain object relationship: The relationship between cuisine and restaurnat will be one to many and the relationship between review to restaurant will be many to one.

Description of the portable enumeration(s): There will be two enumarations which will be "type" of cuisine and "ratingLimit" for limiitng the range of rating number

Description of the user interface requirements: The user will be able to select a cuisine from the type enum and input a restaurant and dish and hen write a review for the restaurant's dish. The user can also see all the reviews for all the restaurants in all the cuisines.

The code is in the github branch from this repository called code.
