import { Avatar } from "@mui/material";
import React from "react";
import prof from "../../assets/prof.jpg";
const Profile = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center pb-1 pt-1">
        <Avatar sx={{ width: 75, height: "auto" }} src={prof} />
        <h5 className="mb-1 text-xl font-medium">Joe Cristian Jamis</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          React.js Developer
        </span>
        <div className="flex mt-4 space-x-3 lg:mt-6">
          <a
            href="https://web.facebook.com/joetian.jamis.7/"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add friend
          </a>
          <a
            href="https://web.facebook.com/joetian.jamis.7/"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
          >
            Message
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
