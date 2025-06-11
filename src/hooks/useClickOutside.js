import { useEffect, useRef } from "react";

function useClickOutside(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      // if an open ref exist and it is not a click target:
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handler, listenCapturing]);

  return ref;
}

export default useClickOutside;
