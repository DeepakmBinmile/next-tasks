export const headerStyles = {
  appBar: {
    zIndex: 1000,
  },
  toolbar: {
    padding: 0,
  },
  logoContainer: {
    width: 340,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: '#000000',
    fontWeight: 500,
  },
  button: {
    color: '#6290cb',
    backgroundColor: '#Dae7f9',
    '&:hover': {
      backgroundColor: '#Dae7f9',
    },
    minWidth: 0,
    margin: 0,
    borderRadius: 2,
    padding: 1,
  },
  select: {
    width: 400,
    marginLeft: 4,
    height: 40,
    borderRadius: 2,
  },
  iconStack: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    padding: 1,
  },
  avatarStack: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    marginRight: 2,
    padding: 1,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
  avatar: {
    height: 28,
    width: 28,
    color: '#6290cb',
    backgroundColor: '#Dae7f9',
  },
  subStack:{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
}