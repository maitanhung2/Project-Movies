import { useState } from "react";

const Button = () => {
  const [isLike, setIsLike] = useState(false);
  function changeLike() {
    setIsLike(!isLike);
  }
  return (
    <>
      <button
        className={isLike === false ? "btn_root" : "btn_change"}
        onClick={changeLike}
      >
        Like
      </button>
    </>
  );
};

export default Button;
