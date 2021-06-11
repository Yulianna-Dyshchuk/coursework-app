import { useRequest } from "./useRequest";

export const useApi = () => {
  const { get } = useRequest();

  return {
    getCategories: ({ debug = false }) => get({ endpoint: "categories", debug }),
    getGallery: ({ debug = false }) => get({ endpoint: "gallery", debug }),
  };
};
