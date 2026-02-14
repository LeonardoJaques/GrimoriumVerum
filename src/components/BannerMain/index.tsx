import VideoIframeResponsive from './components/VideoIframeResponsive';
import styles from './BannerMain.module.css';

interface BannerMainProps {
    videoTitle: string;
    videoDescription: string;
    url: string;
}

function getYouTubeId(youtubeURL: string): string {
    return youtubeURL.replace(
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
        '$7',
    );
}

function BannerMain({ videoTitle, videoDescription, url }: BannerMainProps) {
    const youTubeID = getYouTubeId(url);
    const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

    return (
        <section
            className={styles.bannerContainer}
            style={{ backgroundImage: `url(${bgUrl})` }}
        >
            <div className={styles.contentArea}>
                <div className={styles.contentItem}>
                    <h2 className={styles.contentTitle}>{videoTitle}</h2>
                    <p className={styles.contentDescription}>{videoDescription}</p>
                </div>

                <div className={styles.contentItem}>
                    <VideoIframeResponsive youtubeID={youTubeID} />
                    <button className={styles.watchButton}>Assistir</button>
                </div>
            </div>
        </section>
    );
}

export default BannerMain;
