const MainLayout = ({ children }) => {
    return (
        <>
            <header className="h-16 bg-green-600 text-white flex items-center px-10">
                An Thanh Food
            </header>

            <main className="px-10 py-6">
                {children}
            </main>

            <footer className="h-12 bg-gray-100 text-center text-sm flex items-center justify-center">
                © 2025 An Thanh Food
            </footer>
        </>
    );
}

export default MainLayout;