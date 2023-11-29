import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer id="footer" className="footer">
                <div className="copyright">
                    © Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Developed by <Link to="https://aii.wdpf55.com/portfolio/">Ali Ibne Imran</Link>
                </div>
            </footer>
        </>
    )
}
