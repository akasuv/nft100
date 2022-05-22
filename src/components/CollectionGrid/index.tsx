import NFTCard from "../NFTCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import type { NFTCardProps } from "../NFTCard";

export type CollectionGridProps = {
  collections: NFTCardProps[];
};

const CollectionGrid = ({ collections }: CollectionGridProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: "center",
      }}
    >
      {collections.map((collection) => (
        <Box key={collection.contractAddress}>
          <NFTCard {...collection} />
        </Box>
      ))}
    </Box>
  );
};

export default CollectionGrid;
