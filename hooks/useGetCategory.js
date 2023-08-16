import { useState, useEffect } from "react";

export const useGetCategory = (slug) => {
  const [categoryName, setCategoryName] = useState("");
  useEffect(() => {
    if (slug == "react") {
      setCategoryName("React や Javascript");
    } else if (slug == "wp") {
      setCategoryName("WordPress");
    } else if (slug == "blog") {
      setCategoryName("Blog");
    }
    // console.log('categoryName' +categoryName)
  }, [slug]);
  return { categoryName };
};
