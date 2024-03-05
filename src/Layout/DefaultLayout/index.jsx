import Header from "../Component/Header";

function DefaultLayout( { children } ) {
    return ( 
        <div>
            <Header />
            {children}
        </div>
     );
}

export default DefaultLayout;