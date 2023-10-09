export default function NotFound(statusCode: number) {
    // Replace `status_code` with the desired HTTP status code, e.g., 404 for "Not Found"
    statusCode = 404;
    const imageUrl = `https://http.cat/${statusCode}`;

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <p className="text-2xl mb-4">Sorry, the page you are looking for does not exist.</p>
            <div className="w-48 h-48">
                <img src={imageUrl} alt={`HTTP ${statusCode}`} className="w-full h-full" />
            </div>
        </div>
    );
}
