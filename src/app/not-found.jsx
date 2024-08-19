import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="underline text-blue">
        Return Home
      </Link>
    </div>
  );
}
