import { useState } from "react";
import { useDispatch } from "react-redux";
import { createuser } from "../Features/userDataSlice";
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [users, setUsers] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getUserData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(users);
        dispatch(createuser(users));
        navigate("/read");
    }
    return (
        <div>
            <form className="w-50 mx-auto mt-5" onSubmit={handlesubmit}>
                <div className="form-group py-4 pt-2">
                    <label className="pb-2">Name</label>
                    <input type="text" required name="name" className="form-control" placeholder="Enter Name" onChange={getUserData} />
                </div>
                <div className="form-group py-4 pt-2">
                    <label className="pb-2">Email</label>
                    <input type="email" required name="email" className="form-control" placeholder="Enter email" onChange={getUserData} />
                </div>
                <div className="form-group py-4 pt-2">
                    <label className="pb-2">Age</label>
                    <input type="number" required name="age" className="form-control" placeholder="Enter age" onChange={getUserData} />
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <div className="form-check">
                        <input className="form-check-input" required type="radio" onChange={getUserData} name="gender" value="Male" />
                        <label className="form-check-label">
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" required type="radio" value="Female" onChange={getUserData} name="gender" checked />
                        <label className="form-check-label">
                            Female
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default Create;
