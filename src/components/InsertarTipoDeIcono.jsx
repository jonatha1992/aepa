import React from "react";
import {
  Description,
  VideoLibrary,
  InsertDriveFile,
} from "@mui/icons-material";

const InsertarTipoDeIcono = ({ tipo }) => {
  switch (tipo) {
    case "pdf":
      return <InsertDriveFile />;
    case "video":
      return <VideoLibrary />;
    default:
      return <Description />;
  }
};

export default InsertarTipoDeIcono;
