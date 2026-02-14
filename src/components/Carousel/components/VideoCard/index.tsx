import styles from './VideoCard.module.css';

interface VideoCardProps {
    videoTitle: string;
    videoURL: string;
    categoryColor: string;
}

function getYouTubeId(youtubeURL: string): string {
    return youtubeURL.replace(
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
        '$7',
    );
}

function VideoCard({ videoTitle, videoURL, categoryColor }: VideoCardProps) {
    const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;

    return (
        <a
            className={styles.videoCard}
            href={videoURL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                backgroundImage: `url(${image})`,
                borderColor: categoryColor || 'red',
            }}
            title={videoTitle}
        >
            {/* thumbnail card */}
        </a>
    );
}

export default VideoCard;
