import {  useContext } from "react"
import { UserContext } from "../App"


export default function Footer(){
const userInfo = useContext(UserContext)
    return(
        <footer>
            <hr />
            <small>
            Copyright © {new Date().getFullYear()} | Micado Pierre | All Rights Reserved | {userInfo._id}
            </small>
        </footer>
    )
}