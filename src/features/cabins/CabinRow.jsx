import styled from "styled-components";

import { formatCurrency } from "../../utils/helpers";
import { GoDuplicate, GoTrash, GoPencil } from "react-icons/go";

import PropTypes from "prop-types";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import CabinsTable from "../../ui/CabinsTable";
import Menus from "../../ui/Menus";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
  border-radius: 2px;
  margin-left: 4px;
  min-width: 20px;

  @media (width <= 768px) {
    display: none;
  }
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
  display: inline-block;

  @media (width<=768px) {
    display: none;
  }
`;

const NoDiscount = styled.span`
  display: inline-block;

  @media (width<=768px) {
    display: none;
  }
`;

CabinRow.propType = {
  cabin: PropTypes.object,
};

function CabinRow({ cabin }) {
  const { createCabin } = useCreateCabin();

  const {
    id: cabinId,
    image,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
  } = cabin;

  const { isDeleting, deleteCabin } = useDeleteCabin();

  const handleDuplicateCabin = () => {
    createCabin({
      name: `Copy of ${name}`,
      image,
      maxCapacity,
      regularPrice,
      discount,
      description,
    });
  };

  return (
    <CabinsTable.Row>
      <Img src={image || "./image"} />
      <Cabin>{name}</Cabin>
      <div style={{ minWidth: "8rem" }}>Fit up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <NoDiscount>&mdash;</NoDiscount>
      )}
      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={cabinId} />

          <Menus.List id={cabinId}>
            <Modal.Open opens="delete">
              <Menus.Button icon={<GoTrash />}>Delete</Menus.Button>
            </Modal.Open>

            <Menus.Button icon={<GoDuplicate />} onClick={handleDuplicateCabin}>
              Duplicate
            </Menus.Button>

            <Modal.Open opens="edit">
              <Menus.Button icon={<GoPencil />}>Edit</Menus.Button>
            </Modal.Open>
          </Menus.List>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="cabin"
              onConfirm={() => deleteCabin(cabinId)}
              disabled={isDeleting}
            />
          </Modal.Window>

          <Modal.Window name="edit">
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>
        </Menus.Menu>
      </Modal>
    </CabinsTable.Row>
  );
}

export default CabinRow;
