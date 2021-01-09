import React from "react";
import Layout from "../components/Layout";

export async function getStaticProps({ locale }) {
	const config = await import(`../data/config.json`);

	return {
		props: {
			locale,
			siteConfig: config.default,
		},
	};
}

// TODO 全部文章
class SpecialPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			channel: "all",
			page: 1,
		};
	}
	render() {
		const { allPosts, siteConfig, locale } = this.props;
		return (
			<Layout
				currentPage={{
					text: "全部文章",
					path: "/special",
				}}
				locale={locale}
				allPosts={allPosts}
				config={siteConfig}
			></Layout>
		);
	}
}

export default SpecialPage;
