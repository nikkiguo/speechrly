import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      variants: [
        {
          props: { variant: 'rect' },
          style: {
            textTransform: 'none',
            padding: '1rem 2rem',
            fontSize: '1.5rem',
            color: '#010101',
            borderRadius: '1rem',
            backgroundColor: '#F4D35E',
            transition: '.2s',
            '&:hover': {
              transform: 'scale(1.05)',
              backgroundColor: '#C9AD4C',
            },
          },
        },
      ],
    },
  },
});
