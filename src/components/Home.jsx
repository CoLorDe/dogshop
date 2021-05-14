import React from "react";

import {fetchCategories} from "../fetchers/fetchers.js";

function Home() {
  fetchCategories()

  return (
    <>
      <div>

      </div>
    </>
  )
}

export default Home;
