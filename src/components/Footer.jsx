import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1976d2",
        color: "white",
        textAlign: "center",
        padding: 2,
        marginTop: 5,
      }}
    >
      <Typography variant="body2">
        © 2026 Vriddhi Kakkar | 23BAI71463
      </Typography>
    </Box>
  );
};

export default Footer;
