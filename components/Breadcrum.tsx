"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = ({ productName }: { productName?: string }) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav className="text-sm text-neutral-6 mb-4">
      <ul className="flex items-center gap-2 lg:ml-0 ml-4">
        {/* Home Link */}
        <li>
          <Link href="/" className="hover:text-warm-black">
            Home
          </Link>
        </li>

        {/* Shop Link (Always Show Before Product) */}
        <li className="flex items-center">
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-warm-black">
            Shop
          </Link>
        </li>

        {/* Product Page (Show Name Instead of ID) */}
        {pathSegments.includes("product") && productName && (
          <li className="flex items-center">
            <span className="mx-2">/</span>
            <span className="text-neutral-8 font-medium">{productName}</span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
