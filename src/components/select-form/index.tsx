import { $formStore, selectChanged } from './model';
import { useUnit } from 'effector-react';
import './style.css';
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

export default function SelectForm() {
  // const formStore = useUnit($formStore);
  const onSelectChanged = useUnit(selectChanged);

  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [university, setUniversity] = useState('');
  const [accommodation, setAccommodation] = useState('');
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [isFormSubmited, setIsFormSubmited] = useState(false);

  function handleSubmitForm(event: React.FormEvent) {
    event.preventDefault();
    setIsFormSubmited(true);
    setTimeout(() => setIsFormSubmited(false), 3000);
  }

  useEffect(() => {
    const isValidForm = country && city && university && accommodation;

    if (isValidForm) {
      setIsFormCompleted(true);
    } else {
      setIsFormCompleted(false);
    }
  }, [country, city, university, accommodation]);

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
        value={country}
        onChange={onSelectChanged}
        // onChange={setCountry}
      />
      {country === COUNTRIES_CODE_NAME.RU && (
        <SelectList
          title='Выбор города'
          type='city'
          list={citiesListRu}
          value={city}
          onChange={setCity}
        />
      )}
      {country === COUNTRIES_CODE_NAME.BY && (
        <SelectList
          title='Выбор города'
          type='city'
          list={citiesListBy}
          value={city}
          onChange={setCity}
        />
      )}
      <SelectList
        title='Вид ВУЗа'
        type='university'
        list={universities}
        value={university}
        onChange={setUniversity}
      />
      {country &&
        city &&
        university &&
        (country === COUNTRIES_CODE_NAME.RU ? (
          <SelectList
            title='Вариант проживания'
            type='accommodation'
            list={accommodationList}
            value={accommodation}
            onChange={setAccommodation}
          />
        ) : (
          <SelectList
            title='Вариант проживания'
            type='accommodation'
            list={accommodationListBy}
            value={accommodation}
            onChange={setAccommodation}
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
          <p className='form__output-text'>Country: {country}</p>
          <p className='form__output-text'>City: {city}</p>
          <p className='form__output-text'>University: {university}</p>
          <p className='form__output-text'>Accommodation: {accommodation}</p>
        </output>
      )}
    </form>
  );
}
