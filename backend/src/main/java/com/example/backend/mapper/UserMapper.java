package com.example.backend.mapper;

import com.example.backend.dto.UserDTO;
import com.example.backend.model.UserModel;
import org.mapstruct.Mapper;

@Mapper
public interface UserMapper {
    UserDTO toDTO(UserModel model);
    UserModel toModel(UserDTO dto);
}
