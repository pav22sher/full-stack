package com.example.backend.service;

import com.example.backend.dto.UserDTO;
import com.example.backend.mapper.UserMapper;
import com.example.backend.model.UserModel;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserMapper mapper;

    public List<UserDTO> findAll() {
        return userRepository.findAll().stream().map(mapper::toDTO).toList();
    }

    public UserDTO save(UserDTO dto) {
        UserModel model = mapper.toModel(dto);
        userRepository.saveAndFlush(model);
        return mapper.toDTO(model);
    }

    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }

    public UserDTO findById(Long id) {
        UserModel model = userRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        return mapper.toDTO(model);
    }
}
