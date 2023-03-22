import React from "react";

// Component
//import HeroImage from "./HeroImage";
import Grid from "./Grid";
import SearchBar from "./SearchBar";
import Card from "./Card";

// Hook
import { useComuniFetch } from "../hooks/useComuniFetch";

// Image
//import NoImage from '../images/no_image.jpg'
//import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

const Home = () => {
  const { state, loading, error, setSearchTerm } = useComuniFetch();

  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header="Risultato">
        {state.results.map(
          (comuni) => (
            console.log(comuni),
            (
              <Card
                nome={comuni?.["Denominazione in italiano"]}
                //cap={comuni?.cap}
                // provincia={comuni.result[0]?.["nome"]}
                //nome={comuni?.nome}
                codice={comuni?.["Codice Comune formato alfanumerico"]}
                provincia={comuni?.comuni[0]?.provincia.nome}
                reportComuni={comuni?.reportComuni}
                reportComuni2016={comuni?.reportComuni2016}
              />
            )
          )
        )}
      </Grid>
    </>
  );
};

export default Home;
