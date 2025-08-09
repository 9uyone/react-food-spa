import { Button } from "@mui/material";
import {
  useNavigate,
  //  useNavigationType,
} from "react-router-dom";

export function BackButton({ ...props }) {
  const navigate = useNavigate();
  //const navType = useNavigationType();

  return (
    //navType !== "REPLACE" ? (
    <Button
      variant='outlined'
      size='small'
      onClick={() => navigate(-1)}
      sx={{
        p: 1,
        px: 2,
        mb: 2,
      }}
      {...props}
    >
      Go back
    </Button>
    //: null
  );
}
