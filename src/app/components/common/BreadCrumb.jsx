"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronRight } from "react-icons/fi";

const BreadCrumb = () => {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav className="text-sm text-gray-600 py-4">
      <ol className="flex items-center flex-wrap">
        {/* Home */}
        <li>
          <Link href="/" className="hover:text-black transition">
            Home
          </Link>
        </li>

        {/* Dynamic segments */}
        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;

          return (
            <li key={href} className="flex items-center">
              <FiChevronRight className="mx-2 text-gray-400" />

              {isLast ? (
                <span className="text-black font-medium capitalize">
                  {segment.replace("-", " ")}
                </span>
              ) : (
                <Link
                  href={href}
                  className="hover:text-black transition capitalize"
                >
                  {segment.replace("-", " ")}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;