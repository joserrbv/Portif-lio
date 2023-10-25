import React from "react";

function article_1() {
	return {
		date: "Aguardando",
		title: "Aguardando",
		description:
			"Aguardando",
		keywords: [
			"Aguardando",
			"Aguardando",
			"Aguardando",
			"Aguardando",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div class="article-content">
					<div class="paragraph"> <h1>Content of article 1</h1> </div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						class="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "Aguardando",
		title: "Aguardando",
		description:
			"Aguardando",
		style: ``,
		keywords: [
			"Aguardando",
			"Aguardando",
			"Aguardando",
			"Aguardando",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
