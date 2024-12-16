import PostsGrid from "@/components/PostsGrid";
import { CheckIcon, ChevronLeftIcon, CogIcon } from "lucide-react";
import Link from "next/link";

export default async function ProfilePage() {
  return (
    <main>
      <section className="flex items-center justify-between">
        <button>
          <ChevronLeftIcon />
        </button>
        <div className="font-bold flex items-center gap-2">
          my_name_here
          <div className="size-5 rounded-full bg-in-red inline-flex justify-center items-center text-white">
            <CheckIcon size={16} />
          </div>
        </div>
        <button>
          <CogIcon />
        </button>
      </section>
      <section className="mt-8 flex justify-center">
        <div className="size-48 p-2 rounded-full bg-gradient-to-tr from-in-orange to-in-red">
          <div className="size-44 p-2 bg-white rounded-full">
            <div className="size-40 aspect-square overflow-hidden rounded-full">
              <img
                src="https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="profile"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="text-center mt-4">
        <h1 className="text-xl font-bold">My name</h1>
        <p className="text-gray-500 mt-1 mb-1">Business account</p>
        <p>
          Entrepreneur, Husband, Father <br />
          contact: my_email@gmail.com
        </p>
      </section>
      <section className="mt-4">
        <div className="flex justify-center gap-4 font-bold">
          <Link href={""}>Posts</Link>
          <Link className="text-gray-400" href={"/highlights"}>
            Highlights
          </Link>
        </div>
      </section>
      <section className="mt-4">
        <PostsGrid />
      </section>
    </main>
  );
}
