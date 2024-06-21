import { createEvent, createStore } from 'effector';

export const countryChanged = createEvent<string>();
export const cityChanged = createEvent<string>();
export const universityChanged = createEvent<string>();
export const accommodationChanged = createEvent<string>();

export const $formStore = createStore({
  country: '',
  city: '',
  university: '',
  accommodation: '',
});

$formStore.on(countryChanged, (state, value) => {
  return { ...state, country: value };
});

$formStore.on(cityChanged, (state, value) => {
  return { ...state, city: value };
});

$formStore.on(universityChanged, (state, value) => {
  return { ...state, university: value };
});

$formStore.on(accommodationChanged, (state, value) => {
  return { ...state, accommodation: value };
});
