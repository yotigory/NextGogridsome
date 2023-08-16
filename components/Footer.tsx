import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">
      <ul className="flex flex-wrap gap-4 justify-center">
        <li>
          <Link href={`/me`}>私について</Link>
        </li>
        <li>
          <Link href={`/categories/react`}>React や Javascript</Link>
        </li>
        <li>
          <Link href={`/categories/wp`}>WordPress</Link>
        </li>
        <li>
          <Link href={`/categories/blog`}>Blog</Link>
        </li>
      </ul>
      <div>
        <p>© 2023 Yoshiko Sarakai</p>
      </div>
    </footer>
  );
}
