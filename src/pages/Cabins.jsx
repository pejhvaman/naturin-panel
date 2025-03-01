import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Button from "../ui/Button";

function Cabins() {
  const [isFormOpen, setIsFormOpen] = useState();
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>filter / sort</p>
      </Row>
      <Row>
        <CabinTable />

        <Button onClick={() => setIsFormOpen((is) => !is)}>
          Add a new Cabin
        </Button>

        {isFormOpen && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
