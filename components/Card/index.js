export default function Card({

    image = "headshots/cat.jpg",
    firstName = "none",
    degree = "none",
    department = "none",
    gpa = "N/A",
    graduted = "N/A",
    bio = "Nothing here yet!",

    colour = "var(--green)",
    font = "20",
    padding = 20,

}) {
    return(
        <div style={{ backgroundColor: colour, fontSize: font, width: 400, padding: padding, borderRadius: 10, boxShadow: "5px 10px var(--grey)" }}>
            <img src={image} width="250"></img>
            <h2><i>{firstName}</i></h2>
            <h4>Degree:</h4>{degree}
            <h4>Department:</h4>{department}
            <h4>GPA:</h4>{gpa}
            <h4>Graduating Year:</h4>{graduted}
            <h4>About {firstName}:</h4>{bio}
        </div>
    )
}
