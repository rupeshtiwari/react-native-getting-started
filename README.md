## React Native Getting Started

### Chapter-1 Environment Setup

https://gist.github.com/rupeshtiwari/0ceac298d709941310cfb91ce36c1a6b

#### Running app

- npm i ( Insalling root packages)
- cd server and run npm i (installing server npm packages)
- npm run server (running server)
- npm run android (running client)

#### Benefit of Yarn

- Very fast than npm
- No need to say npm run scrip-name
  - npm run android
  - yarn android

#### Components that we will learn from React-Native are:

- **AsyncStorage**

  - View = <div />
  - Text = <p />
  - StyleSheet
  - ScrollView
  - FlatList
  - Image
  - TextInput = <input>
    - Multiline input
  - TouchableHighlight
  - TouchableOpacity,
  - TouchableWithoutFeedback
  - ActivityIndicator
  - AsyncStorage

- **3rd Parties:**
  - createStackNavigator
  - createBottomTabNavigator
  - Modal Screen
  - KeyboardAwareScrollView
  - FontAwesome
  - Constants

#### Extra Learning while doing this course

- Flex Styles for Components
- Target platform components ( ios and android)
- Running server
- Live running app on android mobile

#### What u should not do

#### New stuff from React-V5 to react native

https://reactnavigation.org/

- Stack Navigator
  - passing data
  - fetching data
  - stack navigation configuration
  - Overriding navigation options from components.
  - How to know which device we are running like emulator or real phone
  -

#### Tips for react-native development

- Use Expo
- Always refer to Expo Snacks for live latest examples while writing code.
- React-Navigation 5 APIs are very different.
- https://reactnavigation.org/

#### Tips on android emulator

- Bugs in android emulators
  - Relod is not working it keeps spinning for ever.
  - Everytime u reload then u need to kill app and restart.
- **If app is keep spinning then do what?**

  - check for errors in chrome dev tool
  - Revert your recent changes and go back to the change when your app was working. Restart app and then do one by one change and try to find out which line of code is breaking your app.
  - or stop process and again run android from terminal.
  - kill the aapp instances from android simulator, go to expo chrome page and click on run on `Run on Android device/emulator`
  - or kill all the app instances in android simulator phone, kill all the vs code terminal running android script and then rerun `yarn android`.

#### When you install new package\*\*

- Before installing any npm package
  - stop server by killing any running process in vs code terminal
  - stop android by killing any running process in vs code terminal
- then run `npm start` again

#### Why Expo?

- React Native will not give you official libraries for other features.
- Expo has large set of inbuild official libraries tested works great compare to other 3rd party libraries.
- No linking requirement ( React Native is working on this also)
  When you install any native npm package you have to manually link your react-native
  to that npm package by running linking command. That some times doesnot work. However, Expo does it out of the box if you use `expo install` command to install one of the expo packages.
- Example in order to know if you are in simulator or not you have ton install 3rd party which sometimes not working installation is also not that easy. However with expo it is very fast installation and it worked too!

- I prefer to use expo that is why

### Chapter-2 Display formated text

- only Text can be nested within the Text component.
- Any Text you want toshow should be within Text component only.

### Chapter-3 Layout React Native Component With FlexBox

- Create Restaurant constant and render views
- Info Button right & text and address in middle
- Default flex direction is column. On the web it is row
- Use FlexDirection Row for Restaurants
- Change Name & Address stack as column
  - Take most of the realstate
- Name, number, info they take equal amount. Adjust them
- Flex styles are only applied on view not in text.

### Chapter-4 Style Components in a React Native App with StyleSheet

- unless react web styles in react-native are inside a javascript object.
- Style keys are in camel cases.
- Styles can be overritten
  - `style={[styles.row,{ backgroundColor:index%2===0?'white':'#F3F3F7' }]}`
- Create a style JS file and use in component

### Chapter-5 Accept User Input with RN TextInput

#### Requirement

- Create Search Box
- Filter Restaurant by live search
- Add placeholder text
- Display the restaurant if
  - search text is blank
  - OR the search text match with name of restaurant.

#### Learning

- Styling `border` is different than react in react native. You have declare `borderWidth` and `borderColor` separately.
- `onChange` prop is in react component. However in React Native component you have `onChangeText` prop and nice thing is it will give u the `text` in the callback instead of `event` like in react component.
-

### Chapter-5 Write Console Log

#### Requirement

- Enable Developer Menu on android simulator
- Debug in Chrome
- Show console logs in chrome dev tool
- Disable Yellow log on app
- How to log errors
- Show the stack trace, open the line number of the error occurred.

#### Learning

