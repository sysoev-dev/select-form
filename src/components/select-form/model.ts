import { createEffect, createEvent, createStore, sample } from 'effector';

const $formStore = createStore<string>('');

const selectEffectFx = createEffect((data: string) => {
  console.log(data);
});
export const selectChanged = createEvent<string>();

sample({
  clock: selectChanged, // Указано что срабатывает
  fn: (data) => data.toUpperCase(), // чтоб что-то преобразовать данные из clock. На входе первый параметр данных из клок второй из сурса
  // source - откуда брать данные, если нет то из clock
  target: $formStore,
});

sample({
  clock: $formStore,
  target: selectEffectFx,
});
