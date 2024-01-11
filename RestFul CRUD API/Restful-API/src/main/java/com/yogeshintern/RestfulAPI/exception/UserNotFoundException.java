package com.yogeshintern.RestfulAPI.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Could Not Found The User with id "+ id );
    }
}
