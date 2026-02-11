import {Box, styled, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

const LegalContainer = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '64px',
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
  }
}));

const LegalItem = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  textAlign: 'left',
  gap: '12px',

  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    textAlign: 'center',
  }
}));

const LegalText = styled(Typography)({
  color: 'rgba(255,255,255,0.4)',
  fontSize: '16px',
});

const LegalIcon = styled('img')({
  width: '58px',
  height: '58px',
  flexShrink: 0,
});

export const LegalInfo = () => {
  const {t} = useTranslation();
  return (
    <LegalContainer>
      <LegalItem>
        <LegalIcon src="/18+.svg" alt="18+"/>
        <LegalText variant="caption">
          {t("age_restriction")}
        </LegalText>
      </LegalItem>

      <LegalItem>
        <LegalIcon src="/licence.svg" alt="License"/>
        <LegalText variant="caption">
          {t("casino_legal")} <br/>
          Anjouan Gaming Authority
        </LegalText>
      </LegalItem>
    </LegalContainer>
  )
};