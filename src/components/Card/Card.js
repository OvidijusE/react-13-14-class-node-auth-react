function Card(props) {
  const normalDate = () => {
    const gotDateObj = new Date(props.date);
    const niceDate = gotDateObj.toLocaleString('lt-LT', { dateStyle: 'long' });
    return niceDate;
  };
  return (
    <div className='card w-25'>
      <div className='card-body'>
        <h5 className='card-title'>{props.title}</h5>
        <h6 className='card-subtitle mb-2 text-muted'>{normalDate()}</h6>
        <p className='card-text'>{props.content}</p>
        <a href='/' className='btn btn-primary'>
          See more
        </a>
      </div>
    </div>
  );
}

export default Card;
