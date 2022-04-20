import React from "react";
import "./Book.css";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getBooksByCategory } from "../api/books";
import Paper from "@mui/material/Paper";
import { BsLink45Deg } from "react-icons/bs";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import Modal from "@mui/material/Modal";

import CircularProgress from "@mui/material/CircularProgress";

import Book from "../Assets/bookimage.png";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 5,

  boxShadow: 24,
  p: 4,
};

function Books(props) {
  const params = useParams();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log(params.name);

  useEffect(async () => {
    setLoading(true);
    const obj = await getBooksByCategory(params.name);
    console.log(obj.data.results.books);
    setData(obj.data.results.books);

    setLoading(false);
  }, []);

  const navigate = useNavigate();
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
              marginY: 10,
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "48px",
                fontFamily: "Roziha One",
              }}
              variant="h1"
            >
              Books in {params.name}
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {data.map((item) => (
              <Grid key={item.list_name} item xs={12} sm={6} md={4} lg={3}>
                <Box
                  sx={{
                    display: "flex",

                    alignItems: "center",
                    flexDirection: "column",
                    borderRadius: 3,
                    overflow: "hidden",
                    width: "100%",
                    height: "500px",
                    gap: 3,
                    boxShadow: "0 5px 20px 0 #e5e5e5",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      overflow: "hidden",
                      width: "100%",
                      height: "60%",
                    }}
                  >
                    <img
                      src={`${item.book_image}?w=161&fit=crop&auto=format`}
                      srcSet={`${item.book_image}?w=161&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      draggable={false}
                      loading="lazy"
                      className="img"
                    />
                  </Box>
                  <Box
                    sx={{
                      padding: 2,
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "start",
                      flexDirection: "column",
                      width: "100%",
                      height: "40%",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: "16px",
                          fontFamily: "Roziha One",
                          textTransform: "lowercase ",
                        }}
                        variant="h6"
                      >
                        Title: {item.title}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: "16px",
                          fontFamily: "Roziha One",
                          color: "#C4C4C4",
                        }}
                        variant="h6"
                        component={"h3"}
                      >
                        Author: {item.author}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: "16px",
                          fontFamily: "Roziha One",
                          color: "#C4C4C4",
                        }}
                        variant="h6"
                        component={"h3"}
                      >
                        Price:{" "}
                        <Typography
                          variant="span"
                          sx={{
                            color: "#FEA065",
                          }}
                        >
                          {item.price}$
                        </Typography>
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "start",
                          width: "100%",
                          gap: 3,
                          paddingY: 1,
                        }}
                      >
                        <Button
                          onClick={() =>
                            window.open(`${item.amazon_product_url}`)
                          }
                          sx={{
                            background: "#14668C",
                            color: "white",
                            fontFamily: "Rozha One",
                            borderRadius: 2,
                            "&:hover": {
                              background: "#14668C",
                            },
                          }}
                        >
                          Buy
                        </Button>
                        <Button
                          onClick={handleOpen}
                          sx={{
                            background: "#14668C",
                            color: "white",
                            borderRadius: 2,
                            fontFamily: "Rozha One",
                            "&:hover": {
                              background: "#14668C",
                            },
                          }}
                        >
                          More
                        </Button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            {item.author && (
                              <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                              >
                                Author: {item.author}
                              </Typography>
                            )}
                            <Typography
                              id="modal-modal-description"
                              sx={{ mt: 2 }}
                            >
                              {item.description}
                            </Typography>
                          </Box>
                        </Modal>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
}

export default Books;
