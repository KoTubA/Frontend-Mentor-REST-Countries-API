import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './FormField.styles';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';
import { ReactComponent as SeatchIcon } from 'assets/icons/icon-search.svg';
import { useCountries } from 'provider/CountriesStore';

const FormField = ({ label, name, id, placeholder, type = 'text', ...props }) => {
  const { value, setValue } = useCountries();

  const handleQuery = (e) => {
    setValue(e.target.value);
  };

  return (
    <Wrapper>
      <SeatchIcon />
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} placeholder={placeholder} spellCheck="false" {...props} value={value} onChange={handleQuery} />
    </Wrapper>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
