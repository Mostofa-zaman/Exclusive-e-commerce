import React from "react";
import Button2 from "../common/Button2";
const Heading = ({title, description}) => {
  return (
    <div className="flex flex-col items-start gap-y-6">
      <Button2 children={title} className="title16PXSemiBold" />
      <h1 className="heading36PXBold">{description}</h1>
    </div>
  );
};

export default Heading;
