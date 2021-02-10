import React from 'react';
import { Link as GatsbyLink } from "gatsby"

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({ children, to, activeClassName, partiallyActive, ...other }) => {
    // Tailor the following test to your environment.
    // This example assumes that any internal link (intended for Gatsby)
    // will start with exactly one slash, and that anything else is external.
    const internal = /^\/(?!\/)/.test(to);
    const mailtoRegex = new RegExp('^\/?mailto')
    const isMail = new RegExp('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$')
    if (isMail.test(to)) {
        to = to.substring(1) //remove slash added automatically
        to = '/mailto:' + to //add mailto: to be handled by browser
    }
    const mailto = mailtoRegex.test(to)

    // Use Gatsby Link for internal links, and <a> for others
    if (internal && !mailto) {
        return (
            <GatsbyLink
                to={to}
                activeClassName={activeClassName}
                partiallyActive={partiallyActive}
                {...other}
            >
                {children}
            </GatsbyLink>
        )
    }
    if (mailto) {
        to = to.substring(1) // if email, remove slash added automatically to links
    }
    return (
        <a href={to} {...other}>
            {children}
        </a>
    )
};

export default Link
