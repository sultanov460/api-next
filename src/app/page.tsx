interface Post {
  id: number;
  title: string;
  author: string;
}

export default async function Home() {
  const res = await fetch("/posts");
  const data = await res.json();
  console.log(data);
  return (
    <>
      {/* {data.map((post: Post) => (
        <h1 key={post.id}>{post.title}</h1>
      ))} */}
    </>
  );
}
