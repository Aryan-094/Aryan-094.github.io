import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="text-sm">
                        &copy; {new Date().getFullYear()} Zaykaa Bazaarrr. All rights reserved.
                    </div>
                    <div className="flex space-x-6">
                        <a 
                            href="https://www.facebook.com/share/ZfXHmGjpELq9c1aM/?mibextid=LQQJ4d" 
                            className="hover:text-red-500" 
                            aria-label="Facebook" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faFacebookF} size="lg" />
                        </a>
                        <a 
                            href="https://x.com/zaykaaabazaaarr?s=11" 
                            className="hover:text-red-500" 
                            aria-label="Twitter" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </a>
                        <a 
                            href="https://www.instagram.com/zaykaa_bazaarrr?igsh=MW9kOGk0YjdsN28yNg==" 
                            className="hover:text-red-500" 
                            aria-label="Instagram" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
