import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Container, Content, Layout, SEO } from "../components";

interface PageData {
  pageContext: {
    next?: {
      frontmatter: {
        title: string;
        path: string;
      };
    };
    node: {
      frontmatter: {
        title: string;
        description: string;
        date: string;
      };
      body: string;
    };
    previous?: {
      frontmatter: {
        title: string;
        path: string;
      };
    };
  };
}

export default function PageTemplate({ pageContext }: PageData): JSX.Element {
  const { next, node, previous } = pageContext;
  return (
    <Layout>
      <SEO
        title={node.frontmatter.title}
        description={node.frontmatter.description}
      />
      <Container>
        <Content
          title={node.frontmatter.title}
          subtitle={node.frontmatter.date}
        >
          <MDXRenderer>{node.body}</MDXRenderer>
        </Content>
        <div className="relative px-4 py-8 max-w-4xl">
          <nav aria-label="Progress">
            <ol className="space-y-4 md:flex md:justify-between md:space-y-0 md:space-x-8">
              <li className="md:w-48">
                {previous && (
                  <Link
                    to={previous.frontmatter.path}
                    className="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
                  >
                    <div className="text-base">
                      <svg
                        className="h-8 w-6 float-left mr-4 pb-1"
                        viewBox="0 0 24 24"
                        fill="currentcolor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="text-sm text-gray-500 font-semibold uppercase group-hover:text-gray-700">
                        Nyere
                      </span>
                    </div>
                    <span className="font-medium">
                      {previous.frontmatter.title}
                    </span>
                  </Link>
                )}
              </li>
              <li className="md:w-48">
                {next && (
                  <Link
                    to={next.frontmatter.path}
                    className="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
                  >
                    <div className="text-base">
                      <svg
                        className="h-8 w-6 float-right mr-4 pb-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="text-sm text-gray-500 font-semibold uppercase group-hover:text-gray-700">
                        Eldre
                      </span>
                    </div>

                    <span className="font-medium">
                      {next.frontmatter.title}
                    </span>
                  </Link>
                )}
              </li>
            </ol>
          </nav>
        </div>
      </Container>
    </Layout>
  );
}
