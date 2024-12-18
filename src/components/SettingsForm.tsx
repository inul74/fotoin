"use client";

import { updateProfile } from "@/actions";
import { Profile } from "@prisma/client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import { CloudUploadIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SettingsForm({ profile }: { profile: Profile | null }) {
  const router = useRouter();

  return (
    <form
      action={async (data: FormData) => {
        await updateProfile(data);
        router.push("/profile");
        router.refresh();
      }}
    >
      <div className="flex gap-4 items-center">
        <div>
          <div className="bg-gray-400 size-24 rounded-full"></div>
        </div>
        <div>
          <Button variant="surface">
            <CloudUploadIcon size={20} />
            change avatar
          </Button>
        </div>
      </div>
      <p className="mt-2 font-bold">username</p>
      <TextField.Root
        name="username"
        defaultValue={profile?.username || ""}
        placeholder="your_username"
      />
      <p className="mt-2 font-bold">fullname</p>
      <TextField.Root
        name="name"
        defaultValue={profile?.name || ""}
        placeholder="John Doe"
      />
      <p className="mt-2 font-bold">subtitle</p>
      <TextField.Root
        name="subtitle"
        defaultValue={profile?.subtitle || ""}
        placeholder="Graphic designer"
      />
      <p className="mt-2 font-bold">bio</p>
      <TextArea
        name="bio"
        defaultValue={profile?.bio || ""}
        placeholder="Your bio"
      />
      <div className="flex justify-end mt-4">
        <Button variant="solid">Save settings</Button>
      </div>
    </form>
  );
}
