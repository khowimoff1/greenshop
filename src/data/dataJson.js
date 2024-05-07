
import axios from "axios";

export const fetchData = async () => {
    const res = await axios({
      method: "get",
    });
    return res.data;
  
};