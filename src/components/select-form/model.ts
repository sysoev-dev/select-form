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

export const selectChanged = createEvent<{}>();

export const $formStore = createStore<FormStore>(initialState);

// const selectEffectFx = createEffect(
//   (data: { select: string; country: string }) => {}
// );

// sample({
//   clock: selectChanged, // Указано что срабатывает
//   // fn: (data) => data.toUpperCase(), // чтоб что-то преобразовать данные из clock. На входе первый параметр данных из клок второй из сурса
//   // source - откуда брать данные, если нет то из clock
//   target: selectEffectFx,
// });
$formStore.on(selectChanged, (state, data) => {});
// selectChanged.watch((data) => console.log(data));
