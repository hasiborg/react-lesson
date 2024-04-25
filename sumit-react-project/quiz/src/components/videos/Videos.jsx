import classes from '../../style/videos.module.css';
import Video from './Video';

export default function videos() {
	return (
		<>
			<div className={classes.videos}>
				<Video />
				<Video />
				<Video />
				<Video />
				<Video />
				<Video />
			</div>
		</>
	);
}
