import classNames from 'classnames';
import { useGetTodosQuery } from '../../store/exp-api';
import { Header } from '../header/header';
import './todos.css';

export const Todos = () => {
    const { data = [] } = useGetTodosQuery();

    return (
        <section className="todos">
            <Header />
            <div className="mainContainer">
                {
                    data.map((todo, i, a) => (
                        <div className="container" key={todo.id}>
                            <input type="checkbox" checked={(todo.completed === true) ? true : false} />
                            <div className={classNames('title', { completed: todo.completed })}>{todo.title}</div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}