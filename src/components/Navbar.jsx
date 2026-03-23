import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li>
          <button
            className={location.pathname === '/yazar' ? 'active' : ''}
            onClick={() => navigate('/yazar')}
          >
            Yazar Hakkında
          </button>
        </li>
      </ul>
    </nav>
  );
}
