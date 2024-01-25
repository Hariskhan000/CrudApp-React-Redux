import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { updateUser } from '../Features/userDataSlice';
import { useNavigate } from 'react-router-dom'
const Update = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [updateData, setUpdateData] = useState();
    const { users } = useSelector((state) => state.app);
    useEffect(() => {
        if (id) {
            const singleUser = users.filter((ele) => ele.id === id);
            setUpdateData(singleUser[0]);
        }
    }, []);

    const newData = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: [e.target.value] })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser(updateData));
        navigate("/read")


    }
    return (
        <div>
            <h2 className="text-center my-4"> Update Your Data</h2>
            <form className="w-50 mx-auto mt-5" onSubmit={handleUpdate}>
                <div className="form-group py-4 pt-2">
                    <label className="pb-2">Name</label>
                    <input type="text" required name="name" onChange={newData} value={updateData && updateData.name} className="form-control" placeholder="Enter Name" />
                </div>
                <div className="form-group py-4 pt-2">
                    <label className="pb-2">Email</label>
                    <input type="email" required name="email" onChange={newData} value={updateData && updateData.email} className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group py-4 pt-2">
                    <label className="pb-2">Age</label>
                    <input type="number" required name="age" onChange={newData} value={updateData && updateData.age} className="form-control" placeholder="Enter age" />
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <div className="form-check">
                        <input className="form-check-input" onChange={newData} checked={updateData && updateData.gender === 'Male'} required type="radio" name="gender" value="Male" />
                        <label className="form-check-label">
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" onChange={newData} checked={updateData && updateData.gender === 'Female'} required type="radio" value="Female" name="gender" />
                        <label className="form-check-label">
                            Female
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>)
}
export default Update