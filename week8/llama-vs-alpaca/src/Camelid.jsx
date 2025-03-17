import PropTypes from "prop-types";

export default function Camelid({url}) {
    return (
        <>
            <img src={url} />
        </>
    )
}

Camelid.propTypes = {
    url: PropTypes.string.isRequired,
}