import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" href={`/`}>
          まいめも
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
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
        <details className="dropdown dropdown-end block lg:hidden">
          <summary className="m-1 btn">Menu</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <Link className="pointer-events-auto" href={`/me`}>私について</Link>
            </li>
            <li>
              <Link className="pointer-events-auto" href={`/categories/react`}>React や Javascript</Link>
            </li>
            <li>
              <Link className="pointer-events-auto" href={`/categories/wp`}>WordPress</Link>
            </li>
            <li>
              <Link className="pointer-events-auto" href={`/categories/blog`}>Blog</Link>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
}
