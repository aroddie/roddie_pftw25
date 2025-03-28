import "./MemberCard.css"

export default function MemberCard({
    firstName,
    lastName,
    streetAddress,
    state,
    country,
    favColor,
    alpacaEssay
}) {
    return (
        <div className="member-card">
            <div className={favColor}>
                <h2>Thanks, {firstName}!</h2>
                <p>We've received your registration, and would like to welcome you as the newest member of the Alpaca fan Club.</p>
                <p>Please review your information to ensure it is accurate:</p>
                <div>
                    <strong>Name:</strong> {firstName} {lastName}
                </div>
                <div>
                    <strong>Address:</strong> {streetAddress}, {state}, {country}
                </div>
                <div>
                    <strong>Favorite Alpaca Color:</strong> {favColor}
                </div>
                <div>
                    <strong>What you like most about Alpacas:</strong>
                    <div>{alpacaEssay}</div>
                    
                </div>
            </div>
        </div>
    )
}