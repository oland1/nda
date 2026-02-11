import {Box, Dialog, styled} from "@mui/material";

// Не до кінця зрозуміло як саме має виглядати цей блок,
// тому поки що зробила максимально простим через фонове зображення.
// Якщо буде більше деталей по дизайну, то можна буде доповнити.
export const Wrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  backgroundImage: 'url("/bg-open-game.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '944px',
  [theme.breakpoints.down('lg')]: {
    minHeight: '854px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 2)
  }
}));

export const Content = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px',
});

export const Logo = styled('img')({
  width: '100%',
  maxWidth: '262px',
  aspectRatio: '262 / 120',
  objectFit: 'contain',
});

export const OpenBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '32px',
  width: '100%',
  maxWidth: '360px',
});

export const SlotImage = styled('img')({
  width: '100%',
  maxWidth: '326px',
  userSelect: 'none',
});

export const StyledDialog = styled(Dialog)({
  '& .MuiPaper-root': {
    backgroundColor: '#000',
    width: '90vw',
    maxWidth: '1440px',
    height: '90vh',
    borderRadius: '16px',
    overflow: 'hidden',
    position: 'relative',
  }
});

export const StyledIframe = styled('iframe')<{ isLoaded: boolean }>(({isLoaded}) => ({
  width: '100%',
  height: '100%',
  border: 'none',
  opacity: isLoaded ? 1 : 0,
  transition: 'opacity 0.5s ease-in-out',
}));