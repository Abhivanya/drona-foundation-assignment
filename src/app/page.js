import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Nothing is here </h1>
      <p>Switch to Exam Tab</p>
      <Link href="/exam">Go To Exam</Link>
    </div>
  );
}
