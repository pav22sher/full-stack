package com.example.backend.controller;

import com.example.backend.dto.UserDTO;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping
    List<UserDTO> get() {
        return service.findAll();
    }

    @PostMapping
    UserDTO save(@RequestBody UserDTO dto) {
        return service.save(dto);
    }

    @PutMapping("/{id}")
    UserDTO update(@PathVariable Long id, @RequestBody UserDTO user) {
        user.setId(id);
        return service.save(user);
    }

    @GetMapping("/{id}")
    UserDTO findById(@PathVariable Long id) {
        return service.findById(id);
    }

    @DeleteMapping("/{id}")
    void delete(@PathVariable Long id) {
        service.deleteById(id);
    }
}
