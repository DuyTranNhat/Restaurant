import clsx from "clsx";

function ContactInfo( { className, textColor, ...rest } ) {
    console.log(rest);
    const classes = clsx(className, 'col-lg-6 d-flex flex-column align-items-center', 'wrapper', textColor);

    return ( 
        <div className={classes}>
            <h3 className="fs-1 mb-3 fw-bold text-uppercase">Where to find us</h3>
            <span className="mb-5" >302 Hai Ba Trung, District 1, Ho Chi Minh City </span>

            <h3 className="" >Openning Hours</h3>
            <p className="m-0" >Monday - Sunday</p>
            <p>2:00PM - 10:00PM</p>
        </div>
    );
}

export default ContactInfo;