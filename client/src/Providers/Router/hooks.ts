import { useMemo } from "react";
import { createBrowserHistory, createHashHistory } from "history";

export const usePageRoute = () => {
  const history = useMemo(() => {
    if (window.location.href.includes(".html")) {
      return createHashHistory();
    } else {
      return createBrowserHistory();
    }
  }, []);

  const state = useMemo(() => ({ history }), [history]);

  return { state };
};
