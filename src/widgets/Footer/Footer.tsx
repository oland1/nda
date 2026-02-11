import {Box, styled} from "@mui/material";
import {DownloadCard, LanguageSelect, LegalInfo, SocialLinks} from "./ui";

const FooterWrapper = styled('footer')({
  background: 'linear-gradient(to left, #06225D 0%, #02011F 37%)',
  padding: '60px 0',
  width: '100%',
});

const Container = styled(Box)(({theme}) => ({
  margin: '0 auto',
  padding: '0 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'stretch',

  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    gap: '40px',
    textAlign: 'center',
  }
}));

const MainSection = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '64px',
  order: 1,

  '@media (max-width: 1440px)': {
    gap: '40px',
  },
  [theme.breakpoints.down('lg')]: {
    order: 1,
    flexDirection: 'column',
    gap: '32px',
  }
}));

const LegalSection = styled(Box)(({theme}) => ({
  order: 2,
  flex: 1,
  marginLeft: '64px',
  alignSelf: 'center',

  '@media (max-width: 1440px)': {
    marginLeft: '40px',
  },

  [theme.breakpoints.down('lg')]: {
    order: 3,
    marginLeft: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  }
}));


const ActionSection = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '48px',
  order: 3,

  [theme.breakpoints.down('lg')]: {
    order: 2,
    alignItems: 'center',
    gap: '32px',
  }
}));

const Mascot = styled('img')(({theme}) => ({
  width: '288px',
  objectFit: 'contain',
  '@media (max-width: 1440px)': {
    width: '240px',
  },
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  }
}));

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <MainSection>
          <Mascot src="/man.svg" alt="Mascot"/>
          <DownloadCard/>
        </MainSection>

        <LegalSection>
          <LegalInfo/>
        </LegalSection>

        <ActionSection>
          <LanguageSelect/>
          <SocialLinks/>
        </ActionSection>
      </Container>
    </FooterWrapper>
  );
};