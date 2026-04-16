import { useCallback } from "react";

const useScrollTo = () =>
  useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

export default useScrollTo;
