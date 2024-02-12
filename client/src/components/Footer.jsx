import "./footer.css"

const CopyrightFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="copyright">
                &copy; {currentYear} HEALTHPLUS
            </p>
        </footer>
    );
}

export default CopyrightFooter;
