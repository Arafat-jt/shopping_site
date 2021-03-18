
# Shopping Planet
This is a shopping website made with Ionic in Angular
 ## Objective 
 1. Create a Shopping Dashboard with basic site functionalities such as: login, signup, buy a product, Cart
 2. Successfully communicatewi the the bakcend (link here: https://github.com/Arafat-jt/backend_shopping_site.git) 
 3. Successfully work on the deployed AWS server (link here: http://15.206.181.224/)

## Clone the Repo
  ```
  git clone https://github.com/Arafat-jt/shopping_site
  cd shopping_site
  ```
  
## Requirements 
  
 ### 1. Angular
 Download & install nodejs from https://nodejs.org/en/download/
 
 After successful installation of nodejs
 install Angular cli by typing this in terminal:
 ```
 npm install -g @angular/cli
 ```
 ### 2. Ionic
 If nodejs is not already installed, refer above step 1st
 
 For installation of ionic framework, install the ionic cli globally by running this command:
 ```
 npm install -g @ionic/cli native-run cordova-res
 ```
 ### 3. VsCode
 Just a recommended development platform 
 
 ## Contents
 13 components/modules of ionic 11 out of which are pages of the website
 
 A header, footer module for smooth traversals between pages 
    
   * header has navigation links to all pages and a toggle for light and dark mode
 
 The Home Page displays a list of Best Sellers, Customer reviews
 
 The other pages are Mens,Womens,Jackest, Electronics with their respective product lists in them
 
 There are pages for login, signUp, and edit profile
 
 Also a 'My Cart' page displays your current cart & checkout proccess(its not currently linked with a payment gateway)
 
 and a 'order history' page
 
 ### Api list
 
 
  * Api for adding a product to the Cart of logged in user: http://15.206.181.224/api/addtocart/
  * For accessing all the mens' products: http://15.206.181.224/api/mendb/
  * For accessing all the womens' products: http://15.206.181.224/api/womendb/
  * For accessing all the other accessory products: http://15.206.181.224/api/othersdb/
  * For accessing all the jackets from DB: http://15.206.181.224/api/jacketsdb/
  * This API checks if the user Account exists and logs'em in: http://15.206.181.224/api/userlogin/
  * Returns all the products' list a customer has bought: http://15.206.181.224/api/mycart/
  * Changing profile details in the DB: http://15.206.181.224/api/updateprofile/
  * SignUp user if they are here for 1st time: http://15.206.181.224/api/usersignup/

## Screenshots 

https://drive.google.com/drive/folders/1xNfx1qVLxIYKJTeNROr2ikjkDYJ1qFM0?usp=sharing
