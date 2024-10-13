import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between align-middle">
        <p>Invoicipedia</p>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
