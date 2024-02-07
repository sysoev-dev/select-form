import './style.css';
import { useEffect, useState } from 'react';
import {
  COUNTRIES_CODE_NAME,
  countries,
  citiesListRu,
  citiesListBy,
  universities,
  UNIVERSITIES_TYPES,
  accommodationList,
  accommodationListBy,
  faculties,
} from './data';
import SelectList from '../select-list';

export default function SelectForm() {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [university, setUniversity] = useState('');
  const [accommodation, setAccommodation] = useState('');
  const [faculty, setFaculty] = useState('');
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [isFormSubmited, setIsFormSubmited] = useState(false);

  const isTehnicalUniversity = university === UNIVERSITIES_TYPES.TECHNICAL;

  function handleSubmitForm(event: React.FormEvent) {
    event.preventDefault();
    setIsFormSubmited(true);
    setTimeout(() => setIsFormSubmited(false), 3000);
  }

  useEffect(() => {
    const isValidForm =
      country && city && university && accommodation && faculty;

    if (isValidForm) {
      setIsFormCompleted(true);
    } else {
      setIsFormCompleted(false);
    }
  }, [country, city, university, accommodation, faculty]);

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
        onChange={setCountry}
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
      {country && city && (
        <SelectList
          title='Вид ВУЗа'
          type='university'
          list={universities}
          value={university}
          onChange={setUniversity}
        />
      )}
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
      {country && city && university && accommodation && (
        <SelectList
          title='Выбор факультета'
          type='faculty'
          list={
            isTehnicalUniversity ? faculties.technical : faculties.humanitarian
          }
          value={faculty}
          onChange={setFaculty}
        />
      )}
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
          <p className='form__output-text'>Faculty: {faculty}</p>
        </output>
      )}
    </form>
  );
}
