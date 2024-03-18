import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import Icon from "@material-ui/core/Icon";
import ArchiveIcon from "@material-ui/icons/Archive";
import StarIcon from "@material-ui/icons/Star";
import SaveIcon from "@material-ui/icons/Save";
import DownloadIcon from "@material-ui/icons/ArrowDownward";
import IntersectionObserverWrapper from "./intersection-observer-wrapper";
// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//     display: "flex",
//     flex: "0 0 auto"
//   }
// }));

export default function IconLabelButtons() {
  // const classes = useStyles();
  return (
    <IntersectionObserverWrapper>
      <p
        //color="primary"
        data-targetid="talk"
        // className={classes.button}
        style={{marginLeft:"2rem",display:"flex",flex:"0 0 auto",color:'white'}}
        startIcon={<KeyboardVoiceIcon />}
      >
        Talk
      </p>
      <p
        //color="primary"
        data-targetid="save"
        // className={classes.button}
        style={{marginLeft:"2rem",display:"flex",flex:"0 0 auto",color:'white'}}
        startIcon={<SaveIcon />}
      >
        Save
      </p>
      <p
        //color="primary"
        data-targetid="upload"
        // className={classes.button}
        style={{marginLeft:"2rem",display:"flex",flex:"0 0 auto",color:'white'}}
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </p>
      <p
        //color="primary"
        data-targetid="download"
        // className={classes.button}
        style={{marginLeft:"2rem",display:"flex",flex:"0 0 auto",color:'white'}}
        startIcon={<DownloadIcon />}
      >
        Download
      </p>
      <p
        // color="primary"
        data-targetid="send"
        // className={classes.button}
        style={{marginLeft:"2rem",display:"flex",flex:"0 0 auto",color:'white'}}
        startIcon={<Icon>send</Icon>}
      >
        Send
      </p>
      <p
        // color="primary"
        data-targetid="star"
        // className={classes.button}
        style={{marginLeft:"2rem",display:"flex",flex:"0 0 auto",color:'white'}}
        startIcon={<StarIcon />}
      >
        Star
      </p>
      <p
        // color="primary"
        data-targetid="mark-as-read"
        // className={classes.button}
        style={{marginLeft:"2rem",display:"flex",flex:"0 0 auto",color:'white'}}
        startIcon={<SaveIcon />}
      >
        Mark as Read
      </p>
      <p
        // color="primary"
        data-targetid="archive"
        // className={classes.button}
        style={{marginLeft:"2rem",display:"flex",flex:"0 0 auto",color:'white'}}
        startIcon={<ArchiveIcon />}
      >
        Archive
      </p>
      <p
        // color="primary"
        data-targetid="delete"
        // className={classes.button}
        style={{marginLeft:"2rem",display:"flex",flex:"0 0 auto",color:'white'}}
        startIcon={<DeleteIcon />}
      >
        Delete
      </p>
    </IntersectionObserverWrapper>
  );
}
