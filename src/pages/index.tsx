import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CollectionGrid from "../components/CollectionGrid";
import type { NextPage } from "next";
import { NFTCardProps } from "../components/NFTCard";
import { styled } from "@mui/material";

const Home: NextPage = () => {
  const [collections, setCollections] = React.useState<NFTCardProps[]>([]);
  React.useEffect(() => {
    fetch(
      "https://api.covalenthq.com/v1/1/nft_market/?key=ckey_32df19a1915c413faa8da1e7228"
    )
      .then((res) => res.json())
      .then((res) => {
        setCollections(
          res.data.items.map((item: any) => ({
            name: item.collection_name,
            imageURL: item.first_nft_image,
            contractAddress: item.collection_address,
            backgroundImage: item.first_nft_image,
          }))
        );
      });
  }, []);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 6,
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "50%",
            },
          }}
        >
          <img src="/logo-lg.svg" alt="logo" width="100%" />
        </Box>
      </Box>
      <Box
        sx={{
          color: "#fff",
          maxWidth: "80%",
          mx: "auto",
        }}
      >
        <CollectionGrid collections={collections} />
      </Box>
    </Box>
  );
};

export default Home;
