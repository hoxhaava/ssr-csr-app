import Navbar from '../_components/NavBar';

const SSRPage = async () => {
    // Simulating server-side data fetching
    const data = await fetchData();

    return (
        <div>
            <Navbar />
            <h1 className="text-2xl">SSR Page</h1>
            <p>{data}</p>
        </div>
    );
};

// Example function to simulate data fetching
async function fetchData() {
    return 'This is server-side rendered data.';
}

export default SSRPage;
