import fs from "fs";
import matter from "gray-matter";
import PostCard from "../components/PostCard";

export default function ReactPosts(posts: any) {
  const data = posts;
  return (
    <>
      <main className="container mx-auto p-5">
        <p>
          仕事で使った技術情報を発信するブログです。参加したイベントのレポートも掲載しています
        </p>
        <div className="my-8 flex flex-wrap gap-x-[2%] gap-y-6">
          {data.posts.map(
            (post: {
              frontMatter: {
                title: string;
                createdAt: string;
                updatedAt: string;
                id: string;
                image: string;
                category: string;
              };
              slug: string;
            }) => (
              <PostCard key={post.slug} post={post} />
            )
          )}
        </div>
      </main>
    </>
  );
}

export const getStaticProps = () => {
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
  const sortedPosts = posts.sort((postA, postB) =>
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
