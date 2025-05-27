<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">STORE_GENIUS</h1></p>
<p align="center">
	<em>Empowering Your Queries with Cutting-Edge AI</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/rishipatel2552/Store_Genius?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/rishipatel2552/Store_Genius?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/rishipatel2552/Store_Genius?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/rishipatel2552/Store_Genius?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)

---

##  Overview

StoreGenius is an innovative solution designed to enhance customer support by intelligently answering FAQs and providing detailed product information. Leveraging advanced AI models and efficient data retrieval systems, this platform ensures accurate, fast responses, improving user experience for retail businesses. Ideal for e-commerce platforms seeking to optimize customer interaction and service efficiency.

---

##  Features

|      | Feature         | Summary       |
| :--- | :---:           | :---          |
| ⚙️  | **Architecture**  | <ul><li>Utilizes a split architecture with separate frontend and backend components.</li><li>Backend implemented with `<FastAPI>`, integrating AI models like `<GPT-3.5>` for dynamic response generation.</li><li>Frontend built using `<React>` and `<Redux>` for state management and responsive UI.</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Codebase includes backend and frontend specific dependencies and configurations.</li><li>Structured and modular code in both backend (Python) and frontend (JavaScript).</li><li>Use of modern libraries and frameworks ensures maintainability and scalability.</li></ul> |
| 📄 | **Documentation** | <ul><li>Documentation includes install and usage commands for both `<pip>` and `<npm>`.</li><li>Codebase languages include Python, JavaScript, CSS, HTML, and JSON.</li><li>Clear separation of dependency management files for backend and frontend.</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Backend integrates with AI models via `<OpenAI>`'s GPT-3.5 for natural language processing.</li><li>Frontend integrates with backend services for dynamic data retrieval and display.</li><li>Use of `<FAISS>` and `<BM25>` for efficient data retrieval and search capabilities.</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Backend and frontend are highly modular, allowing independent development and scaling.</li><li>Backend services are encapsulated in separate modules for AI inference, data retrieval, and ETL processes.</li><li>Frontend components are well-organized into features, components, and app configuration.</li></ul> |
| 🧪 | **Testing**       | <ul><li>Frontend testing setup with `<jest>` and custom matchers for UI testing.</li><li>Backend likely to have testing for API endpoints and data processing (not detailed in context).</li><li>Use of continuous integration practices could be inferred for maintaining code quality.</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Backend optimized for performance with asynchronous API and efficient search algorithms.</li><li>Frontend performance aided by `<React>`'s efficient rendering lifecycle.</li><li>Performance monitoring setup in frontend with web vitals.</li></ul> |
| 🛡️ | **Security**      | <ul><li>Backend includes CORS middleware integration for security in cross-origin resource sharing.</li><li>Secure dependency management with locked down versions in `package-lock.json`.</li><li>Robust handling of user inputs and data processing to prevent common vulnerabilities.</li></ul> |

---

##  Project Structure

```sh
└── Store_Genius/
    ├── README.md
    ├── backend
    │   ├── README.md
    │   ├── __pycache__
    │   ├── data
    │   ├── etl
    │   ├── llm
    │   ├── main.py
    │   ├── requirements.txt
    │   └── retrieval
    └── frontend
        ├── README.md
        ├── package-lock.json
        ├── package.json
        ├── public
        └── src
```


