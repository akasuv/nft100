import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export type NFTCardProps = {
  name: string;
  imageURL: string;
  contractAddress: string;
  backgroundImage: string;
};

const NFTCard = ({
  name,
  imageURL,
  contractAddress,
  backgroundImage,
}: NFTCardProps) => {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        height: 180,
        width: 300,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "#fff",
        borderRadius: "8px",
        overflow: "hidden",
        fontFamily: "IBM Plex Sans",
      }}
    >
      <Box
        sx={{
          zIndex: 2,
          position: "relative",
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "spaceBetween",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ height: 20, mb: 1 }}>
          <img src="/logo.svg" alt="nft100 logo" width={76} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            lineHeight={1.3}
            fontSize={30}
            fontWeight={700}
            textAlign="center"
          >
            {name}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            height: 36,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography fontSize={10} color="rgba(255, 255, 255, 0.7)">
              Contract
            </Typography>
            <Typography fontSize={10} fontWeight="medium">
              {contractAddress}
            </Typography>
          </Box>
          <Box sx={{ width: 36, height: 36 }}>
            <img src={imageURL} width="100%" height="100%" alt={name} />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.42)",
          backdropFilter: "blur(8px)",
          zIndex: 1,
          borderRadius: "8px",
          overflow: "hidden",
        }}
      />
    </Box>
  );
};

export default NFTCard;
