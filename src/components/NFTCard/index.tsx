import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export type NFTCardProps = {
  name: string;
  imageURL: string;
};

const NFTCard = ({ name, imageURL }: NFTCardProps) => {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        height: 339,
        width: 226,
        border: "3px solid #fff",
        backgroundColor: "#000",
        color: "#fff",
        px: 1.6,
        pt: 2.4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography fontSize={20}>{name}</Typography>
      </Box>
      <img alt={name} src={imageURL} width={200} height={200} />
    </Box>
  );
};

export default NFTCard;
