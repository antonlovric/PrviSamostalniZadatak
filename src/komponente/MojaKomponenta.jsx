import { useEffect, useState } from 'react';

function MojaKomponenta() {
  const [tekst, postaviTekst] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const datum = new Date();
      postaviTekst(datum.toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{tekst}</p>
    </div>
  );
}

export default MojaKomponenta;
