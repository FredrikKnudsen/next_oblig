import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Link href="/collection">
        <a>Go to Collection Page</a>
      </Link>
    </div>
  );
};

export default HomePage;