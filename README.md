# Pomodoro Timer - React Native

### Requirements
- `npm` and `node` installed in your system
- `expo` app in your android or IOS phone (recommended)

### Setup
- Clone repo using `https://github.com/Aadhieaswar/Pomodoro-Timer-React-Native.git`
- Do `npm install -g expo-cli` if you don't have `expo-cli` installed in your machine
- `cd` into the cloned repo and run `npm install`
- Run start scripts from the following:
  - `npm start`: provides a QR code which you can scan from your phone to view the app in the expo app (recommended)
  - `npm android`: starts the app in the android studio's virtual device
  - `npm ios`: starts the app in ios device emulator (only works in mac)
  - `npm web`: starts the app in the web browser view

### Files and Directories
- The crucial files in the repo home directory are:
  - `App.js`: the file that is run to view the app
  - `package.json`: consists of all the dependencies and the run scripts for the app
  - `timer.js`: consists of the react component for the timer and the necessary methods to run it
  - `part.js`: consists of the react component for a minute and seconds timer
  - `utils`: this directory consists of vibrate function for the pomodoro timer
  - `assets`: this directory consists of all the images for the splash screens and such

### Feature
###### Set timer for a certain work time and break time to alternate between work and break regularly (Pomodoro Timer)

### Credits
- Harvard CS50 for this idea of a wonderful project.
- Implemented by __Aadhieaswar Senthil Kumar__
    - Contact me at: <aadhieaswar@gmail.com>
