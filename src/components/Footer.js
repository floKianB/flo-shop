import React from 'react';

import '../styles/css/footer.css';

function Footer() {

    return (
        <div className="footer">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})} className="backToTop">Back to top</button>
            <p className="footerDescription">This page is developing by FLO Studios - Kian Baban</p>
        </div>
        
    )
}

export default Footer;