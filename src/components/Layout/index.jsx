import Header from "../Header";
const Layout = ({children}) => {
    return (
        <main className="w-full min-h-screen">
            <Header />
        <section className="text-xl text-amber-200">{children}</section>
        </main>
    );
}
export default Layout;