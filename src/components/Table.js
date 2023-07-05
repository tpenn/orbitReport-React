const Table = ({ sat }) => {
  return (
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Type of Satellite</th>
        <th>Launch Date</th>
        <th>Status</th>
      </tr>
      </thead>
      <tbody>
        { sat.map(bird =>
          <tr key={bird.id}>
            <td>{bird.name}</td>
            <td>{bird.type}</td>
            <td>{bird.launchDate}</td>
            <td>{bird.operational ? "Active" : "Inactive"}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;