import Client from '@/utils/Client'
import Avatar from '@/components/App/Avatar'
import useFormat from '@/hooks/format'
import Logo from '@/components/Global/Logo'

const PostMeta = ({ post }) => {
	const postContent = useFormat(post.content, { underlineLinks: true })

	return (
		<div className="flex items-center justify-center h-screen bg-indigo-50">
			<div role="presentation" className="absolute inset-0 pointer-events-none overflow-hidden">
				<div className="absolute top-0 inset-x-0 h-8 bg-top bg-repeat bg-top-pattern cursor-pointer pointer-events-auto" style={{ transform: 'scale(2)' }} />
				<div className="absolute bottom-0 inset-x-0 h-8 bg-top bg-repeat bg-top-pattern cursor-pointer pointer-events-auto" style={{ transform: 'scale(2)' }} />
				<div className="absolute top-0 left-0 pt-20 pl-6">
					<svg className="block h-auto text-indigo-300" viewBox="0 0 116 116" xmlns="http://www.w3.org/2000/svg" style={{ width: '20rem' }}>
						<path
							d="M114.74 0a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm-12.61 12.609a1.26 1.26 0 100 2.521 1.26 1.26 0 000-2.521zm0-12.609a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zM89.522 0a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0 12.609a1.26 1.26 0 100 2.521 1.26 1.26 0 000-2.521zm0 12.608a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm-12.609 0a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0-12.608a1.26 1.26 0 100 2.521 1.26 1.26 0 000-2.521zm0-12.609a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0 37.826a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zM64.304 25.217a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0-12.608a1.26 1.26 0 100 2.521 1.26 1.26 0 000-2.521zm0-12.609a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0 37.826a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0 12.609a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zM51.696 25.217a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0-12.608a1.26 1.26 0 100 2.521 1.26 1.26 0 000-2.521zm0-12.609a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0 37.826a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0 12.609a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0 12.608a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zM39.087 25.217a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0-12.608a1.26 1.26 0 100 2.521 1.26 1.26 0 000-2.521zm0-12.609a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0 37.826a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0 12.609a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0 12.608a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0 12.61a1.26 1.26 0 100 2.52 1.26 1.26 0 000-2.52zM26.478 25.216a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0-12.608a1.26 1.26 0 100 2.521 1.26 1.26 0 000-2.521zm0-12.609a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0 37.826a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0 12.609a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0 12.608a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0 12.61a1.26 1.26 0 100 2.52 1.26 1.26 0 000-2.52zm0 12.608a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zM13.87 25.217a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0-12.608a1.26 1.26 0 100 2.521 1.26 1.26 0 000-2.521zM13.87 0a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0 37.826a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0 12.609a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0 12.608a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0 12.61a1.26 1.26 0 100 2.52 1.26 1.26 0 000-2.52zm0 12.608a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0 12.609a1.26 1.26 0 100 2.521 1.26 1.26 0 000-2.521zM1.26 25.217a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0-12.608a1.26 1.26 0 100 2.521 1.26 1.26 0 000-2.521zM1.26 0a1.26 1.26 0 100 2.522A1.26 1.26 0 001.26 0zm0 37.826a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0 12.609a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0 12.608a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0 12.61a1.26 1.26 0 100 2.52 1.26 1.26 0 000-2.52zm0 12.608a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522zm0 12.609a1.26 1.26 0 100 2.521 1.26 1.26 0 000-2.521zm0 12.608a1.26 1.26 0 100 2.522 1.26 1.26 0 000-2.522z"
							fill="currentColor"
							fillRule="evenodd"
						/>
					</svg>
				</div>
				<div className="absolute top-0 left-0 pt-24 pl-14" />
				<div className="absolute bottom-0 right-0 pb-20 pr-6">
					<svg className="block h-auto text-indigo-300" viewBox="0 0 116 116" xmlns="http://www.w3.org/2000/svg" style={{ width: '20rem' }}>
						<path
							d="M1.26 116a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm12.61-12.609a1.26 1.26 0 100-2.521 1.26 1.26 0 000 2.521zm0 12.609a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm12.608 0a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0-12.609a1.26 1.26 0 100-2.521 1.26 1.26 0 000 2.521zm0-12.608a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm12.609 0a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0 12.608a1.26 1.26 0 100-2.521 1.26 1.26 0 000 2.521zm0 12.609a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0-37.826a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm12.609 12.609a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0 12.608a1.26 1.26 0 100-2.521 1.26 1.26 0 000 2.521zm0 12.609a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0-37.826a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0-12.609a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm12.608 25.218a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0 12.608a1.26 1.26 0 100-2.521 1.26 1.26 0 000 2.521zm0 12.609a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0-37.826a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0-12.609a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0-12.608a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm12.609 37.826a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0 12.608a1.26 1.26 0 100-2.521 1.26 1.26 0 000 2.521zm0 12.609a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0-37.826a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0-12.609a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0-12.608a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0-12.61a1.26 1.26 0 100-2.52 1.26 1.26 0 000 2.52zm12.609 50.436a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0 12.608a1.26 1.26 0 100-2.521 1.26 1.26 0 000 2.521zm0 12.609a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0-37.826a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0-12.609a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0-12.608a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0-12.61a1.26 1.26 0 100-2.52 1.26 1.26 0 000 2.52zm0-12.608a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm12.608 63.044a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0 12.608a1.26 1.26 0 100-2.521 1.26 1.26 0 000 2.521zm0 12.609a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0-37.826a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0-12.609a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0-12.608a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0-12.61a1.26 1.26 0 100-2.52 1.26 1.26 0 000 2.52zm0-12.608a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0-12.609a1.26 1.26 0 100-2.521 1.26 1.26 0 000 2.521zm12.61 75.653a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0 12.608a1.26 1.26 0 100-2.521 1.26 1.26 0 000 2.521zm0 12.609a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0-37.826a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0-12.609a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0-12.608a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0-12.61a1.26 1.26 0 100-2.52 1.26 1.26 0 000 2.52zm0-12.608a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522zm0-12.609a1.26 1.26 0 100-2.521 1.26 1.26 0 000 2.521zm0-12.608a1.26 1.26 0 100-2.522 1.26 1.26 0 000 2.522z"
							fill="currentColor"
							fillRule="evenodd"
						/>
					</svg>
				</div>
			</div>
			<div className="w-full">
				<div className="flex items-center justify-center -mb-20 relative z-20">
					<div className="rounded-full border-indigo-500 overflow-hidden" style={{ borderWidth: '8px' }}>
						<Avatar src={post.author.avatar} lazy={false} sizeClasses="h-32 w-32" />
					</div>
				</div>
				<div className="relative pt-24 pb-16 px-6 w-full max-w-6xl mx-auto bg-indigo-100 border-indigo-500 rounded-xl shadow" style={{ borderWidth: '8px' }}>
					<div className="absolute top-0 left-0 -mt-16 flex items-center">
						<Logo className="w-12 h-12 -mt-2" />
						<span className="ml-2 text-4xl font-screen text-indigo-500 font-bold">Auralite</span>
					</div>
					<div className="absolute bottom-0 right-2 flex items-center">
						<span className="ml-2 text-4xl font-screen-italic text-indigo-500 font-bold">@{post.author.handle}</span>
					</div>
					<div className="text-4xl leading-normal text-indigo-600 text-center" style={{ fontSize: '3.5vw' }}>
						{postContent}
						<div className="mt-4 flex items-center justify-center space-x-6">
							{post.media &&
								post.media.map((_, key) => (
									<svg key={key} className="w-10 h-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
										<path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
									</svg>
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export const getServerSideProps = async ({ query }) => {
	try {
		return { props: { post: await Client.post({ postId: query.postId }) } }
	} catch (error) {
		return { props: { isError: true, statusCode: error.response.status } }
	}
}

export default PostMeta
