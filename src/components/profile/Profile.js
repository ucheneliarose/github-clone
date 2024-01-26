import React from "react";
import { useSelector } from "react-redux"; 
import SearchForm from "../search-form/SearchForm";
import FollowersCard from "../followers-card/FollowersCard";
import "./Profile.scss";

export default function Profile() {
    const userData = useSelector(state => state.userData);

    return (
        <div>
            <div>
                <img src="" alt="" />
                <div>
                    <FollowersCard />
                </div>
            </div>
            <h4>Github {userData.name ? userData.name : "No name available" } </h4>
            <p>How people build software</p>
        </div>
    );
}
