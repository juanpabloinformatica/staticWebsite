import axios from "axios";
import { useEffect, useState } from "react";

function Fetching() {
  function effectFunction() {
    const fetch = async () => {
      try {
        const response = await axios.get(
          "https://picsum.photos/v2/list?page=2&limit=100"
        );
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }
  useEffect(effectFunction);
  return <h1>fetching</h1>;
}

export default Fetching;
