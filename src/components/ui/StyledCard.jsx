import { styled } from "@mui/material";
import Card from "@mui/material/Card";
import { CARD_STYLES } from "../../styles/constants";

export const StyledCard = styled(Card)(({ theme }) => ({
  ...CARD_STYLES.base,
}));
