const style = {
  flexBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    fontSize: '30px',
  },

  logoText: { fontSize: '18px', fontWeight: 600 },

  flexStart: {
    display: 'flex',
    listStyle: 'none',

    '& li': {
      padding: '8px 12px',
      cursor: 'pointer',
      transition: 'all 0.2s ease-in',

      '&:hover': {
        color: '#333',
      },
    },
  },
};

export default style;
