## React Native Getting Started

### Environment Setup

https://gist.github.com/rupeshtiwari/0ceac298d709941310cfb91ce36c1a6b

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
 
