import './App.css';
import Todos from './components/todos';
import Todo from './components/todo';
import Loading from './components/loading';
import { useDispatch, useSelector } from 'react-redux';
import { INITIAL_STATE, LOAD_SPINNER,VIEW_EDIT_TODO} from './helpers/action_types';

function App() {
  const dispatch = useDispatch();
  const urlState = useSelector((state) => state.url_reducer);
  const initialState = useSelector((state) => state.users_todos_reducer);
  const loading = useSelector((state)=>state.loading_reducer);
  const loadPage = () => {
    dispatch({type: LOAD_SPINNER});
    return dispatch({ type: INITIAL_STATE, payload: { todos: 'todos' } });

  }
  if(!Object.keys(initialState).length) {
    loadPage();
    if(urlState!=='todos') {
      dispatch({type: VIEW_EDIT_TODO,payload: {id: urlState}});
    }
  }

  let toLoad;
  if(urlState!=='todos') {
    toLoad = <Todo users_todos = {initialState} id ={urlState} />;
  }
  else 
  {
    // toLoad =  Object.keys(initialState).length ? <Todos users_todos={initialState} /> : <button className="btn btn-primary" onClick={loadPage}>Load todos</button> ;
    toLoad =  Object.keys(initialState).length ? <Todos users_todos={initialState} /> : ('') ;

  }
  return (
    <div className='container p-4'>
      {/* {urlState !== 'todos' ? "TODOS SINGLE" : (toLoad)} */}
      {loading ? <Loading />: toLoad}

    </div>
  );
}

export default App;
