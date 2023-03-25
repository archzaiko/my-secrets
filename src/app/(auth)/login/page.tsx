import { SocialAuthBar } from "@/ui/social-auth-bar/SocialAuthBar";

export default function LoginPage(): React.ReactElement {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="p-8 flex flex-col gap-y-6 rounded shadow">
        <SocialAuthBar />
      </div>
    </div>
  );
}
