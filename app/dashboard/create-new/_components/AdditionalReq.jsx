import { Textarea } from "@/components/ui/textarea";
import React from "react";

const AdditionalReq = ({additionalrequirementInput}) => {
  return (
    <div className=" mt-4">
      <label className=" text-gray-500">Enter additional requirements (optional)</label>
      <Textarea className='mt-2' onChange={(e) => additionalrequirementInput(e.target.value)} />
    </div>
  );
};

export default AdditionalReq;
