import {ReactNode, useMemo} from 'react';
import {Box} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {getBrandVars} from '@/shared/config/theme/variables';

export const BrandProvider = ({children}: { children: ReactNode }) => {
  const {i18n} = useTranslation();

  const currentVars = useMemo(() =>
    getBrandVars(i18n.resolvedLanguage), [i18n.resolvedLanguage]);

  return (
    <Box sx={{...currentVars}}>
      {children}
    </Box>
  );
};