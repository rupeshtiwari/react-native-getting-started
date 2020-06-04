# React Native Getting Started

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

#### Learning

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
