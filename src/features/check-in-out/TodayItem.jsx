import styled from "styled-components";
import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import CheckoutButton from "./CheckoutButton";
import { Link } from "react-router-dom";

const StyledTodayItem = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 8fr 2fr;
  grid-template-rows: auto;
  gap: 0.8rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  text-align: center;
  font-weight: 500;
  overflow-wrap: break-word;
  overflow: hidden;
`;

function TodayItem({ activity }) {
  const { id, status, numNights, guests } = activity;

  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status === "checked-in" && <Tag type="yellow">Departing</Tag>}

      <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`} />
      <Guest>{guests.fullName}</Guest>
      <div style={{ textAlign: "center" }}>{numNights} nights</div>

      {status === "unconfirmed" && (
        <Button
          style={{ gridColumn: "1/-1" }}
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check in
        </Button>
      )}
      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

export default TodayItem;
