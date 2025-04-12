import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { styled } from "@mui/material";
import logo from "./Pictures/GreyLogo.jpeg";

const pages = ['Home', 'About', 'Our Service', 'Contact Us'];
const enrollmentPages = [
  { label: 'Admission Process', scrollTo: 'admission-sec' },
  { label: 'Required Documents', scrollTo: 'document-sec' }
];

const Logo = styled('img')({
  height: '80px',
  width: '200px',
  marginRight: '10px',
});

const TopBar = () => {
  return (
    <Box sx={{ backgroundColor: '#FFA725', padding: '10px' }}>
      <Typography variant="body1" align="center">
        <a href="tel:01-4547298" style={{ textDecoration: "none" }}> 01-4547298 </a>
        <a style={{ color: "#000000" }}>/ Edvisors St, Dillibazar-30, Kathmandu, Nepal</a>
      </Typography>
    </Box>
  );
};

export default function NavigationBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElEnrollment, setAnchorElEnrollment] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenEnrollmentMenu = (event) => {
    setAnchorElEnrollment(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleEnrollmentClick = (scrollTo) => {
    navigate('/Required Documents', { state: { scrollTo } });
    setAnchorElEnrollment(null);
  };

  return (
    <>
      <TopBar />
      <AppBar position="relative" style={{ background: '#FFFFFF', height: 80 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
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
              <Logo src={logo} />
            </Typography>

            {/* Mobile Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <NavLink
                      to={`/${page === 'Home' ? '' : page}`}
                      style={({ isActive }) => ({
                        textDecoration: 'none',
                        color: isActive ? '#08C2FF' : '#21252B'
                      })}
                    >
                      {page}
                    </NavLink>
                  </MenuItem>
                ))}

                <MenuItem onClick={handleOpenEnrollmentMenu}>
                  <Typography sx={{ textAlign: 'center', textTransform: 'none' }}>
                    Enrollment and Documents
                  </Typography>
                </MenuItem>

                <Menu
                  anchorEl={anchorElEnrollment}
                  open={Boolean(anchorElEnrollment)}
                  onClose={() => setAnchorElEnrollment(null)}
                >
                  {enrollmentPages.map(({ label, scrollTo }) => (
                    <MenuItem key={label} onClick={() => handleEnrollmentClick(scrollTo)}>
                      {label}
                    </MenuItem>
                  ))}
                </Menu>
              </Menu>
            </Box>

            {/* Desktop Logo (mobile fallback) */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
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
              <Logo src={logo} />
            </Typography>

            {/* Desktop Navigation */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block', textTransform: 'none' }}
                >
                  <NavLink
                    to={`/${page === 'Home' ? '' : page}`}
                    style={({ isActive }) => ({
                      textDecoration: 'none',
                      color: isActive ? '#006BFF' : '#21252B'
                    })}
                  >
                    {page}
                  </NavLink>
                </Button>
              ))}

              {/* Enrollment Dropdown (desktop view) */}
              <Button
                onClick={handleOpenEnrollmentMenu}
                sx={{
                  my: 2,
                  color: 'black',
                  display: 'block',
                  textTransform: 'none',
                }}
              >
                Enrollment and Documents
              </Button>

              <Menu
                anchorEl={anchorElEnrollment}
                open={Boolean(anchorElEnrollment)}
                onClose={() => setAnchorElEnrollment(null)}
              >
                {enrollmentPages.map(({ label, scrollTo }) => (
                  <MenuItem key={label} onClick={() => handleEnrollmentClick(scrollTo)}>
                    {label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
