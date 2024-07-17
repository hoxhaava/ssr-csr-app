import Navbar from '../_components/NavBar';

const CSRPage = () => {
    return (
        <div>
            <Navbar />
            <h1 className="text-2xl">CSR Page</h1>
            <p>This content is loaded on the client side.</p>
        </div>
    );
};

export default CSRPage;
