import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {updateUserThunk} from "../users/users-thunk";

const EditProfile = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [firstName, setFirstName] = useState(currentUser.firstName)
    const [lastName, setLastName] = useState(currentUser.lastName)
    const [email, setEmail] = useState(currentUser.email)
    const [phoneNumber, setPhoneNumber] = useState(currentUser.phoneNumber)
    const dispatch = useDispatch()
    const updateUserInfo = () => {
        dispatch(updateUserThunk({
            firstName,
            lastName,
            email,
            phoneNumber
        }))
    }
    return(
        <>
            <div className="container px-4 mt-4">
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header">{currentUser.username}</div>
                            <div className="card-body">
                                <img className="img-fluid"
                                     src="https://stroseschool.stroselions.net/wp-content/uploads/2018/04/profile-blank-reva.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="card">
                            <div className="card-header">Edit account details</div>
                            <div className="card-body">
                                <form>
                                    <div className="row mb-3">
                                        <div className="col-6">
                                            <label className="small mb-1" htmlFor="inputFirstName">First Name</label>
                                            <input className="form-control" id="inputFirstName" type="text"
                                                   placeholder="Enter your first name" value={firstName}
                                                   onChange={(e) => setFirstName(e.target.value)}/>
                                        </div>
                                        <div className="col-6">
                                            <label className="small mb-1" htmlFor="inputLastName">Last Name</label>
                                            <input className="form-control" id="inputLastName" type="text"
                                                   placeholder="Enter your last name" value={lastName}
                                                   onChange={(e) => setLastName(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-12 mb-3">
                                            <label className="small mb-1" htmlFor="inputEmail">Email Address</label>
                                            <input className="form-control" id="inputEmail" type="email"
                                                   placeholder="Enter your email address" value={email}
                                                   onChange={(e) => setEmail(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-12 mb-3">
                                            <label className="small mb-1" htmlFor="inputPhoneNumber">Phone Number</label>
                                            <input className="form-control" id="inputPhoneNumber" type="tel"
                                                   placeholder="Enter your phone number" value={phoneNumber}
                                                   onChange={(e) => setPhoneNumber(e.target.value)}/>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary" onClick={updateUserInfo}>
                                        Save changes
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditProfile