import React from "react";
import { useSelector, useDispatch } from "react-redux";


const EditInfo = () => {

    const dispatch = useDispatch();

    const user = useSelector((state) => state.authReducer.user);

        console.log(user.quittingDay)
    const [email, setEmail] = React.useState(user.username);
    const [password, setPassword] = React.useState(user.password);
    const [name, setName] = React.useState(user.name);
    const [quittingDay, setQuittingDay] = React.useState(new Date(user.quittingDay));
    const [packetPrice, setPacketPrice] = React.useState(user.PacketPrice);
    const [cigarettesPerDay, setCigarettesPerDay] = React.useState(user.cigarettesPerDay);
    const [error, setError] = React.useState("");

    console.log(quittingDay)

    const err = useSelector((state) => state.authReducer.error.error);

    const handleSubmmit = async(e) => {
        e.preventDefault();
        if(!email || !password || !name || !quittingDay || !packetPrice || !cigarettesPerDay){
            setError("Please fill in all fields");
            return;
        }
        await dispatch(updateUserInfo(email, password, name, quittingDay, packetPrice, cigarettesPerDay));
        history.push("/");
    } 

    return (
        <div>
            {error && <p>{error}</p>}
            {err && <p>{err.response.data}</p>}
            <form onSubmit={handleSubmmit}>
                <label>Email</label>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label>Name</label>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <p> Your previous quitting day was {quittingDay.toDateString()}</p>
                <label>Your new Quitting Day</label>
                <input type="date" placeholder="Quitting Day" data-date-format="DD MMMM YYYY" value={quittingDay} onChange={(e) => setQuittingDay(e.target.value)} />
                <label>Packet Price</label>
                <input type="text" placeholder="Packet Price" value={packetPrice} onChange={(e) => setPacketPrice(e.target.value)} />
                <label>Cigarettes Per Day</label>
                <input type="text" placeholder="Cigarettes Per Day" value={cigarettesPerDay} onChange={(e) => setCigarettesPerDay(e.target.value)} />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default EditInfo;
