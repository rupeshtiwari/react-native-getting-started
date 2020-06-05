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


