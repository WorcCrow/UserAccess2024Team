import { useState } from "react";

const CustomHook = () => {
  const [show, SetStatus] = useState(false);

  const Open = () => SetStatus(true);
  const Close = () => SetStatus(false);

  return [Open, Close, show];
};

export default CustomHook;
