import type { Categoria } from '../../types';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';
import styles from './Carousel.module.css';

interface CarouselProps {
    ignoreFirstVideo?: boolean;
    category: Categoria;
}

function Carousel({ ignoreFirstVideo, category }: CarouselProps) {
    const categoryTitle = category.title;
    const categoryColor = category.color;
    const categoryExtraLink = category.link_extra;
    const videos = category.videos || [];

    return (
        <section className={styles.carouselContainer}>
            {categoryTitle && (
                <>
                    <h3
                        className={styles.title}
                        style={{ backgroundColor: categoryColor || 'red' }}
                    >
                        {categoryTitle}
                    </h3>
                    {categoryExtraLink && (
                        <a
                            className={styles.extraLink}
                            href={categoryExtraLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {categoryExtraLink.text}
                        </a>
                    )}
                </>
            )}
            <Slider>
                {videos.map((video, index) => {
                    if (ignoreFirstVideo && index === 0) {
                        return null;
                    }

                    return (
                        <SliderItem key={video.id}>
                            <VideoCard
                                videoTitle={video.title}
                                videoURL={video.url}
                                categoryColor={categoryColor}
                            />
                        </SliderItem>
                    );
                })}
            </Slider>
        </section>
    );
}

export default Carousel;
