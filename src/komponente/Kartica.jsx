const Kartica = (svojstva) => {
  return (
    <div className='kartica'>
      <div className='gornji-dio'>
        {svojstva.ikona}
        <h2>{svojstva.naslov}</h2>
        <hr />
      </div>
      <div className='srednji-dio'>{svojstva.srednjiDio}</div>
    </div>
  );
};

export default Kartica;
