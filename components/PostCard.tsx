import Link from "next/link";
import Image from "next/image";
import { useGetCategory } from "../hooks/useGetCategory";

export default function PostCard({
  post,
}: {
  post: {
    frontMatter: {
      title: string;
      createdAt: string;
      updatedAt: string;
      id: string;
      image: string;
      category: string;
    };
    slug: string;
  };
}) {
  const categoryName = useGetCategory(post.frontMatter.category);
  return (
    <div className="md:w-[48%] lg:w-[32%]">
      <div className="card w-full h-full shadow-xl">
        <Link href={`../post/${post.slug}`}>
          <figure>
            <Image
              src={`/${post.frontMatter.image}`}
              width={1200}
              height={630}
              alt={post.frontMatter.title}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{post.frontMatter.title}</h2>
            <p>{post.frontMatter.createdAt}</p>
            <div className="badge badge-secondary pb-1">
              {categoryName.categoryName}
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">続きを読む</button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
