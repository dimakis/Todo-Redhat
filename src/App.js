import logo from './logo.svg';
import './App.css';
import useStyles from "./styles/AppStyles";
import TodoApp from "./components/TodoApp"

function App() {
  const classes = useStyles();


  return (
    <div className={classes.App}>
      <header className={classes.header}>
        <h1>
          todo<span>list</span>
        </h1>
        <h2>A simple Todo list...</h2>
      </header>
      <TodoApp />
    </div>
  );
}
export default App;
