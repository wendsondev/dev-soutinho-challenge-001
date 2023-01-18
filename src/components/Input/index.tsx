import { InputHTMLAttributes } from 'react';
import { Label, Input as PrimitiveInput } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ label, ...res }: InputProps) {
  return (
    <Label>
      <span>{label}</span>
      <PrimitiveInput {...res} />
    </Label>
  );
}
