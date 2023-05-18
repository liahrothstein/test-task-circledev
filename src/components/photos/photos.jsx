import { useGetPhotosQuery } from '../../store/exp-api';
import { Header } from '../header/header';

import './photos.css';

export const Photos = () => {
    const { data = [] } = useGetPhotosQuery();

    return (
        <section className="photos">
            <Header />
            <div className="mainContainer">
                {
                    data.map((photo, i, a) => (
                        <div className="container" key={photo.id}>
                            <div className="photo"><img src={photo.url} alt="" /></div>
                            <div className="title">{photo.title}</div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}