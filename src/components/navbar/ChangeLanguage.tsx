import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Select, { StylesConfig } from 'react-select';
import { useTheme } from "@/context/ThemeContext.tsx";

type OptionType = {
  value: string;
  label: React.ReactNode;
};

const ChangeLanguage: React.FC = () => {
  const { i18n } = useTranslation();
  const { theme } = useTheme();

  const changeLanguage = (selectedOption: OptionType | null) => {
    if (selectedOption) {
      const selectedLanguage = selectedOption.value;
      i18n.changeLanguage(selectedLanguage);
      localStorage.setItem('language', selectedLanguage);
      setSelectedOption(selectedOption);
    }
  };

  const options: OptionType[] = [
    { value: 'es', label: <div className='text-LIGHT-T-dark dark:text-CREMA flex justify-start items-center gap-1'><p className='text-xl'>ES</p><span className="w-7 h-7 icon-[openmoji--flag-argentina]" /></div> },
    { value: 'en', label: <div className='text-LIGHT-T-dark dark:text-CREMA flex justify-start items-center gap-1'><p className='text-xl'>EN</p><span className="w-7 h-7 icon-[openmoji--flag-united-states]" /></div> },
    { value: 'pt', label: <div className='text-LIGHT-T-dark dark:text-CREMA flex justify-start items-center gap-1'><p className='text-xl'>PT</p><span className="w-7 h-7 icon-[openmoji--flag-brazil]" /></div> }
  ];

  const customStyles: StylesConfig<OptionType, false> = {
    control: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      backgroundColor: `${theme === 'dark' ? '#060e1c' : '#EBF1FB'}`,
      border: `2px solid ${state.isFocused ? theme === 'dark' ? '#ffcc50' : '#2196f3' : 'transparent'}`,
      fontSize: '1.25rem',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: `${theme === 'dark' ? '#16202F' : '#D8E2F3'}`,
        border: `2px solid ${theme === 'dark' ? '#ffcc50' : '#2196f3'}`,
      }
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      display: state.isSelected ? 'none' : 'block',
      backgroundColor: state.isSelected ? theme === 'dark' ? '#16202F' : '#D8E2F3' : 'transparent',
      color: `${theme === 'dark' ? '#f1e1cf' : '#16202F'}`,
      '&:hover': {
        backgroundColor: `${theme === 'dark' ? '#16202F' : '#D8E2F3'}`,
      },
      '&:active': {
        backgroundColor: `${theme === 'dark' ? '#16202F' : '#D8E2F3'}`,
      }
    }),
    menu: (provided) => ({
      ...provided,
      color: `${theme === 'dark' ? '#f1e1cf' : '#16202F'}`,
      backgroundColor: `${theme === 'dark' ? '#060e1c' : '#EBF1FB'}`,
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      border: `2px solid ${theme === 'dark' ? '#ffcc50' : '#2196f3'}`,
    }),
  };

  const [selectedOption, setSelectedOption] = useState<OptionType | null>(
    options.find(option => option.value === i18n.language) || null
  );

  return (
    <Select
      styles={customStyles}
      options={options}
      value={selectedOption}
      onChange={changeLanguage}
      aria-label="Select language"
      className="w-fit"
    />
  );
};

export default ChangeLanguage;
