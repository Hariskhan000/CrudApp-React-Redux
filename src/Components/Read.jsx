import { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showuser } from "../Features/userDataSlice";
import { Link } from 'react-router-dom'

const Read = () => {
    const dispatch = useDispatch();
    const { users, loading } = useSelector((state) => state.app);


    useEffect(() => {
        dispatch(showuser());
    }, [dispatch]);

    if (loading) {
        return <h2 className="text-center my-4">Loading</h2>
    }
    return (
        <>
            <h2 className="text-center py-3">Here is All Data</h2>
            <div className="py-4 d-flex flex-wrap justify-content-center">
                {users && users.map((ele) => (
                    <div key={ele.id} className="card m-2" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">{ele.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                            <p className="card-text">{ele.gender}</p>
                            <Link to={`/edit/${ele.id}`} className="card-link btn btn-primary">Update</Link>
                            <Link onClick={() => dispatch(deleteUser(ele.id))} className="card-link btn btn-danger">Delete</Link>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
};

export default Read;
