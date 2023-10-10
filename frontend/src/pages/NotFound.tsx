export default function NotFound() {
    const statusCode = 404;
    const imageUrl = `https://http.cat/${statusCode}`;

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <p className="text-2xl mb-4">Sorry, the page you are looking for does not exist.</p>
            <div className="w-70vw max-w-screen-lg">
                <img src={imageUrl} alt={`HTTP ${statusCode}`} className="w-full h-auto" />
            </div>
        </div>
    );
}