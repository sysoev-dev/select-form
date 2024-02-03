import { SetStateAction, Dispatch } from 'react';

export interface SelectListProps {
  title: string;
  type: string;
  list: { name: string; value: string }[];
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}
