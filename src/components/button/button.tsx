import { Button } from "@mui/material";
import React, { PropsWithChildren } from "react";
interface Props {
  children: string;
  onClick: () => void;
}
export const FormButton: React.FC<Props> = (props) => {
  const { children, onClick } = props;
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{ minWidth: "10rem", height: "3rem", marginTop: "1rem" }}
    >
      {children}
    </Button>
  );
};
