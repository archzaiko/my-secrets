import { GoogleAuthButton } from "../google-auth-button/GoogleAuthButton";
import { GoogleAuthButtonIcon } from "../google-auth-button/GoogleAuthButtonIcon";

export function SocialAuthBar(): React.ReactElement {
  return (
    <div className="flex justify-center items-center">
      <GoogleAuthButton>
        <GoogleAuthButtonIcon />
      </GoogleAuthButton>
    </div>
  );
}
