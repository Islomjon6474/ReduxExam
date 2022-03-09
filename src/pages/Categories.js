import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getNewsByCategory } from "../api/index";
import Paper from "@mui/material/Paper";
import { BsLink45Deg } from "react-icons/bs";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import Logo from "../Assets/book.png";

import axios from "axios";

function Categories(props) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);

    const obj = await getNewsByCategory();
    // console.log(obj.data);
    setData(obj.data.results);
    console.log(obj.data.results);

    setLoading(false);
  }, []);

  return (
    <Container>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          <Box
            sx={{
              paddingY: 5,
              marginY: 5,
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "28px",
                fontFamily: "Roziha One",
              }}
              variant="h1"
            >
              Categories
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {data.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box
                  onClick={() => navigate(`/books/${item.list_name_encoded}`)}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    borderRadius: 3,
                    width: "100%",
                    paddingX: 5,
                    gap: 3,
                    boxShadow: "0 5px 20px 0 #e5e5e5",
                    minHeight: "173px",
                  }}
                >
                  <img src={Logo} alt="" />
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "18px",
                      fontFamily: "Roziha One",
                    }}
                    variant="p"
                  >
                    {item.display_name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
}

export default Categories;
