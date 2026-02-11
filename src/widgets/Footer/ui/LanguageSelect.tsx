import {Box, MenuItem, SelectChangeEvent, styled} from "@mui/material";
import {useTranslation} from "react-i18next";
import {BaseSelect} from "@/shared/ui";

const StyledMenuItem = styled(MenuItem)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  fontSize: '14px',
  padding: '10px 16px',
});

const FlagIcon = styled('img')({
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  objectFit: 'cover',
  flexShrink: 0,
});

const Label = styled('span')({
  color: 'white',
  fontWeight: 400,
});

const LANGUAGES = [
  {id: 'en', label: 'English', flag: '/us.svg'},
  {id: 'ua', label: 'Ukraine', flag: '/ua.svg'},
];


export const LanguageSelect = () => {
  const {i18n} = useTranslation();

  const currentLang = i18n.language || 'en';

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const newLang = event.target.value as string;
    i18n.changeLanguage(newLang);
  };

  return (
    <BaseSelect
      value={currentLang}
      onChange={handleChange}
      renderValue={(selected) => {
        const lang = LANGUAGES.find((l) => l.id === selected);
        return (
          <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <FlagIcon src={lang?.flag} alt={lang?.label}/>
            <Box component="span" sx={{color: '#BABABA'}}>
              {lang?.label}
            </Box>
          </Box>
        );
      }}
      sx={{
        width: '100%',
        maxWidth: '290px',
        height: '56px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '12px',
        '& .MuiSelect-select': {
          display: 'flex',
          alignItems: 'center',
          fontSize: '16px',
          fontWeight: 500,
        },
      }}
    >
      {LANGUAGES.map((item) => (
        <StyledMenuItem key={item.id} value={item.id}>
          <FlagIcon src={item.flag} alt={item.label}/>
          <Label>{item.label}</Label>
        </StyledMenuItem>
      ))}
    </BaseSelect>
  );
};