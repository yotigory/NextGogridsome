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
        <div className="dropdown dropdown-end block lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
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
        </div>
      </div>
    </div>
  );
}
