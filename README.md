# Tracker Project:
  
  - This App is a blog-like app where you can write blogs(posts) , edit , delete , show details of them adding the flexiblitiy for future improvements and new features
    
  - Adding the abitlity toggle between screens using navigation stucture (StackNavigator)
  
  
  # Project Structure 
  
  ## App.js 
   -this file creates the app structure by creating app Container and the Navigation structure as well as the state managment whether context(Providers) or redux 
  
  
  ## src folder 
   - api folder
       - axios.js 
          - handles the api requests as well as handling the authentication process 
            
   
   - components folder()
      - Form.js 
     
   
   - context folder 
      -createDataContext.js (responsible for creating Context & blue print for using Context)
      - BlogContext.js(handles the blogs data => posting and fetching requests)
      - AuthContext.js ( handles the athentication process)
      - LocationContext.js (handles  the location data )
      - TrackContext.js ( handles the track's creating, posting and fetching processes)
   
   - hooks
      - costumeHook1.js
      
    
   - screens 
     - IndexScreen.js
     - AddScreen.js
     - EditScreen.js
     - ShowScreen.js
    
 

# Setup
   ```shell script
git clone https://github.com/oi19/react-native/tree/blog
cd blog
```
Run the following command to run your server in  different cmd  inside the track-server folder .

```shell script
npm run dev
```
and
```shell script
npm run tunnel 
```

or
```shell script
   ngrok http 3000
  ```

Run those following commands to run the app in inside the tracker folder.

```shell script
npm start
```
