import { useUnit } from 'effector-react';
import {
  $formStore,
  countryChanged,
  cityChanged,
  universityChanged,
  accommodationChanged,
} from './model';
import { useEffect, useState } from 'react';
import {
  COUNTRIES_CODE_NAME,
  countries,
  citiesListRu,
  citiesListBy,
  universities,
  accommodationList,
  accommodationListBy,
} from './data';
import SelectList from '../select-list';
import './style.css';

export default function SelectForm() {
  const formStore = useUnit($formStore);
  const onCountryChanged = useUnit(countryChanged);
  const onCityChanged = useUnit(cityChanged);
  const onUniversityChanged = useUnit(universityChanged);
  const onAccommodationChanged = useUnit(accommodationChanged);
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [isFormSubmited, setIsFormSubmited] = useState(false);

  function handleSubmitForm(event: React.FormEvent) {
    event.preventDefault();
    setIsFormSubmited(true);
    setTimeout(() => setIsFormSubmited(false), 3000);
  }

  useEffect(() => {
    const isValidForm =
      formStore.country &&
      formStore.city &&
      formStore.university &&
      formStore.accommodation;

    if (isValidForm) {
      setIsFormCompleted(true);
    } else {
      setIsFormCompleted(false);
    }
  }, [
    formStore.country,
    formStore.city,
    formStore.university,
    formStore.accommodation,
  ]);

  return (
    <form
      className='form'
      action='#'
      method='get'
      autoComplete='off'
      onSubmit={handleSubmitForm}
    >
      <h3 className='form__title'>Форма выбора</h3>
      <SelectList
        title='Выбор страны'
        type='country'
        list={countries}
        value={formStore.country}
        onChange={onCountryChanged}
      />
      {formStore.country === COUNTRIES_CODE_NAME.RU && (
        <SelectList
          title='Выбор города'
          type='city'
          list={citiesListRu}
          value={formStore.city}
          onChange={onCityChanged}
        />
      )}
      {formStore.country === COUNTRIES_CODE_NAME.BY && (
        <SelectList
          title='Выбор города'
          type='city'
          list={citiesListBy}
          value={formStore.city}
          onChange={onCityChanged}
        />
      )}
      <SelectList
        title='Вид ВУЗа'
        type='university'
        list={universities}
        value={formStore.university}
        onChange={onUniversityChanged}
      />
      {formStore.country &&
        formStore.city &&
        formStore.university &&
        (formStore.country === COUNTRIES_CODE_NAME.RU ? (
          <SelectList
            title='Вариант проживания'
            type='accommodation'
            list={accommodationList}
            value={formStore.accommodation}
            onChange={onAccommodationChanged}
          />
        ) : (
          <SelectList
            title='Вариант проживания'
            type='accommodation'
            list={accommodationListBy}
            value={formStore.accommodation}
            onChange={formStore.accommodation}
          />
        ))}
      <button
        className='form__button-submit'
        disabled={!isFormCompleted}
        type='submit'
      >
        Отправить
      </button>
      {isFormSubmited && (
        <output className='form__output' role='status'>
          <p className='form__output-text'>Country: {formStore.country}</p>
          <p className='form__output-text'>City: {formStore.city}</p>
          <p className='form__output-text'>
            University: {formStore.university}
          </p>
          <p className='form__output-text'>
            Accommodation: {formStore.accommodation}
          </p>
        </output>
      )}
    </form>
  );
}
