# a3-expo

This is an Expo app that has _my_ personal preferences expressed in it. Particularly, I want to use this as a starter kit for most projects. It is _very_ opinionated.

## Technologies used
- Expo v49
- React Navigation v6 (I'm looking to switch this to `expo-router` by @evanbacon when auth flows are made more stable)
- Reanimated v3
- React Native Gesture Handler v4
- Firebase JS v9



## Features
### Important
- [x] Tabs
- [x] Typed Root Navigator
- [ ] Styling primitives
  - [ ] Dark + Light mode
  - [ ] `createStyles` to create styles with theme
  - [ ] Radix UI colors built-in
  - [ ] SF Pro font built-in
- [ ] Firebase Auth
  - [ ] Phone Auth with country picker and detection
  - [ ] Google OAuth on iOS + Android
  - [ ] Apple OAuth on iOS
- [ ] Error handling with React Error Boundary
- [ ] Minimal global state management built with Mobx


### Optional
- [ ] Aliased imports
- [ ] Built-in components
  - [ ] Instagram Discover and Netflix style page open animation
  - [ ] Minimal bottom sheet built on top of React Navigation
  - [ ] Native dropdowns
  - [ ] Native toasts
  - [ ] Long list with `FlashList`
  - [ ] Simple `Box` component that is an opinionated `View`
  - [ ] Simple `Text` component that is a slightly more opinionated version of `Text` from react-native
- [ ] OTA update handler with EAS
- [ ] E2E tests with Maestro
- [ ] Simple `<Provider />` flow to easily add or remove features
- [ ] Runs on Expo Go
- [ ] Auto-organize imports by type
- [ ] Prettier + ESLint setup

