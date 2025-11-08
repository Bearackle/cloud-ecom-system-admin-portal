import * as React from "react";
import { useState, useEffect } from "react";
import dataProvider from "../CustomDataProvider"; // import provider bạn đã tạo
import { Link } from "react-router-dom";
import {
  CreateButton,
  TopToolbar,
  useNotify,
  useCreatePath,
} from "react-admin";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";

const CustomCategoryList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const notify = useNotify();
  const createPath = useCreatePath();

  useEffect(() => {
    setLoading(true);
    dataProvider
      .getArray("categories")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
        notify("Lỗi tải dữ liệu", { type: "error" });
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <CircularProgress />;
  const ListActions = () => (
    <TopToolbar>
      <CreateButton />
    </TopToolbar>
  );
  return (
    <>
      <ListActions />
      <Box
        display="flex"
        flexWrap="wrap"
        gap={2}
        justifyContent="flex-start"
        sx={{ mt: 2 }}
      >
        {data.map((cat) => (
          <Card
            component={Link}
            to={createPath({
              resource: "categories",
              id: cat.id,
              type: "edit",
            })}
            key={cat.id}
            sx={{
              width: 200,
              borderRadius: 3,
              boxShadow: 2,
              overflow: "hidden",
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 4,
              },
            }}
          >
            {/* Ảnh thương hiệu */}
            <CardMedia
              component="img"
              height="140"
              image={
                cat.imgUrl ||
                "https://via.placeholder.com/200x140?text=No+Image"
              }
              alt={cat.categoryName}
              sx={{
                objectFit: "cover",
                backgroundColor: "#f8f8f8",
              }}
            />

            {/* Tên thương hiệu */}
            <CardContent
              sx={{
                textAlign: "center",
                backgroundColor: "#fff",
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{
                  color: "#000",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {cat.categoryName}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default CustomCategoryList;
