import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import StarBorder from "@mui/icons-material/StarBorder";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import { Link } from "react-router-dom";

export default function NestedList() {
  const [openStates, setOpenStates] = React.useState({
    altas: false,
    inbox: false,
  });

  const handleClick = (item) => {
    setOpenStates((prevStates) => ({
      ...prevStates,
      [item]: !prevStates[item],
    }));
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        color: "black",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton onClick={() => handleClick("altas")}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Altas" />
        {openStates.altas ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openStates.altas} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <Link to="/AltaContenido">
              <ListItemText primary="Contenido" />
            </Link>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={() => handleClick("inbox")}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {openStates.inbox ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openStates.inbox} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
