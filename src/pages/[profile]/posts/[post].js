import { usePageLayout } from '../../../components/App/PageLayout'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import Client from '../../../utils/Client'
import useMeta from '../../../hooks/meta'
import Compose from '../../../components/App/Compose'
import Post from '../../../components/App/Post'
import { useEffect, useRef, useLayoutEffect } from 'react'
import useAlert from '@/hooks/alert'

const PostPage = ({ postId, authCheck, post, handle }) => {
	const router = useRouter()
	const postRef = useRef(null)
	const { createAlert } = useAlert()

	const setMeta = useMeta(post && `${post.author.name} (@${post.author_handle}) on Auralite`, post?.content, `/api/meta/post?postId=${postId}`)

	const newPost = () => {
		createAlert({ title: 'Reply Posted', body: 'Your reply has been posted. Changes might take a few seconds to propagate.' })
	}

	const updateReplyList = () => {
		createAlert({ title: 'Post Deleted', body: 'Your post has been deleted. Changes might take a few seconds to propagate.' })
	}

	const scrollToReply = () => {
		window.requestAnimationFrame(() => {
			setTimeout(() => {
				window.scroll({ top: postRef.current?.offsetTop })
			}, 200)
		})
	}

	useEffect(() => {
		router.events.on('routeChangeComplete', () => scrollToReply())

		return () => {
			router.events.off('routeChangeComplete', () => scrollToReply())
		}
	}, [])

	useLayoutEffect(() => {
		scrollToReply()
	}, [postRef])

	return (
		<>
			{setMeta}
			<div className="max-w-md sm:max-w-3xl rounded-b-lg relative z-0 mt-4">
				<div>
					<div className="bg-white sm:rounded-lg sm:shadow sm:mb-4">
						<Post ref={postRef} post={post} shouldLink={false} featured={true} onDelete={() => router.back()} withBorder={false} />
					</div>
					<div className="min-h-screen">
						{authCheck && <Compose replyTo={post} onPost={newPost} />}
						<div className="bg-white sm:rounded-lg sm:shadow mb-4">{post ? post.replies.map((reply, key) => <Post key={reply.id} post={reply} showReply={false} onDelete={updateReplyList} withBorder={key + 1 !== post.replies.length} />) : [...Array(3).keys()].map((key) => <Post key={key} />)}</div>
					</div>
				</div>
			</div>
		</>
	)
}

PostPage.getLayout = usePageLayout()

export const getStaticProps = async ({ params: { profile, post } }) => {
	try {
		return {
			props: {
				postId: post,
				handle: profile,
				post: await Client.post({ postId: post }),
			},
			revalidate: 1,
		}
	} catch (error) {
		return { props: { isError: true, statusCode: error.response.status }, revalidate: 1 }
	}
}

export const getStaticPaths = async () => ({
	paths: [],
	fallback: true,
})

export default PostPage
