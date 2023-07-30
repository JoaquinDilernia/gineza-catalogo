import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Divider,
  Button,
  Center,
  Flex
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Item = ({ id, Nombre, Desc, SKU, img }) => {


  return (
    <div>
      <div key={id}>
        <Flex>
          <Card maxW="sm">
            <CardBody>
            <Image src={img} width={250} />
              <Stack mt="6" spacing="3">
              <Heading size="sm">{Nombre}</Heading>
                <Text>{Desc}</Text>
              </Stack>
            </CardBody >
            <Divider />
            <CardFooter>
            <Text>SKU: {SKU}</Text>
            </CardFooter>
          </Card>
        </Flex>
      </div>
    </div>
  )
}

export default Item