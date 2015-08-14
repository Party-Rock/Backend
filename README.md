# Backend

# Models
  * **Users:**
    * fname: String
    * lname: String
    * password: String
    * profilePic: String
    * rentedVenues: [{venueId: ObjectId, name: String, rentedDate: Date}]
    * ratingAverage: Number
    * rating: [{grade: Number, comment: String, userId: ObjectId}]
  * **Venues**
    * name: String
    * position:
      * lat: Number
      * long: Number
      * colonia: String
    * description: String
    * imageURL: [String]
    * size: Number
    * capacity: Number
    * rentedDate: [Date]
    * price: Number
    * features: [{feature: String, option: Boolean, _id : false }]
    * ratingAverage: Number
    * rating: [{grade: Number, comment: String, userId: ObjectId}]
* **Reservations** *
    * userId: ObjectId
    * ownerId: ObjectId
    * venueId: ObjectId
    * rentedDate: Date

# Routes

# *Venues*

## GET
* '/'
  * Params Query: size, price or capacity
  * Returns everything that matches the query.
* '/:_id'
  * Params: none
  * Returns single item matching ID

## PATCH
* '/:_id'
 * Params Body: Anything you wish to update.
* '/feature/:_id'
  * Params Body: feature - String, option - Boolean
  * Updates the feature array.

* '/photo/:_id'
  * Params Body: imageURL - String URL for image.
  * Updates the photo array.

* '/rented/:_id
  * Params Body: rentedDate
  * Adds a rented Date to the Venue.

## POST
  * Params Body:
      - name - String, required. Min: 5, Max 30 (Should change?)
      - lat - Number, required. Degrees
      - long - Number, required. Degrees
      - colonia - String, required. Min: 5, Max 30
      - description - String, Max 200
      - size - Number, required. positive defaults to 0
      - price Number, required. positive defaults to 0
      - capacity Number, required. positive defaults to 0

## DELETE
  *  '/:_id'
    -Deletes venue with said ID

## *Users*
## GET
  * '/'
    - Params Query: Any params the User model has.
    - Returns all users or finds users that match the query.

  * '/:_id'
    - Finds user with the id.
## PATCH
  * '/:_id'
    * Params Body: anything you want to update
    * Updates user with selected id

## POST
  * '/'
    * Params Body:
      * fname: String, required. Min: 2 .Max 30.
      * lname: String, required. Min: 2 .Max 30.
      * password: String, required. Min: 2 .Max 30.
## DELETE
  *  '/:_id'
    -Deletes user with said ID


## *Reservations*
  ## GET
  * '/'
    - Params Query: Any params the User model has.
    - Returns all users or finds reservations that match the query.

  * '/:_id'
    - Finds user with the id.

## PATCH
  * '/:_id'
    * Params Body: anything you want to update
    * Updates reservation with selected id

## POST
  * '/'
    * Params Body:
     * userId   MongoDB Id
     * ownerId  MongoDB Id
     * venueId  MongoDB Id
     * rentedDate Date, required
## DELETE
  *  '/:_id'
    -Deletes reservation with said ID
