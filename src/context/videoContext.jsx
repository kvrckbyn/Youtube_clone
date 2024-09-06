import { createContext, useEffect, useState } from "react";
import { categories } from "../constans";
import api from "../utils/Api";

export const VideoContext = createContext();

//Sağlayıcı bileşeni oluşturma
export const VideoProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [videos, setVideos] = useState();

  useEffect(() => {
    //seçilen type belirleme
    const type = selectedCategory.type;

    //seçilen kategorinin type'ı menu ise fonksiyonunu buarada durdurur.
    if (type === "menu") return;

    //yüklenmeyi true' çekme
    setIsLoading(true);

    const url =
      type === "home"
        ? "/home"
        : type === "trending"
        ? "/trending"
        : type === "category"
        ? `/search?query=${selectedCategory.name}`
        : "";
    // api isteği at ve durumu state aktar
    api
      .get(url)
      .then((res) => {
        setVideos(res.data.data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [selectedCategory]);

  return (
    <VideoContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        videos,
        error,
        isLoading,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
