import {memo, useState} from "react";
import {Box, CircularProgress, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {StyledDialog, StyledIframe} from "./OpenGame.styles";

interface GameModalProps {
  open: boolean;
  onClose: () => void;
  url: string;
}

const GameContent = ({url}: { url: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setTimeout(() => setIsLoaded(true), 300);
  };

  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black'
    }}>
      {!isLoaded && (
        <Box sx={{
          position: 'absolute',
          color: '#F6C16E',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 1,
        }}>
          <CircularProgress color="inherit" thickness={4} size={50}/>
        </Box>
      )}

      <StyledIframe
        src={url}
        isLoaded={isLoaded}
        onLoad={handleLoad}
        allow="fullscreen; autoplay"
        title="Casino Game Content"
      />
    </Box>
  );
};

export const GameModal = memo(({open, onClose, url}: GameModalProps) => {
  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      fullScreen
      keepMounted={false}
    >
      <IconButton
        onClick={onClose}
        aria-label="close game"
        sx={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 100,
          '&:hover': {backgroundColor: 'rgba(0, 0, 0, 0.7)'}
        }}
      >
        <CloseIcon/>
      </IconButton>

      {open && <GameContent url={url}/>}
    </StyledDialog>
  );
});
