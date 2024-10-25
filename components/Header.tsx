import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import Container from "./Container";
import Link from "next/link";

const Header = () => {
  return (
    <header className="mb-12 mt-8">
      <Container>
        <div className="flex justify-between align-middle">
          <p className="font-bold">
            <Link href="/invoices">Invoicipedia</Link>
          </p>
          <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
