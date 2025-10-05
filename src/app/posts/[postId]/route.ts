import { posts } from "@/data/posts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: { postId: string } }
) {
  const { postId } = await params;

  const post = posts.find((singlePost) => singlePost.id === Number(postId));

  if (!post) {
    return NextResponse.json({ error: "Post Not Found" }, { status: 404 });
  }

  return NextResponse.json(post);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { postId: string } }
) {
  const { postId } = await params;
  const { title } = await req.json();

  if (!title) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }

  const postIndex = posts.findIndex(
    (singlePost) => singlePost.id === Number(postId)
  );
  posts[postIndex].title = title;

  return NextResponse.json(posts[postIndex]);
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { postId: string } }
) {
  const { postId } = await params;

  const postIndex = posts.findIndex(
    (singlePost) => singlePost.id === Number(postId)
  );

  if (!postIndex) {
    return NextResponse.json({ error: "Post Not Found" }, { status: 404 });
  }

  const deletedPost = posts[postIndex];

  posts.splice(postIndex, 1);

  return NextResponse.json(deletedPost);
}
