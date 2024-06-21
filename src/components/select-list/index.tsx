/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { SelectListProps } from './type';

export default function SelectList({
  title,
  type,
  list,
  value,
  onChange,
}: SelectListProps) {
  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectValue = e.target.value;

    onChange(selectValue);
  }

  useEffect(() => {
    return () => {
      onChange('');
    };
  }, []);

  const selectList = list.map((select) => (
    <option key={select.value} value={select.value}>
      {select.name}
    </option>
  ));

  return (
    <>
      <label htmlFor={type}>{title}</label>
      <select
        className='form__select'
        value={value}
        autoComplete='off'
        onChange={handleSelectChange}
        name={type}
        id={type}
      >
        <option value=''>-- Выберите --</option>
        {selectList}
      </select>
    </>
  );
}
