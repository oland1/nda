import {Box, Select, SelectProps, styled} from "@mui/material";
import React from "react";

const StyledSelect = styled(Select)(() => ({
  color: 'white',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  borderRadius: '8px',
  outline: 'none',
  transition: 'all 0.2s ease-in-out',

  '& .MuiOutlinedInput-notchedOutline': {border: 'none'},

  '& .MuiSelect-select': {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px',
    '&:focus': {backgroundColor: 'transparent'}
  },

  '& .MuiSelect-icon': {
    right: '20px',
    top: 'calc(50% - 7px)',
    transition: 'transform 0.3s ease, opacity 0.3s ease',
    opacity: 0.7,
    '&.MuiSelect-iconOpen': {
      transform: 'rotate(180deg)',
      opacity: 1
    },
  },

  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderColor: 'var(--accent-color, rgba(255, 255, 255, 0.2))',
    '& .MuiSelect-icon': {
      opacity: 1,
    }
  },

  '&.Mui-focused': {
    borderColor: 'var(--accent-color, #FFBA47)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  }
}));

export const BaseSelect = ({children, ...props}: SelectProps) => {
  return (
    <StyledSelect
      {...props}
      IconComponent={(iconProps) => (
        <Box
          component="img"
          src="/chevron-down.svg"
          {...iconProps}
          sx={{width: 14, height: 14, pointerEvents: 'none'}}
        />
      )}
      MenuProps={{
        PaperProps: {
          sx: {
            bgcolor: '#1a1f2e',
            color: 'white',
            borderRadius: '8px',
            marginTop: '8px',
            border: '1px solid rgba(255,255,255,0.1)',

            '& .MuiList-root': {
              padding: '4px',
            },

            '& .MuiMenuItem-root': {
              borderRadius: '6px',
              margin: '2px 0',
              transition: 'all 0.2s ease',

              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: 'var(--accent-color, #FFBA47)',
              },

              '&.Mui-selected': {
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                color: 'var(--accent-color, #FFBA47)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                }
              }
            },

            '&::-webkit-scrollbar': {width: '4px'},
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(255,255,255,0.2)',
              borderRadius: '10px'
            }
          }
        }
      }}
    >
      {children}
    </StyledSelect>
  );
};