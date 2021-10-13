import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const PersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const reducerItems = createReducer([], {
  [actions.addItem]: (state, { payload }) => [...state, payload],
  [actions.removeItem]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const reducerFilter = createReducer('', {
  [actions.filterItem]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: reducerItems,
  filter: reducerFilter,
});

const store = configureStore({
  reducer: {
    contacts: persistReducer(PersistConfig, contactsReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
