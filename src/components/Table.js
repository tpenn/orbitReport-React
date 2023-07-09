import { useState } from "react";

const tableFields = [
  { name: 'Name', field: 'name' },
  { name: 'Type of Satellite', field: 'type' },
  { name: 'Launch Date', field: 'launchDate' },
  { name: 'Status', field: 'operational' },
];

const Table = ({ sat, setSat }) => {
  const [sorting, setSorting] = useState({ field: '', sortOrder: true });
  const handleClick = event => {
    let ascending = sorting.sortOrder;

    if (sorting.field === event.target.id) ascending = !ascending;
    setSorting({ field: event.target.id, sortOrder: ascending });
  };

  return (
    <table>
      <thead>
      <tr>
        {
          tableFields.map(tableField =>
            <th key={tableField.field} id={tableField.field} onClick={handleClick} className={sorting.field === tableField.field ? "activeSort" : undefined}>
              {tableField.name}
            </th>
          )
        }
      </tr>
      </thead>
      <tbody>
        { sat
            .sort((a, b) => (a[sorting.field] > b[sorting.field] ? 1 : a[sorting.field] < b[sorting.field] ? -1 : 0) * (sorting.sortOrder ? 1 : -1))
            .map(bird =>
              <tr key={bird.id} className={bird.type.replace(/\s+/g, '-').toLowerCase()}>
                <td>{bird.name}</td>
                <td>{bird.type}</td>
                <td>{bird.launchDate}</td>
                <td>{bird.operational ? "Active" : "Inactive"}</td>
              </tr>
            )
        }
      </tbody>
    </table>
  )
};

export default Table;