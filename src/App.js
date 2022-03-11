import logo from "./logo.svg";
import "./App.css";
import Categories from "./pages/Categories";
import Books from "./pages/Books";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import Logo from "./Assets/Logo(2).png";
import Algorismic from "./Assets/Algorismic.png";
import { BiSearch } from "react-icons/bi";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

function App() {
  return (
    <div className="App">
      <section className="navbar">
        <Container>
          <Box
            sx={{
              width: "100%",
              padding: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img src={Logo} alt="" />
            <Box
              sx={{
                border: "1px solid #C4C4C4",
                borderRadius: 3,
                display: "flex",
                justifyContent: "center",
                padding: 1,
                alignItems: "center",
              }}
            >
              <input type="text" placeholder="  Search..." />
              <BiSearch />
            </Box>
          </Box>
        </Container>
      </section>
      <section className="header">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Rozha One",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "100px",
              lineHeight: "142px",
              textAlign: "center",
              color: "#FFFFFF",
              textShadow: "0px 7px 7px rgba(0, 0, 0, 0.7)",
            }}
          >
            <Container>BookShop - easy buy books online</Container>
          </Typography>
        </Box>
      </section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/books/:name" element={<Books />} />
        </Routes>
      </BrowserRouter>
      <section className="footer">
        <Container>
          <Box
            sx={{
              width: "100%",
              padding: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 9,
            }}
          >
            <img src={Logo} alt="" />
            <img src={Algorismic} alt="" />
          </Box>
        </Container>
      </section>
    </div>
  );
}

export default App;
