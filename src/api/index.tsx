import axios from "axios";

export const getProducts = async () => {
  try {
    const res = await axios.get("https://testtask.twnty.de/");
    console.log(res);
  } catch (error) {
    console.log(error)
  }
};
