// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Users {
    // this is mostly for user profiles
    struct User {
        // username maybe
        // password not required
        string name;
        string nationality;
        string email;
    }

    mapping(int => User) public users;
}
