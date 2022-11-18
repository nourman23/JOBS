import React from "react";
import Link from "@mui/material/Link";

export const NotFound = () => {
  return (
    <div class="flex items-center justify-center py-12">
      <div class="bg-white dark:bg-gray-800 border dark:border-gray-900 rounded-md flex items-center justify-center mx-4 md:w-2/3">
        <div class="flex flex-col items-center py-16">
          <h1 class="px-4 pt-8 pb-4 text-center dark:text-white text-5xl font-bold leading-10 text-gray-800">
            404 OOPS!
          </h1>
          <p class="px-4 pb-10 text-base leading-none dark:text-gray-200 text-center text-gray-600">
            Sorry , we cannot find the page you are looking for
          </p>
          <Link href="/Home" variant="body2">
            {" "}
            <button
              style={{ backgroundColor: "#1976d2" }}
              class="mx-4 h-10 w-44  rounded-md text-white text-base  hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800"
            >
              Go To Home Page
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
