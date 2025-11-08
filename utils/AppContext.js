import React, {createContext, useContext, useReducer, useEffect, useMemo, useRef} from 'react';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  location: {
    latitude: 37.7749,
    longitude: -122.4194,
    accuracy: null,
    timestamp: Date.now(),
  },
  collectedDinosaurs: [],
  dnaTotals: {},
  coins: 0,
};

const AppContext = createContext({
  state: initialState,
  dispatch: () => undefined,
});

function reducer(state, action) {
  switch (action.type) {
    case 'SET_LOCATION':
      return {
        ...state,
        location: action.payload,
      };
    case 'ADD_DINOSAUR':
      if (state.collectedDinosaurs.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        collectedDinosaurs: [...state.collectedDinosaurs, action.payload],
      };
    case 'UPDATE_DNA': {
      const {species, amount} = action.payload;
      const current = state.dnaTotals[species] || 0;
      return {
        ...state,
        dnaTotals: {
          ...state.dnaTotals,
          [species]: current + amount,
        },
      };
    }
    case 'ADD_COINS':
      return {
        ...state,
        coins: state.coins + action.payload,
      };
    case 'RESET_COLLECTION':
      return {
        ...state,
        collectedDinosaurs: [],
        dnaTotals: {},
      };
    case 'HYDRATE':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

const STATE_STORAGE_KEY = 'JW_ALIVE_MVP_STATE';

export function AppProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const hasHydrated = useRef(false);

  useEffect(() => {
    AsyncStorage.getItem(STATE_STORAGE_KEY)
      .then(stored => {
        if (stored) {
          const parsed = JSON.parse(stored);
          dispatch({type: 'HYDRATE', payload: parsed});
        }
      })
      .catch(() => {
        // noop - default state will be used
      })
      .finally(() => {
        hasHydrated.current = true;
      });
  }, []);

  useEffect(() => {
    if (!hasHydrated.current) {
      return;
    }

    AsyncStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(state)).catch(() => {
      // noop - storage failures are non-blocking
    });
  }, [state]);

  useEffect(() => {
    if (typeof Geolocation.requestAuthorization === 'function') {
      Geolocation.requestAuthorization('whenInUse');
    }

    const watchId = Geolocation.watchPosition(
      position => {
        const {coords, timestamp} = position;
        dispatch({
          type: 'SET_LOCATION',
          payload: {
            latitude: coords.latitude,
            longitude: coords.longitude,
            accuracy: coords.accuracy,
            timestamp,
          },
        });
      },
      () => {
        // ignore errors; rely on mock data instead
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 10,
      },
    );

    return () => {
      if (watchId != null) {
        Geolocation.clearWatch(watchId);
      }
    };
  }, []);

  const value = useMemo(() => ({state, dispatch}), [state]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}

export const actions = {
  setLocation: payload => ({type: 'SET_LOCATION', payload}),
  addDinosaur: payload => ({type: 'ADD_DINOSAUR', payload}),
  updateDna: (species, amount) => ({type: 'UPDATE_DNA', payload: {species, amount}}),
  addCoins: amount => ({type: 'ADD_COINS', payload: amount}),
  resetCollection: () => ({type: 'RESET_COLLECTION'}),
};
