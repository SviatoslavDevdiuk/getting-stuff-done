package com.example.gettingstuffdone.controller;

import com.example.gettingstuffdone.controller.request.AuthenticationRequest;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/authentication")
public class AuthenticationController {


    @RequestMapping("/login")
    @ResponseBody
    public void login(@RequestBody AuthenticationRequest request){

    }

    @RequestMapping("/signup")
    @ResponseBody
    public void signup(@RequestBody AuthenticationRequest request){

    }

}
