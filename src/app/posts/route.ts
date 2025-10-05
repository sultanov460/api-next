import { NextRequest, NextResponse } from "next/server";
import { posts } from "@/data/posts";

interface Post {
  id: number;
  title: string;
  author: string;
}

export async function GET() {
  if (!posts.length) {
    return NextResponse.json({ error: "No Posts Found" }, { status: 404 });
  }

  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  try {
    const { title, author } = await req.json();
    if (!title || !author) {
      return NextResponse.json(
        { error: "Title and author are required" },
        {
          status: 400,
        }
      );
    }
    const newPost: Post = {
      id: posts.length + 1,
      title,
      author,
    };
    posts.push(newPost);
    return NextResponse.json(newPost, {
      status: 201,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      {
        error: "Invalid body",
      },
      {
        status: 400,
      }
    );
  }
}
