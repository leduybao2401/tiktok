import Header from "../component/Header";

function HeaderOnly({children}) {
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

export default HeaderOnly;