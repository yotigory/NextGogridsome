import fs from "fs";
import matter from "gray-matter";
import PostCard from "../../components/PostCard";
import { NextSeo } from "next-seo";
import { useGetCategory } from "../../hooks/useGetCategory";
import { useGetCategoryText } from "../../hooks/useGetCategoryText";

export default function Category(posts) {
  const data = posts;
  const categoryName = useGetCategory(data.posts[0].frontMatter.category[0]);
  const categoryText = useGetCategoryText(data.posts[0].frontMatter.category[0]);
  return (
    <>
      <NextSeo
        title={`${categoryText.categoryText} | My Memo Site`}
        description={`${categoryText.categoryText}`}
        openGraph={{
          type: "website",
          url: `https://gogridsome.work/md/${categoryName.categoryName}`,
          title: "",
          description: ` ${categoryText.categoryText} `,
          images: [
            {
              url: `https://gogridsome.work/og.png`,
              width: 1200,
              height: 630,
              alt: `${categoryText.categoryText} `,
            },
          ],
        }}
      />
      <main className="container mx-auto p-5">
        <p> {categoryText.categoryText} </p>
        <div className="my-8 flex flex-wrap gap-x-[2%] gap-y-6">
          {data.posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps = ({ params }) => {
  const files = fs.readdirSync("./md/");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fileContent = fs.readFileSync(`./md/${fileName}`, "utf-8");
    const { data } = matter(fileContent);
    return {
      frontMatter: data,
      slug,
    };
  });

  const category = params.category;

  const filteredPosts = posts.filter((post) => {
    return post.frontMatter.category.includes(category);
  });

  const sortedPosts = filteredPosts.sort((postA, postB) =>
    new Date(postA.frontMatter.createdAt) >
    new Date(postB.frontMatter.createdAt)
      ? -1
      : 1
  );

  return {
    props: {
      posts: sortedPosts,
    },
  };
};

export const getStaticPaths = () => {
  const categories = ["react", "wp", "blog"];
  const paths = categories.map((category) => ({ params: { category } }));

  return {
    paths,
    fallback: false,
  };
};
