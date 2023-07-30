import { Container, Flex } from "@chakra-ui/react";
import Item from "./Item";
import React from 'react'

const ItemList = ({productos}) => {
  return (
    <>
    <Container maxW="container.lg">
      <Flex gap={"5"} wrap="wrap">
        {productos.map((productos) => (
          <Item
          key={productos.id}
          SKU={productos.SKU}
          Nombre={productos.Nombre}
          Desc={productos.Desc}
          Categoria={productos.Categoria}
          img={productos.img}
          />
          ))}
      </Flex>
    </Container>
</> 
  )
}

export default ItemList