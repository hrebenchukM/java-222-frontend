import { useContext, useEffect, useState } from "react";
import AppContext from "../../features/appContext/AppContext";

const emptyUserData = {};

export default function Profile() {
    const {request, user} = useContext(AppContext);
    const [userData, setUserData] = useState(emptyUserData);

    useEffect(() => {
        if(user) {
            request("api://user/profile").then(setUserData);
        }
        else {
            setUserData(emptyUserData);
        }
    }, [user]);

    return !user ? <div class="alert alert-danger mt-5 text-center" role="alert">Профіль доступний після входу в систему</div>
    :<>
        <h1 className="display-5 my-3">Profile</h1>
    </>;
}