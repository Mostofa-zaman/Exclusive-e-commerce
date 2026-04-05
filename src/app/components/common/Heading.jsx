import React from "react";
import Button2  from "../common/Button2";
const Heading = ({ title, description = true }) => {
  return (
    <div className="flex flex-col items-start gap-y-6">
      <div className="flex items-center gap-x-4">
        <Button2 className="">
          {title ? title : "Today’s"}
        </Button2>
      </div>
      <div>
        {description && (
          <h1 className="font-inter font-semibold text-[36px] text-text_black000000 capitalize">
            {description ? description : "Flash Sales"}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Heading;