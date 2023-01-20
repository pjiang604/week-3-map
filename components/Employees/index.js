
export default function Profile({

    colour = "white",
    font = "20",
    padding = 20,

    image = "headshots/cat.jpg",
    name = "None",
    position = "none",
    department = "Creative Company",
    email = "No email yet!",
    phoneNumber = "No phone number yet!",
    yearsWorked = 5,
    bio = "Nothing to see here yet!"

}) {
    return (
        <div style={{ backgroundColor: colour, fontSize: font, width: 400, padding: padding, borderRadius: 10, boxShadow: "5px 10px var(--grey)" }}>
            <img src={image} width="250"></img>
            <h2><i>{name}</i></h2>
            <h4>Position:</h4>{position}
            <h4>Department:</h4>{department}
            <h4>Email:</h4>{email}
            <h4>Phone Number:</h4>{phoneNumber}
            <h4>Years Worked at Creative:</h4>{yearsWorked}
            <h4>About {name}:</h4>{bio}
        </div>
    )
}