###  Project Index
<details open>
	<summary><b><code>STORE_GENIUS/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			</table>
		</blockquote>
	</details>
	<details> <!-- backend Submodule -->
		<summary><b>backend</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/rishipatel2552/Store_Genius/blob/master/backend/main.py'>main.py</a></b></td>
				<td>- Backend/main.py establishes a FastAPI server that integrates CORS middleware for cross-origin resource sharing<br>- It initializes a data retrieval and response generation pipeline using BM25, FAISS, and a hybrid model to process and respond to user queries based on loaded FAQs and product information.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/rishipatel2552/Store_Genius/blob/master/backend/requirements.txt'>requirements.txt</a></b></td>
				<td>- Specifies the dependencies required for the backend component of the project, ensuring the necessary libraries are available for API development, asynchronous server capabilities, data modeling, vector search, text processing, data manipulation, environment management, AI model integration, and handling multipart data<br>- This setup supports the project's infrastructure for efficient and scalable web services.</td>
			</tr>
			</table>
			<details>
				<summary><b>llm</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/rishipatel2552/Store_Genius/blob/master/backend/llm/openai_inference.py'>openai_inference.py</a></b></td>
						<td>- Backend/llm/openai_inference.py serves as the interface for generating AI-driven responses using OpenAI's GPT-3.5 model<br>- It processes user queries and relevant context through a structured message format, ensuring responses are tailored and concise, enhancing the user interaction within the broader application architecture.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>etl</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/rishipatel2552/Store_Genius/blob/master/backend/etl/etl_pipeline.py'>etl_pipeline.py</a></b></td>
						<td>- Handles the extraction and transformation of data from uploaded files in the ETL (Extract, Transform, Load) pipeline within the backend architecture<br>- It supports parsing of JSON and text files, identifying and formatting FAQs and product details from JSON, and extracting plain text content, preparing these for further processing or storage.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>retrieval</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/rishipatel2552/Store_Genius/blob/master/backend/retrieval/faiss_retriever.py'>faiss_retriever.py</a></b></td>
						<td>- FAISSRetriever, located within the backend retrieval system, leverages the FAISS library and Sentence Transformers to encode textual data and facilitate efficient similarity searches<br>- It initializes with a corpus, creates embeddings, and constructs an index for rapid querying, allowing retrieval of the top relevant entries based on input queries.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/rishipatel2552/Store_Genius/blob/master/backend/retrieval/bm25_retriever.py'>bm25_retriever.py</a></b></td>
						<td>- BM25Retriever, located within the backend retrieval module, enhances the project's search capabilities by implementing the BM25 algorithm<br>- It preprocesses a given corpus, computes relevance scores for queries, and identifies the top documents<br>- This component is crucial for efficiently retrieving the most relevant documents based on user queries.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/rishipatel2552/Store_Genius/blob/master/backend/retrieval/hybrid_retriever.py'>hybrid_retriever.py</a></b></td>
						<td>- HybridRetriever, located within the backend/retrieval segment of the project, integrates BM25 and FAISS retrieval mechanisms to enhance query result accuracy<br>- By combining and re-ranking results from both systems, it optimizes the retrieval process, ensuring a more effective selection of the top relevant entries for given queries.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- frontend Submodule -->
		<summary><b>frontend</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/rishipatel2552/Store_Genius/blob/master/frontend/package-lock.json'>package-lock.json</a></b></td>
				<td>- The `frontend/package-lock.json` file serves as a critical component in the management of dependencies for the frontend application of the project<br>- This file ensures that the exact versions of the frontend libraries and frameworks are consistently installed across different environments, thereby preventing discrepancies that could arise from version mismatches<br>- Specifically, it locks down versions for key libraries such as `@emotion/react`, `@emotion/styled`, `@mui/material`, and `@reduxjs/toolkit`, which are integral for the UI styling, material design components, and state management within the application.

