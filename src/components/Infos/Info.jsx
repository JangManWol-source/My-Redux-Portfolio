import React from 'react'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PermPhoneMsg from "@mui/icons-material/PermPhoneMsg";
const Info = () => {
  return (
    <React.Fragment><div className="w-full pt-5">
    <div className="infos_details">
      <div className="info_">
        <LocationOnIcon /> <span>Quezon City, NCR 1119 Philippines</span>
      </div>
      <div className="info_">
        <EmailIcon /> <span>jamisjoecristian@gmail.com</span>
      </div>
      <div className="info_">
        <PermPhoneMsg /> <span>09914219787/09213479586</span>
      </div>
    </div>
  </div></React.Fragment>
  )
}

export default Info