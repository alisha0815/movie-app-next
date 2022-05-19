import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  console.log("router", router);
  return (
    <>
      <nav>
        <Link href={"/"}>
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href={"/about"}>
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
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