This file is essential for maintaining the stability and predictability of the application's behavior by ensuring that all developers and deployment environments use the same set of dependencies<br>- It plays a foundational role in the frontend architecture by supporting reproducible builds and simplifying dependency management in a potentially complex web application environment.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/rishipatel2552/Store_Genius/blob/master/frontend/package.json'>package.json</a></b></td>
				<td>- Defines the configuration and dependencies for the frontend application, specifying libraries and frameworks such as React, Redux, and Material-UI essential for development<br>- It includes scripts for starting, building, testing, and customizing the build process, ensuring compatibility across modern browsers for both development and production environments.</td>
			</tr>
			</table>
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/rishipatel2552/Store_Genius/blob/master/frontend/src/index.css'>index.css</a></b></td>
						<td>- Establishes the foundational styling for the user interface within the frontend module of the application<br>- It sets global font families and smoothing properties to enhance text readability and aesthetic consistency across various operating systems and browsers<br>- Additionally, it specifies a distinct font style for code elements to improve code readability in the UI.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/rishipatel2552/Store_Genius/blob/master/frontend/src/App.css'>App.css</a></b></td>
						<td>- Establishes the foundational styling for the entire frontend application, setting universal properties such as full height, background color, and font family across all main elements<br>- Additionally, it enhances the user interface by customizing scrollbar visibility and aesthetics within the application's chat feature for a cleaner visual presentation.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/rishipatel2552/Store_Genius/blob/master/frontend/src/App.test.js'>App.test.js</a></b></td>
						<td>- App.test.js serves as a unit test for the main application component in the frontend directory, ensuring the App component renders correctly<br>- It specifically verifies the presence of a "learn react" link within the component, contributing to the overall reliability and maintainability of the user interface in the project's architecture.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/rishipatel2552/Store_Genius/blob/master/frontend/src/setupTests.js'>setupTests.js</a></b></td>
						<td>- Enhances testing capabilities within the frontend module by integrating custom Jest matchers from jest-dom, specifically for asserting properties of DOM nodes<br>- This setup facilitates more expressive and readable tests, crucial for verifying UI components' behavior against expected outcomes, thereby supporting the robustness of the frontend application.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/rishipatel2552/Store_Genius/blob/master/frontend/src/App.js'>App.js</a></b></td>
						<td>- App.js serves as the primary entry point for the frontend of the application, integrating the React framework with Redux for state management<br>- It initializes the ChatBot component within a styled container, ensuring the entire user interface is managed under a centralized Redux store, facilitating state sharing and updates across the application.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/rishipatel2552/Store_Genius/blob/master/frontend/src/reportWebVitals.js'>reportWebVitals.js</a></b></td>
						<td>- ReportWebVitals.js enhances the performance monitoring of the web application by dynamically importing and utilizing web vitals metrics such as Cumulative Layout Shift (CLS), First Input Delay (FID), First Contentful Paint (FCP), Largest Contentful Paint (LCP), and Time to First Byte (TTFB)<br>- It provides essential feedback on user experience and application responsiveness, crucial for optimizing frontend performance.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/rishipatel2552/Store_Genius/blob/master/frontend/src/index.js'>index.js</a></b></td>
						<td>- Serves as the entry point for the frontend application, initializing the React framework and rendering the main App component into the HTML document's root node<br>- It also applies React's strict mode for highlighting potential problems in an application, ensuring robust and efficient operation within the broader codebase architecture.</td>
					</tr>
					</table>
					<details>
						<summary><b>features</b></summary>
						<blockquote>
							<details>
								<summary><b>chat</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/rishipatel2552/Store_Genius/blob/master/frontend/src/features/chat/ChatSlice.js'>ChatSlice.js</a></b></td>
										<td>- ChatSlice.js manages the chat functionality within a frontend application, handling user and bot interactions for a chat service<br>- It facilitates sending messages, updating chat history, and managing chat state, including loading and error handling<br>- The module integrates network requests to a backend service for processing chat messages and dynamically updates the chat history based on responses.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/rishipatel2552/Store_Genius/blob/master/frontend/src/features/chat/ChatBot.js'>ChatBot.js</a></b></td>
										<td>- ChatBot.js serves as the interactive interface for user communication within the application, managing chat functionalities such as message sending, receiving, and display<br>- It integrates components like MessageList and MessageInput, and utilizes Redux for state management, ensuring a dynamic and responsive user experience in the chat feature.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>components</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/rishipatel2552/Store_Genius/blob/master/frontend/src/components/MessageInput.js'>MessageInput.js</a></b></td>
								<td>- MessageInput.js serves as a user interface component within the frontend architecture, enabling users to input and send messages<br>- It integrates a text input field and a send button, which triggers message dispatch upon user interaction<br>- The component ensures messages are only sent if they contain non-whitespace characters and manages input state dynamically.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/rishipatel2552/Store_Genius/blob/master/frontend/src/components/Header.js'>Header.js</a></b></td>
								<td>- Header.js serves as the visual cornerstone for the user interface in the frontend component of the project, providing a consistent top navigation bar across the application<br>- It integrates the 7-Eleven brand through a styled logo and a prominently displayed title, enhancing brand recognition and user experience within the "7-Eleven Store Genius" application.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/rishipatel2552/Store_Genius/blob/master/frontend/src/components/MessageList.js'>MessageList.js</a></b></td>
								<td>- MessageList.js serves as a visual component within the frontend architecture, responsible for displaying a list of messages<br>- It dynamically styles and aligns messages based on the sender, enhancing user interaction by visually distinguishing between user-generated and system-generated messages<br>- This component contributes to the overall user experience by organizing chat history in a readable format.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>app</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/rishipatel2552/Store_Genius/blob/master/frontend/src/app/store.js'>store.js</a></b></td>
								<td>- Configures and exports the Redux store for the frontend application, integrating the chatReducer from the chat feature module<br>- This setup centralizes the state management for the chat functionality, facilitating efficient data flow and state updates across the frontend components that interact with the chat feature.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>public</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/rishipatel2552/Store_Genius/blob/master/frontend/public/index.html'>index.html</a></b></td>
						<td>- Serves as the entry point for the web application, setting up essential HTML structure, metadata, and links to resources like icons and manifest files<br>- It configures the environment for the React app, ensuring proper display and functionality across various devices and platforms, while facilitating the integration of additional web technologies.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/rishipatel2552/Store_Genius/blob/master/frontend/public/manifest.json'>manifest.json</a></b></td>
						<td>- Defines the web application's manifest for the "Create React App Sample," specifying essential metadata such as application names, icons for various resolutions, and theme colors<br>- It configures the app to launch in a standalone display mode, enhancing the mobile user experience by mimicking a native app appearance and behavior.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/rishipatel2552/Store_Genius/blob/master/frontend/public/robots.txt'>robots.txt</a></b></td>
						<td>- Manages web crawler access to the frontend of the application, ensuring that all areas of the website are accessible to search engines<br>- Positioned within the public directory of the frontend, it plays a crucial role in search engine optimization by allowing unrestricted indexing of the site's content.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
##  Getting Started

###  Prerequisites

Before getting started with Store_Genius, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript
- **Package Manager:** Pip, Npm


###  Installation

Install Store_Genius using one of the following methods:

**Build from source:**

1. Clone the Store_Genius repository:
```sh
❯ git clone https://github.com/rishipatel2552/Store_Genius
```

2. Navigate to the project directory:
```sh
❯ cd Store_Genius
```

3. Install the project dependencies:


**Using `pip`** &nbsp; [<img align="center" src="" />]()

```sh
❯ pip install -r requirements.txt
```


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




###  Usage
Run Store_Genius using the following command:
**Using `pip`** &nbsp; [<img align="center" src="" />]()

```sh
❯ uvicorn app:app --reload 
```


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```


