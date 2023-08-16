import { useState, useEffect } from "react";

export const useGetCategoryText = (slug) => {
  const [categoryText, setCategoryText] = useState("");
  useEffect(() => {
    if (slug == "react") {
      setCategoryText("React や Javascript の技術情報を発信します");
    } else if (slug == "wp") {
      setCategoryText("WordPress の技術情報を発信します");
    } else if (slug == "blog") {
      setCategoryText("行ったこと、やったことなどのイベントブログです");
    }
    // console.log('categoryText' +categoryText)
  }, [slug]);
  return { categoryText };
};
