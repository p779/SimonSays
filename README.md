# Simon Says built with React Native

## Stack
- [Node](https://nodejs.org) `4.x` or newer
- [React Native](https://facebook.github.io/react-native/) `0.28.0` for building native apps using react
- [React Native Sound](https://github.com/zmxv/react-native-sound) `0.8.3` sound library for react native

## For Developers

### Requirements
- [Node](https://nodejs.org) `4.x` or newer
- [React Native](http://facebook.github.io/react-native/docs/getting-started.html) for development
- [Xcode](https://developer.apple.com/xcode/) for iOS development
- [Android Studio](https://developer.android.com/studio/index.html) for Android development
- [Android SDK](https://developer.android.com/sdk/) `23.0.2` or newer for Android development
- [Genymotion](https://www.genymotion.com/) for Android emulation
- [Android Lollipop](https://www.android.com/versions/lollipop-5-0/) or newer on your Android device to test properly

See [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to install requirement tools.

### Get the source code
Clone the repo and install node components in package.json
```shell
$ git clone https://github.com/aganita/SimonSays.git SimonSays
$ cd SimonSays
$ npm install
```
Follow instructions for [react native sound](https://github.com/zmxv/react-native-sound/blob/master/README.md) to make the sound working 


### Start the emulator and developent enviroment
```shell
$ react-native run-android
```

### Debugging
[Access the in-app developer menu](https://facebook.github.io/react-native/docs/debugging.html) and select ``Debug in Chrome``.
To get to the developer menu on the ios emulator, press Control-D inside the emulator screen.  Then, turn on hot reload.

To get to the developer menu on the android emulator, just press Control-M inside the emulator screen.  Then, turn on hot reload.

### Create a release build
* Run in terminal :
```shell
$ npm run build-android
```


