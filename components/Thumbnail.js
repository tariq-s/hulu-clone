import { ThumbUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import styles from '../styles/thumbnail.module.css'
function Thumbnail({ result }) {
    const BASE_URL = 'https://image.tmdb.org/t/p/original/';
    return (
        <div className={`${styles.thumbnail} group`}>
            <Image
                layout='responsive'
                src={
                    `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                    `${BASE_URL}${result.poster_path}`
                }
                height={1000}
                width={1920}
            />
            <div className={styles.info}>
                <p className={styles.overview}>{`${result.overview.substring(0, 50)}...`}</p>

                <p className={`text-2xl text-white transition-all duration-100 ease-in-out ${styles.title}`}>
                    {result.title || result.original_name}
                </p>

                <p className='mt-1 flex items-center opacity-0 group-hover:opacity-100'>
                    {result.media_type && `${result.media_type} •`} &nbsp;
                    {result.release_date || result.first_air_date} &nbsp; • &nbsp;
                    <ThumbUpIcon width={20} className='h-5' /> {result.vote_count}
                </p>
            </div>
        </div>
    )
}

export default Thumbnail
