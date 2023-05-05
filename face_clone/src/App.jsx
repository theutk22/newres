
import { Container, Toolbar, AppBar, Typography } from '@mui/material';
import logo from './assets/face.png'
import Search from './components/Search';

function App() {
  return (
    <>
      <AppBar position="static" style={{ background: '#fff' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters variant='dense'>
            <img src={logo} width={30} height={30} />

            <Search />

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>

    </>
  )
}

export default App
