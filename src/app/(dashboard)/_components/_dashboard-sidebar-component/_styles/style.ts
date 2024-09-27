export const styles = {
  accordian: {
    shadows: 'none',
    boxShadow: 'none',
    border: 'none !important',
    minHeight: 68,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  accordianDetails: {
    padding: 0,
    shadows: 'none',
    boxShadow: 'none',
    border: 'none !important',
  },
  listItem: {
    padding: 3,
    marginTop: 4,
    marginBottom: 3,
    width: '100%',
    minWidth: 200,
    borderRadius: 2,
    '&:hover': {
      backgroundColor: '#E2F3FD',
    },
  },
  box: {
    zIndex: '100 !important',
    flexShrink: 0,
    overflowY: 'auto',
  },
  icon: {
    height: 20,
  },
  listItemText: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    fontSize: 12,
  },
  list: {
    padding: 0,
    overflowX: 'hidden',
  },
  accordionSummaryText: {
    paddingLeft: 4,
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    shadows: 'none',
    boxShadow: 'none',
  },
  accordionSummary: {
    width: '100%',
    height: 18,
    padding: '10px 16px',
    margin: 0,
    border: 'none !important',
    shadows: 'none',
    boxShadow: 'none',
  },
}
