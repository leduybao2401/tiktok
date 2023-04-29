import Header from "./Header";

function DefaultLayout({children}) {
    return ( 
        <div>
            <Header/>
            <div className="container">
                <div>

                    <div className="content">{children}</div>
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;