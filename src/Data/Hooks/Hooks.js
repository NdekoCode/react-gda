import { useState, useEffect } from "react";

export function useFetchData(url) {
  // J'initialise mon Etat avec les entités dont j'aurai besoin
  const [state, setState] = useState({
    items: [],
    loading: true,
  });
  //   Quand le composant est monter
  useEffect(() => {
    (async () => {
      // Je recupère les donner d'une maniere asynchrone
      const response = await fetch(url);
      // Je transforme les donner de JSON en objet Javascript
      const data = await response.json();
      //  Si la requete renvois un bon resultat, je recupère les donnés que j'ai met dans mmon etat
      if (response.ok) {
        setState({
          items: data,
          loading: false,
        });
      } else {
        // Recupère tous mais change juste la valeur de "loading" et met y false
        setState((st) => ({ ...st, loading: false }));
      }
    })();
  }, []);

  return [state.items, state.loading];
}
