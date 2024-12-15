import { auth, signIn, signOut } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="">
      <p>Home page</p>
      {session && (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button
            className="border px-4 py-2 bg-in-red text-white rounded-lg"
            type="submit"
          >
            Logout
          </button>
        </form>
      )}
      {!session && (
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button
            className="border px-4 py-2 bg-in-red text-white rounded-lg"
            type="submit"
          >
            Login with Google
          </button>
        </form>
      )}
    </div>
  );
}
