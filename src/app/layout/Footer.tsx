const Footer = () => {    
    return (
        <footer className="border-t border-border py-8 text-center">
            <p className="font-body text-sm text-muted-foreground">
            Entre Livros {new Date().getFullYear()} — Fornecido por <a href="https://reddunesolutions.pt/" className="underline hover:text-red-600">RedDune Solutions</a>
            </p>
        </footer>
    );
};

    
export default Footer;