import React from 'react';
import Card from './Card';
import { Flex } from "@chakra-ui/react";
import NoData from './NoData';

const HouseList = (props) => {

    const {data} = props
  return (
    <Flex flexWrap={"wrap"} justifyContent="center">
        {/*
        <Button colorScheme="blue" onClick={toggleShow}>
        Completado
      </Button>
      {show && <Spinner color="red.500" size="xl" thickness="4px" />}
      
      //{
      //  !show ? (<Image src={url} alt="img"/>) : (<Skeleton height = "40px"/>)
      //}*/}
      {data.map((casa, i) => {
        return <Card key={i} info={casa} />;
      })}
      {data.length === 0 && <NoData />}
    </Flex>
  )
}

export default HouseList