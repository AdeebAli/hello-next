import Layout from '../components/myLayout';
import Link from 'next/link';

const PostLink = props => (
	<li>
		<Link href={`/post?title=${props.title}`}>
			<a>{props.title}</a>
		</Link>
	</li>
);
const Blog = () => {
	return (
		<Layout>
			<h1>My Blog</h1>
			<ul>
				<PostLink title="Hello Next.js"/>
				<PostLink title="Learn Next.js is awesome"/>
				<PostLink title="Deploy apps with Zeit"/>
			</ul>
		</Layout>
	);
};

export default Blog;
