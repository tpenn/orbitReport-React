const Counts = ({ count, sat }) =>
  (
    <table className="satCountTable">
      <thead>
      <tr>
        <th>Total</th>
        <th>{sat.length}</th>
      </tr>
      </thead>
      <tbody>
        { Object.keys(count).map(type =>
          <tr key={type} className={type.replace(/\s+/g, '-').toLowerCase()}>
            <td>{type}</td>
            <td>{count[type]}</td>
          </tr>
        )}
      </tbody>
    </table>
  );

export default Counts;