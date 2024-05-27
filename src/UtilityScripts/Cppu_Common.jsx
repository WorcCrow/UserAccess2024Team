import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";

export const useModal = () => {
  const [bolShow, SetShow] = useState(false);
  const Show = () => {
    SetShow(true);
  };
  const Hide = () => {
    SetShow(false);
  };
  return [bolShow, Show, Hide];
};

export const fetchTodo = (callback = () => {}) => {
  fetch(
    "https://jsonplaceholder.typicode.com/posts/1/comments?_start=0&_limit=5"
  )
    .then((response) => response.json())
    .then((json) =>
      callback(
        json.map((item, index) => ({
          ...item,
          email: `${index} ${item.email}`,
        })) || []
      )
    );
};

export const useResponsive = () => {
  // screen resolutions
  const [state, setState] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  // remove the listener
  const Cleanup = useCallback(() => {
    window.removeEventListener("resize", onResizeHandler, false);
  }, []);

  // update the state on window resize
  const onResizeHandler = () => {
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth <= 990;
    const isDesktop = window.innerWidth > 990;

    setState({ isMobile, isTablet, isDesktop });
  };

  // debounce the resize call
  const debouncedCall = debounce(onResizeHandler, 500);

  // add event listener
  const Setup = useCallback(() => {
    window.addEventListener("resize", debouncedCall, false);
  }, [debouncedCall]);

  useEffect(() => {
    // update the state on the initial load
    onResizeHandler();

    // assign the event
    Setup();

    return () => {
      // remove the event
      Cleanup();
    };
  }, [Cleanup, Setup]);

  return state;
};
