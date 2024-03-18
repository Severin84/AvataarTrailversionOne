import React, { useState, useMemo } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import classnames from "classnames";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import './overflow.css';
// const useStyles = makeStyles(() => ({
//   inOverflowMenu: {
//     "&:hover": {
//       backgroundColor: "transparent"
//     }
//   }
// }));

// const useStyle=()=>({
//   inOverflowMenu:{
//       "&:hover":{
//           backgroundColor:"transparent"
//       }
//   }
// })

export default function OverflowMenu({ children, visibilityMap }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMore,closeMore]=useState(true);
  const open = Boolean(anchorEl);
  
  //const classes = useStyle();
  const handleClick = (event) => {
    // console.log(event.currentTarget)
    // console.log(open)
    // setAnchorEl(event.currentTarget);

    closeMore(!openMore)

    if(openMore===true){
       setAnchorEl(event.currentTarget)
    }else{
       setAnchorEl(null)
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const shouldShowMenu = useMemo(
    () => Object.values(visibilityMap).some((v) => v === false),
    [visibilityMap]
  );
  // if (!shouldShowMenu) {
  //   return null;
  // }
  return (
    // <div className={className} style={{order:"99",position:"sticky",right:"0",background:"white"}}>
    //   <IconButton
    //     aria-label="more"
    //     aria-controls="long-menu"
    //     aria-haspopup="true"
    //     onClick={handleClick}
    //   >
    //     <MoreVertIcon />
    //   </IconButton>
    //   <Menu
    //     id="long-menu"
    //     anchorEl={anchorEl}
    //     keepMounted
    //     open={open}
    //     onClose={handleClose}
    //   >
    //     {React.Children.map(children, (child) => {
    //       if (!visibilityMap[child.props["data-targetid"]]) {
    //         return (
    //           <MenuItem key={child} onClick={handleClose}>
    //             {React.cloneElement(child, {
    //               className: classnames(child.className, classes.inOverflowMenu)
    //             })}
    //           </MenuItem>
    //         );
    //       }
    //       return null;
    //     })}
    //   </Menu>
    // </div>

    <>
    <div  style={{order:"99",position:"inherit",right:"0",marginRight:"3rem",paddingTop:"1.6rem",}}>
       <p className="More" aria-label='more' aria-controls='long-menu' aria-haspopup="true" onClick={handleClick}  >
        More
       </p>
       <div id="long-menu" style={{display:open===true?'block':'none',backgroundColor:"black",width:'10rem',borderRadius:"1rem"}} onClick={handleClose}>
        {
            React.Children.map(children,(child)=>{
                if(!visibilityMap[child.props['data-targetid']]){
                    return(
                        <div key={child.props["data-targetid"]} styles={{display:"flex",flex:"0 0 auto",order:"99",position:"sticky",right:"0",background:"white"}} onClick={handleClose}>
                            {child}
                        </div>
                    )
                }
                return null;
            })
        }
       </div>
       
     </div>
     <div className="search" >
     <input style={{width:"5rem",marginRight:"-5rem",width:'10rem'}} placeholder="search....."/>
     </div>
     </>
  );
}

//className={`${child.props.className} ${classes.inOverflowMenu}`}
// className={`${child.props.className} ${classes.inOverflowMenu}`}
//className={className}