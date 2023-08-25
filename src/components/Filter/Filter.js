export const Filter = ({ filter, onFilter }) => {
  return <input type="text" value={filter} onChange={evt => onFilter(evt.target.value)} />;
};
