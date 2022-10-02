import Clock from './Clock';

function WatchesList(props) {
  const { clocks, onDelete } = props;

  const elements = clocks.map((item) => {
    const { id } = item;
    return (
      <Clock
        className='clock'
        key={id}
        item={item}
        onDelete={() => onDelete(id)}
      />
    );
  });

  return (
    <div className='clock-list'>
      {elements}
   </div>
  );
}

export default WatchesList;