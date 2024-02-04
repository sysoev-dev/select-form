import { createEffect, createEvent, createStore, sample } from 'effector';
interface FormStore {
  country: string;
  city: string;
  university: string;
  accommodation: string;
}

const initialState = {
  country: '',
  city: '',
  university: '',
  accommodation: '',
};

export const selectChanged = createEvent<string>();

export const $formStore = createStore<FormStore>(initialState);

const selectEffectFx = createEffect((data: string) => {
  console.log('сработал эффект от selectChanged');
  console.log('data: ', data);
  console.log('store:', $formStore.getState());
  return {
    Страна: data,
  };
});

sample({
  clock: selectChanged, // Указано что срабатывает
  fn: (data) => data.toUpperCase(), // чтоб что-то преобразовать данные из clock. На входе первый параметр данных из клок второй из сурса
  // source - откуда брать данные, если нет то из clock
  target: selectEffectFx,
});

// sample({
//   clock: selectEffectFx,
//   target: $formStore,
// });
