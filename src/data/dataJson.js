
import axios from "axios";

export const fetchData = async () => {
  try {
    const res = await axios({
      method: "get",
      url: "http://localhost:3000/flowers",
    });
    return res.data;
  } catch (error) {
    console.error("Xatolik yuz berdi:", error);
    throw error;
  }
};