# JWAliveMVP

Initial React Native bootstrap for the Jurassic World Alive MVP concept.

## Getting Started

```bash
npm install
npm run ios # or npm run android
```

## Directory Structure

- `App.js` – Entry point configuring navigation and global context.
- `screens/` – Screen components for Map, Collection, and Battle tabs.
- `components/` – Shared UI components (currently empty placeholder).
- `data/` – Static data such as mock map locations.
- `utils/` – Utilities including the global `AppContext` provider.

## Navigation

The project uses React Navigation with a bottom tab navigator that nests native stacks per tab. Tabs include Map, Collection, and Battle flows within a `NavigationContainer`.

## Location & Mock Data

`react-native-maps` and `@react-native-community/geolocation` are included. During development, default coordinates (San Francisco) and markers from `data/mockLocations.js` act as mock GPS data. Replace or extend these fixtures when wiring real location events.

## Native Setup Notes

- **iOS**: Install CocoaPods dependencies with `cd ios && pod install`. Ensure `NSLocationWhenInUseUsageDescription` is set in `Info.plist` for geolocation access and enable Google Maps SDK keys if switching map providers.
- **Android**: Update `android/app/src/main/AndroidManifest.xml` with `ACCESS_FINE_LOCATION` permission and configure Google Maps API keys in `android/app/src/debug/AndroidManifest.xml` and `release`. Follow the [react-native-maps installation docs](https://github.com/react-native-maps/react-native-maps) for gradle setup.
- **Reanimated**: Add the Reanimated babel plugin (already configured) and enable the JSI setup as described in the library documentation.

AsyncStorage persists context state across app launches via the `STATE_STORAGE_KEY` namespace.
