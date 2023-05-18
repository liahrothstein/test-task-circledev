import { useGetCommentsQuery } from '../../store/exp-api';
import { Header } from '../header/header';
import './comments.css';

export const Comments = () => {
    const { data = [] } = useGetCommentsQuery();

    return (
        <section className="comments">
            <Header />
            <div className="mainContainer">
                {
                    data.map((comment, i, a) => (
                        <div className="container" key={comment.id}>
                            <div className="name">{comment.name}</div>
                            <div className="email">{comment.email}</div>
                            <div className="text">{comment.body}</div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}