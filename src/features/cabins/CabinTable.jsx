import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import CabinsTable from "../../ui/CabinsTable";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

function CabinTable() {
  const { isCabinsLoading, cabins } = useCabins();

  const [searchParams] = useSearchParams();

  if (isCabinsLoading) return <Spinner />;

  if (!cabins.length || !cabins) return <Empty resourceName="Cabins" />;

  const filterValue = searchParams.get("discount") || "all";
  console.log(filterValue);

  let filteredCabins;

  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  const sortBy = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <CabinsTable columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <CabinsTable.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </CabinsTable.Header>
        <CabinsTable.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        ></CabinsTable.Body>
      </CabinsTable>
    </Menus>
  );
}

export default CabinTable;
