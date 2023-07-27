import { useEffect} from 'react';
import './App.css';
import { fetchPosts } from './store/page-reducer';
import { useAppDispatch, useAppSelector } from './common/hooks';
import { RoutsProject } from './components/routing/RoutsProject';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const dispatch = useAppDispatch();
  const actualPage = useAppSelector(state => state.pages.page);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPosts());
    navigate(`/${actualPage}`);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <RoutsProject/>
    </div>
  );
}

export default App;
