import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export interface NFTCardProps {
  name: string;
  imageURL: string;
  contractAddress: string;
  backgroundImage: string;
}

function shortenAddress(address: string, length: number = 10) {
  return address.slice(0, length) + "..." + address.slice(-length);
}

const NFTCard = ({
  name,
  imageURL,
  contractAddress,
  backgroundImage,
}: NFTCardProps) => {
  return (
    <Box
      sx={{
        width: 300,
        position: "relative",
        "&:hover": {
          "& .line-bg": {
            display: "flex",
          },
        },
      }}
    >
      <Box
        sx={{
          boxSizing: "border-box",
          height: 180,
          width: 300,
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: "#000",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          zIndex: 10,
          color: "#fff",
          fontFamily: "IBM Plex Sans",
          cursor: "pointer",
          transition: "0.3s ease-in-out",
          borderRadius: "8px",
          overflow: "hidden",
          "&:hover": {
            transform: "translate(-10px, -10px)",
          },
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
                {shortenAddress(contractAddress)}
              </Typography>
            </Box>
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
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
            zIndex: 1,
            borderRadius: "8px",
            overflow: "hidden",
          }}
        />
      </Box>
      <Box
        className="line-bg"
        sx={{
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          backgroundColor: "#fff",
          columnGap: 0.5,
          borderRadius: "8px",
          overflow: "hidden",
          display: "none",
        }}
      >
        {new Array(100).fill(1).map((_, i) => (
          <Box
            key={i}
            sx={{
              height: "200%",
              border: "1px solid #000",
              transform: "rotate(-45deg) translate(0%, -30%)",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default NFTCard;
