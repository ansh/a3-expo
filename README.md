# a3-expo

This is an Expo app that has _my_ personal preferences expressed in it. Particularly, I want to use this as a starter kit for most projects. It is _very_ opinionated.

## Technologies used
- Expo v49
- React Navigation v6 (I'm looking to switch this to `expo-router` by @evanbacon soon)
- Reanimated v3
- React Native Gesture Handler v4
- Firebase JS v9



## Features
### Important
- [x] Runs on Expo Go
- [x] Tabs
- [x] Typed Root Navigator
- [x] Styling primitives
  - [x] Dark + Light mode
  - [x] `createUseStyles` to create styles with theme, colors, layout, and typography primitives
    - [x] Color primitives with Radix UI colors built-in
    - [x] Font primitives with a styled `Text` component
    - [x] Layout primitives
- [ ] Firebase Auth
  - [ ] Phone Auth with country picker and detection
  - [ ] Google OAuth on iOS + Android
  - [x] Apple OAuth on iOS
- [ ] Error handling with React Error Boundary
- [x] Prettier setup
- [x] ESLint setup
  - [x] Auto-organize imports by type via ESLint plugin
  - [x] ESLint plugin for React Hooks (avoid pitfalls with useEffect etc)
  - [ ] ESLint plugin to catch declaring a component inside a component which is the cause of a lot of re-renders (eg: in FlatList renderItem)


### Optional
- [ ] Minimal global state management built with Mobx
- [ ] Aliased imports
- [ ] Built-in components
  - [ ] Instagram Discover and Netflix style page open animation
  - [ ] Minimal bottom sheet built on top of React Navigation modal
  - [ ] Dropdown component (with https://github.com/enesozturk/react-native-hold-menu)
  - [ ] Native toasts component (with https://github.com/backpackapp-io/react-native-toast or https://github.com/calintamas/react-native-toast-message)
  - [ ] Long list with `FlashList` (https://docs.expo.dev/versions/latest/sdk/flash-list/)
  - [ ] Simple animations with https://github.com/nandorojo/moti
  - [ ] Simple `Button` component that is an opinionated `Pressable`
  - [ ] Simple `Box` component that is an opinionated `View` (like )
  - [ ] Simple `Text` component that is a slightly more opinionated version of `Text` from react-native
- [ ] Simple `<Provider />` flow to easily add or remove features
- [ ] A demo of shared element transitions


Cannot be included in the Expo Go version:
- [ ] OTA update handler with EAS
- [ ] E2E tests with Maestro



## Getting started

### Firebase setup
1. Create a Firebase project
2. Create a web app
3. Download a config file and copy the contents into `.env`

#### Sign-in with Apple
We will be followithing [this guide](https://docs.expo.dev/versions/latest/sdk/apple-authentication/)
1. Enable Sign-in with Apple in Firebase
2. Create an Apple Developer account
3. Make sure you have a `scheme` in `app.json` and follow the setup for the `expo-apple-authentication` package
4. If using Expo Go, use the `host.exp.Exponent` bundle identifier in Firebase in the Services ID field
5. If using a standalone app, use the bundle identifier in the `scheme` field in Firebase in the Services ID field
6. For development, you will be fine, but when publishing the app you need to enable the `Sign in with Apple` capability in Apple Developer website
