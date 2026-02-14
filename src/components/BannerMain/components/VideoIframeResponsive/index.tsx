import styles from './VideoIframeResponsive.module.css';

interface VideoIframeResponsiveProps {
    youtubeID: string;
}

function VideoIframeResponsive({ youtubeID }: VideoIframeResponsiveProps) {
    return (
        <div className={styles.videoContainer}>
            <iframe
                className={styles.responsiveIframe}
                title="Video Player"
                src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}

export default VideoIframeResponsive;
