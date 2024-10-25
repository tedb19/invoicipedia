import Container from "./Container";

const Footer = () => {
  return (
    <footer className="mt-8 mb-8">
      <Container className="flex justify-between gap-4">
        <p className="text-sm">
          Invoicipedia &copy; {new Date().getFullYear()}
        </p>
        <p className="text-sm">Created by Teddy B.</p>
      </Container>
    </footer>
  );
};

export default Footer;
