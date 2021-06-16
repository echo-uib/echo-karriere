import { MDXRenderer } from "gatsby-plugin-mdx";

import { Container, Content, Layout, SEO } from "../components";

interface PageData {
  pageContext: {
    frontmatter: {
      title: string;
      description: string;
    };
    body: string;
  };
}

export default function PageTemplate({ pageContext }: PageData): JSX.Element {
  const { frontmatter, body } = pageContext;
  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <Container>
        <Content title={frontmatter.title}>
          <MDXRenderer>{body}</MDXRenderer>
        </Content>
      </Container>
    </Layout>
  );
}
