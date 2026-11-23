import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Entry point for a clipper's personal link (iglow.swiss/go/<code>).
// Stores the clipper's code invisibly, then sends the visitor into the
// normal /reserve flow. Reserve.js picks the code back up when it builds
// the final Stripe redirect, so the code rides along without the
// visitor ever seeing or typing it.
const Go = () => {
  const { code } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      sessionStorage.setItem('iglow_clipper_code', code.toUpperCase());
    }
    navigate('/reserve', { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default Go;
