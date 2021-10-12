import account from '../css/account.css'
import google from '../img/google.png'
import facebook from '../img/facebook.png'

const Account = () => {
    return (
        <div className="account">
            <div className="d-flex flex-row bd-highlight ">
                <div >
                    <input type="email" class="form-control" placeholder="First Name"/>
                </div>

                <div >
                    <input type="email" class="form-control" placeholder="Last Name"/>
                </div> 
            </div>

            <div>
                <input type="email" class="form-control" placeholder="Email address"/>
            </div> 

            <div>
                <input type="email" class="form-control" placeholder="Password"/>
            </div>
                 
            <div>
                <input type="email" class="form-control" placeholder="Confirm Password"/>
            </div>      


{/*2  */}
<div className="account-login">
    <button className="btn btn-primary">hello</button>
    <a href="#">Sign in</a>
</div>

<button className="account-btn"> <img src={facebook} alt={facebook} />Sign in With facebook</button>
<button className="account-btn"> <img src={google} alt={google} />Sign in With Google</button>
<p className="account-text">By Signing up you agree to our terms & Conditions, privacy policy</p>
        </div>

    )
}

export default Account
