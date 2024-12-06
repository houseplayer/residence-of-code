import 'primereact/resources/themes/vela-blue/theme.css';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';

interface Option {
  id: string;
  name: string;
}

interface Props {
  options: Option[];
  selectedOptions: Option[];
  onChange: (e: MultiSelectChangeEvent) => void;
  placeholder?: string;
  className?: string;
}

const Multiselect = ({ options, selectedOptions, onChange, placeholder, className }: Props) => {
  return (
    <MultiSelect
      value={selectedOptions}
      onChange={onChange}
      options={options}
      optionLabel="name"
      placeholder={placeholder || 'Select option'}
      className={className}
      display="chip"
      selectAllLabel="Select all"
    />
  );
};

export default Multiselect;
