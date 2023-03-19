import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      {`${error.error.message}`}
      <br />
      {`${error.status}`}
    </div>
  );
};

export default Error;
