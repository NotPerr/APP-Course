import axios from "axios";

export const getUbikeInfo = async () => {
   const { data } = await axios.get('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json?fbclid=IwAR0MkTPXEsckjEYdy1hjbY4_3cGrLAinGFXgMkcLMVil54Q6-TY9RX060GU');
   return data;
 };
