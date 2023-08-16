import fs from "fs";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import Image from "next/image";
import { NextSeo } from "next-seo";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import { createElement, Fragment } from "react";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import Link from "next/link";
import { useGetCategory } from "../../hooks/useGetCategory";

export default function Post({ frontMatter, content, slug }) {
  const categoryName = useGetCategory(frontMatter.category);
  return (
    <>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
        openGraph={{
          type: "website",
          url: `https://gogridsome.work/post/${slug}`,
          title: frontMatter.title,
          description: frontMatter.description,
          images: [
            {
              url: `https://gogridsome.work/${frontMatter.image}`,
              width: 1200,
              height: 700,
              alt: frontMatter.title,
            },
          ],
        }}
      />
      <article className="prose container mx-auto p-5">
        <div>
          <Image
            src={`/${frontMatter.image}`}
            width={1200}
            height={700}
            alt={frontMatter.title}
            className="border mt-0"
          />
        </div>
        <h1>
          <span className="badge badge-secondary pb-1 mb-5">
            {categoryName.categoryName}
          </span>
          <br />
          {frontMatter.title}
        </h1>
        <p>
          日付：<span className="mr-5">{frontMatter.createdAt}</span>更新日：
          <span>{frontMatter.updatedAt}</span>
        </p>
        {toReactNode(content)}
      </article>
    </>
  );
}

function MyLink({ children, href }) {
  if (href === "") href = "/";
  return href.startsWith("/") || href.startsWith("#") ? (
    <Link href={href}>{children}</Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

const MyImage = ({ src, alt, width, height }) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};

const toReactNode = (content) => {
  return unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(rehypeReact, {
      createElement,
      Fragment,
      components: {
        a: MyLink,
        img: MyImage,
      },
    })
    .processSync(content).result;
};

export async function getStaticProps({ params }) {
  const file = fs.readFileSync(`./md/${params.slug}.md`, "utf-8");
  const { data, content } = matter(file);
  const result = await unified()
    .use(remarkParse)
    .use(remarkToc, {
      heading: "目次",
    })
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);
  // console.log('result:',result);
  return {
    props: { frontMatter: data, content: result.toString(), slug: params.slug },
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync("./md/");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ""),
    },
  }));
  // console.log('paths:', paths);
  return {
    paths,
    fallback: false,
  };
}
