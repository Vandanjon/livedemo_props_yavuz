function Avatar(props: { firstName: string; image: string; lastName: string }) {
	const { firstName, image, lastName } = props;

	return (
		<figure>
			<img src={image} alt={firstName} />
			<legend>
				{firstName} {lastName}
			</legend>
		</figure>
	);
}

export default Avatar;