- How to Debug on Chrome devtool
- How to disable yellow log on app
- How to log errors.
- How to enable developer menu by in android simulator?
- how to open developer menu in android emulator?
- How do I shake in android simulator?
- How to send the keyboard shortcut to virtual device on android simulator?

* How to enable Developer option?  
  Answer:

  - Control M on window
  - Shake the simulator

* Go to Phone Settings
  - About Emulated Device
  - Build Number
    - Tap on Build number option 7 times and then developer options and then a toast will be shown saying “You're now a developer.”

- How to enable shortcut key forwarding to Virtual device?
- ![](https://i.imgur.com/WYytrll.png)
- Now If you click `Control M` then it should show the option for developer.

Currently there is a bug in android emulator it does not show developer menu with `CTRL M`
So run below script to open developermenu

`adb shell input keyevent 82`
![](https://i.imgur.com/RdzEqbI.png)

`console.disableYellowBox = true;`

### chapter-7 Use debugger in react native app

#### Learning

- How to activate debugger
- How to investigate bugs?
- How to see all the values in current scope
- Test certain variable value
- Change their value and render live in App
- How to add a watch statement
- How to automatically pause on exception.
- Scope pane in debugger
- add debugger in code
- put break point on the chrome tool to

### Chapter-8-style-differently-for-ios-and-android

### Requirement

- Style different for ios and android

### Learning

- How to use react-native platform to decide ios or android
- How to use single style for ios and android
- Creating style files for ios and android and how platform picks the file automatically
- How to create 2 components and let platform render based on the ios or android device?

`Platform.OS === 'ios' ? { padding: 20, paddingTop: 30 } : {},`

### Chapter-9-Folder-Structure-In-React-Native-App

#### Requirement

- Organize components
- Organize Styles
- Do not use absolute paths

### Chapter-10-Scroll-Elements-on-React-NativeScreen-ScrollView

#### Requirement

- Add scrolling to the list
- Dont scroll header and search text.
- While scrolling till end make sure you dont show the space between first row and the search text.

#### Learning

- `contentContainerStyle` of scrollview
- Performance is poor when you want to load large list using `scrollView`

### Chapter-11-Display-List-Using FlatList

#### Requirement

- Render item on demand when u scroll the view.
- Reduce Flicker while u scroll

#### Learning

- `scrollView` loads entire view in the memory and slows down the app good for 20-30 items
- each item directly render inline in `scrollview`
- `flatlist` designed to performance for 100 or 1000 of items.
- `flatlist` progressively loads the items
- `flatList` it recycles the view so it lowers the memory footprints as you scroll.

### Chapter-12 Make Touchable button React Native

#### Requirement

- Create info button
- Show Restaurant details on info button click
- Create fully customizable styled button.
- styled button and styled viiew toggle on and off

#### Learning

- The React Native Button works fine but it is not fully custamizable. It has not many configuration options.
- Therefore, we should use fullly customizable touchable buttons like
  - TouchableOpacity
  - TouchableHighlight
  - TouchableWithoutFeedback
- In React you can use label and style it and make your own button
  However in React-Native not every element is touchable.

- **TouchableOpacity**

  - Restrictions: We can not style the Text within TouchableOpacity
  - Therefore, remember to style your text separately.
  - It changes the opacity as you click to give feeling that it is clicked.
  - As you tab opacity changes.
  - From user experience point of view much exciting.

- **TouchableWithoutFeedback**
  - Styles does not work in this button
  - When you tap on them no feedback no opacity change nothing
  - From user experience point of view not that much exciting.
  - Use it when you want: "No automatic visual feedback"
- **TouchableHighlight**
  - It changes the color of the button as u tap
  - This button is vastly used everywhere.
  - Very easy to tap when you use in your mobile phone.

### Chapter-13-fetch-data-from-server-in-react-native-using-fetch-or-axios

#### Requirement

- get data from server and show
- make sure server call is also working in emulator and mobile.

#### Learning

- ios simulator localhost works
- android emulator it has its own ip adress so `localhost:3000` wont work.
- `http://rupesh-home-pc:3000/restaurants` will work on mobile
  while debugging from expo
- `http://10.0.2.2:3000/restaurants` will work on your computer when you are debugging in android simulator.
- **How to know if you are running app in emulator?**

  - **Option 2 use 3rd party library**
  - We will use `npm install --save react-native-device-info` to know if code is runnning on emulator or not.

    - Run `react-native link react-native-device-info` in the project root.
    - Run `npm start`

  - **Option 2 use expo contants library**
    - Run `expo install expo-constants`
    - I will use this!

- **Fetch has problems with cookies on react native. Therefore, we should use `axios`**
  - works nice with cookies
  - it parses the response to json out of the box.

### Chapter-14-Display Remote and Local Image

#### Requirement

- Display image from local folder
- Display image from server which is not in the source code bundle

#### Learning

- We need `Image` component to render image.
- In React Native image will not load
  unless you define the dimensions of the images.

### Chapter-15 Add Icons using expo vector-icons

#### Requirement

- Show the stars for each restaurant

#### Learning

- `expo vector-icons`

### Chapter-16 Show New Screen with React Navigation & StackNavigator

#### Requirement

**Navigation **

- home page show list
- route to info page
- come back to home page
- top navigation.
-

#### Learning

- https://reactnavigation.org/docs/stack-navigator/
- In order to make stack working run below scripts
- Run `yarn add @react-native-community/masked-view @react-navigation/bottom-tabs @react-navigation/native react-native-safe-area-context react-native-screens @react-navigation/drawer react-native-reanimated @react-navigation/material-bottom-tabs react-native-paper @react-navigation/material-top-tabs react-native-tab-view @react-navigation/stack`
- RestaurantList component will get `{navigation}` as props that has `navigate` method

### Chapter-17 customize stack navigator header

#### Requirement

- Change the header color to blue
- Change header title
- hide default header title

### Chapter-18 Pass Data Between Screens When Navigation With Stack Navigator

#### Requirement

- From Restaurant List pass the place to Restaurant info using navigation object.
- Show the restaurant info page completely.

#### Learning

- How to pass data from parent screen (from screen )
- How to receive data in child screen ( to screen )
- `props.route.params` method
- In order to override the title from component use
  `this.props.navigation.setOptions({title:"Rupesh"});`

### Chapter-19 Add Bottom Tabs to a react native app with react navigation

#### Requirement

- Use React Navigation 5 API
- We want the tab to be alwasy bottom of screen
- Create bottom tabs `list` and `about`
- Each tab should have:

  - `icon` and icon should
  - change colors of icon when it is `active`
  - change the background color of tab icon when `active`

#### Learning

- `yarn add @react-navigation/bottom-tabs`
- How to set initial selected tab index for bottom tabs?
  https://reactnavigation.org/docs/tab-based-navigation/

### Chapter-20 Add a Modal Screen that popup from the bottom with React Navigation

#### Requirement

- From Restaurant Info show `add review` button
- on click `add review` show the modal popup
- Show the close button onmodal popup

#### Requirement

- Modal has to be on top of stack and tab
- Therefore , it has to be root element now.
- Create new stack navigator where you put `tab` and `modal screen`
- `goBack`
- Create Submit form with below elements
  - Name input box
  - Ratings input
  - Review multilineinputbox
  - submit button

### Chapter-21 Ensure Text Fields donot get covered by the on screen keyboard

#### Requirement

- Add Review popup should show
  - review text box
  - name text box
- While typing make sure onscreen keyboard dont hide the review text box

#### Learning

- Multiline input
- `yarn add react-native-keyboard-aware-scroll-view`

### Chapter-22 Show Spinner while Submitting a Form in React Native with ActivityIndicator

#### Requirement

- Submit the review to server
- Show spinner while the user is waiting for response to come from server
- Avoid submitting the form multiple times

### Chapter-23 Save And Retrieve Data on the Device in a React Native App with AsyncStorage

#### Requirement

- Save user name in storage for add review popup

#### Learning

- AsyncStorage

  - AsyncStorage keys are globally shared for your app
  - values are always string not object.
  - get & set from async storage

### Chapter-24 Change the splash screen for iOS Apps built with React Native

Pending...

#### Requirement

- BaseURl that works in ios and android and simulator

### Chapter-25 Change the Splash Screen fo rAndroid Apps built with React Native

#### Requirement

- Show the splash screen while opening app.

#### Learning

- https://docs.expo.io/versions/latest/sdk/splash-screen/
- `expo add expo-splash-screen`
- https://docs.expo.io/guides/splash-screens/?redirected

### Chapter-26 App icon for ios

pending

### Chapter-27 App icon for android

### Chapter-28 Building Standalone Apps using Expo

https://docs.expo.io/distribution/building-standalone-apps/

#### Step 1: Install Expo CLI

Run `npm install -g expo-cli` (or `yarn global add expo-cli`) to get it.

Windows User follow this to install WSL in your machine

https://docs.microsoft.com/en-us/windows/wsl/install-win10

**Install the Windows Subsystem for Linux**

- Open powershell in admin mode
- Run `dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart`
- ![](https://i.imgur.com/Y9j5oa0.png)

**Update to WSL 2**

- Enable the 'Virtual Machine Platform' optional component
- Open PowerShell as Administrator and run:
- Run `dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart`
- ![](https://i.imgur.com/OBF3C3M.png)

**Restart your machine to complete the WSL install and update to WSL 2.**

- Use Admin Powershell to run
  `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux`
  ![](https://i.imgur.com/FH4tQzX.png)

#### Step 2 Configure app.json

make sure `slug` should match pattern `^[a-zA-Z0-9_\-]+\$`.

```json
{
  "expo": {
    "name": "Your App Name",
    "icon": "./path/to/your/app-icon.png",
    "version": "1.0.0",
    "slug": "My_Restaurant_Review",
    "ios": {
      "bundleIdentifier": "com.yourcompany.yourappname",
      "buildNumber": "1.0.0"
    },
    "android": {
      "package": "com.yourcompany.yourappname",
      "versionCode": 1
    }
  }
}
```

#### Step 3. Start the build using Expo

- Run `expo build:android`
- Choose `apk`
- login to expo account
- keystore choose `let expo handle the process!`
- If you see error `ECONNREFUSED 127.0.0.1:19001`
  - Run `expo start -c` which will clear the cache for you and will fix the issue you have.
- It will put u on queue and you have to check your account for build to finish
- ![](https://i.imgur.com/j43q0rJ.png)
- After 8 hours you can download your `apk` file
- ![](https://i.imgur.com/oSwbu1H.png)
- 

### Chapter-29 Building Stand alone app in local machine.

- You Need IOS MAchine for this.

We will use `turtle cli` to build `apk` file for android in local machine.
https://docs.expo.io/distribution/turtle-cli/?redirected

#### Prerequisites

You'll need to have these things installed:

- bash
- node.js (version 8 or newer) [download the latest version of Node.js.](https://nodejs.org/en/)
  **For Android builds**
- macOS or Linux
- [Java Development Kit (version 8)](https://jdk.java.net/)
  **For iOS builds**
- macOS
- Xcode (version 9.4.1 or newer) - make sure you have run it at least once and you have agreed to the license agreements. Alternatively you can run sudo xcodebuild -license.
- fastlane - [see how to install it](https://docs.fastlane.tools/getting-started/ios/setup/#installing-fastlane)

#### Turtle CLI

- Install Turtle CLI by running:
  `$ npm install -g turtle-cli`
- Run `turtle setup:android --sdk-version 30.0.0`
  We are in expo therefore, we will use Expo SDK version of turtle to expedite build process.

If you are not using Expo: Run `turtle setup:android` to verify everything is installed correctly. This step is optional and is also performed during the first run of the Turtle CLI. Please note that the Android setup command downloads, installs, and configures the appropriate versions of the Android SDK and NDK. for ios run `turtle setup:ios`

#### Building for Android

Before starting the build, prepare the following things:

- Keystore
- Keystore alias
- Keystore password and key password

**Creating Keystore key & Password**

- Find `keytool.ex` at "C:\Program Files (x86)\Java\jre1.8.0_251\bin" location.
- ![](https://i.imgur.com/fYyWfaC.png)
- Install JAVA if you dont have [Download java for windows.](https://www.java.com/en/download/)
- Check to see if the keytool command
- Run `cd C:\Program Files (x86)\Java\jre1.8.0_251\bin\`
- Run `.\keytool`
- Then, **generate a new signing key** with `.\keytool -genkey -v -keystore my-release-key.keystore -alias mykeyalias -keyalg RSA -keysize 2048 -validity 10000`
- Enter key **password** as well as the information about who is requesting the key. This will generate a 2048 bit RSA key that you want to make sure to keep private.
- It's also important to back up this keystore file and keep it secure, because if you ever have to change it, you'll have to rerelease your app and lose all the old downloads and ratings on the Play Store.
- ![](https://i.imgur.com/W9h00tl.png)
- It will create `Storing my-release-key.keystore`
- `C:\Program Files (x86)\Java\jre1.8.0_251\bin\my-release-key.keystore`
- ![](https://i.imgur.com/0vmgSWr.png)

**Start the standalone build using TurtleCli**

- Run From Project Root Folder: `yarn android`
- Run From Project Root Folder: `expo export --public-url https://127.0.0.1/dist` (note the /dist path!)
- Run From Project Root Folder:

  ```powershell
  $KEYSTORE_PATH="C:\Full Stack Master\keystore\my-release-key.keystore"
  $KEYSTORE_ALIAS="FullStackMaster"
  turtle build:android --keystore-path $KEYSTORE_PATH --keystore-alias $KEYSTORE_ALIAS --public-url https://127.0.0.1/dist/android-index.json -t apk | tee c:\temp\logs.txt
  ```

However below error is coming:

```
Failed to build standalone app
  err: Error: We don't support running standalone app builds for this platform on your operating system

```


### Chapter 30-Using React native static server
#### Requirement
- replace express server
- Make your app to serv restarurant objects from inline server in mobile app only. 
- This did not work Leaving this chapter as it.