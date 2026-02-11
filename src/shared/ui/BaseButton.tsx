import {Button, ButtonProps, styled} from "@mui/material";
import React from "react";

const StyledButton = styled(Button)(() => ({
  background: 'var(--main-gradient)',
  borderRadius: '12px',
  padding: '8px 24px',
  color: '#FFFFFF',
  fontSize: '16px',
  textTransform: 'uppercase',
  transition: 'all 0.3s ease',
  gap: '8px',
  border: 'none',
  height: '56px',

  '&:hover': {
    filter: 'brightness(1.2)',
  },

  '&:active': {
    transform: 'scale(0.98)',
  },

  '& .MuiButton-startIcon': {
    marginRight: '8px',
  }
}));

interface BaseButtonProps extends ButtonProps {
  label?: string;
  icon?: React.ReactNode;
}

export const BaseButton = ({label, icon, children, ...props}: BaseButtonProps) => {
  return (
    <StyledButton
      variant="contained"
      disableRipple
      startIcon={icon}
      {...props}
    >
      {label || children}
    </StyledButton>
  );
};