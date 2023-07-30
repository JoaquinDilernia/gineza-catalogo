import { Center } from "@chakra-ui/react";
import ItemList from "./ItemList";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import Loading from "../Loading";

const ItemListContainer = () => {
  const { categoria} = useParams();
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "productos");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProductos(docs);
      setIsLoading(false);
    });
  }, []);

  const catFilterCategory = productos.filter(
    (productos) => productos.Categoria === categoria
  );
  

  function render() {
    if (isLoading) {
      return <Loading />;
    } else {
      return categoria ? (
        <ItemList productos={catFilterCategory} />
      ) : (
        <ItemList productos={productos} />
      );
    }
  }

  function link_routes() {
    if (categoria != null) {
      return "Catalogo > "
    }  else {
      return <h2 id="catalogo_text"></h2>;
    }
  }

  return (
    <>
    
      <div className="links_tree">
        {link_routes()}
        {({categoria}) ? <Link>{categoria}</Link>:{}}
      </div>
      <div>
        <Center color="black"></Center>
        {render()}
      </div>
    </>
  );
};

export default ItemListContainer;