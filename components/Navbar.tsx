import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  console.log("router", router);
  return (
    <>
      <nav className="flex space-x-9 p-8 text-lg place-content-end">
        <Link href={"/"}>
          <a
            className={
              router.pathname === "/"
                ? "active hover:scale-125"
                : "hover:scale-125"
            }
          >
            Home
          </a>
        </Link>
        <Link href={"/about"}>
          <a
            className={
              router.pathname === "/about"
                ? "active hover:scale-125"
                : "hover:scale-125"
            }
          >
            About
          </a>
        </Link>
      </nav>
      <style jsx>{`
        a {
          text-decoration: none;
          color: #59626E
          }
        .active {
            color: #1C64F2
        }
        }>
      `}</style>
    </>
  );
};

export default Navbar;
