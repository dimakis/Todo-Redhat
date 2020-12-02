// import React, { useContext } from "react";
// import { TodosContext } from "../contexts/todoContext"


// const TodoFilterControls = props => {
//     const context = useContext(TodosContext);

//     const handleTextChange = e => {
//         handleChange(e, "name", e.target.value);
//     };

//     return (
//         <form
//             onSubmit={e => {
//                 e.preventDefault();
//                 dispatch({ type: ADD_TODO, task: value });
//                 clearValue();
//             }}
//             className={classes.TodoForm}
//         >
//             <input
//                 placeholder="filter by..."
//                 value={value}
//                 onChange={handleChange}
//                 className={classes.input}
//             />
//         </form>
//     )
// }
// export default TodoFilterControls;