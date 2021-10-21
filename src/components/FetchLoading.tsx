interface Props {
	title: string
}

export const FetchLoading = (props: Props) => {
	return (
		<div data-testid="FetchLoading">
			<p className="mb-3">{props.title}</p>
			<div className="spinner-border text-primary" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	)
}
