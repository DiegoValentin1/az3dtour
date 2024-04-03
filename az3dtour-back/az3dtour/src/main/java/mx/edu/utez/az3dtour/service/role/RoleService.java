package mx.edu.utez.az3dtour.service.role;

import lombok.RequiredArgsConstructor;
import mx.edu.utez.az3dtour.controller.role.dto.RoleDto;
import mx.edu.utez.az3dtour.model.role.Role;
import mx.edu.utez.az3dtour.model.role.RoleRepository;
import mx.edu.utez.az3dtour.utils.ApiResponse;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Transactional
@RequiredArgsConstructor

public class RoleService {

    private final RoleRepository repository;

    @Transactional(rollbackFor = Exception.class)
    public ApiResponse<Role> create(RoleDto role) {
        Role newRole = new Role();
        String id = UUID.randomUUID().toString();
        newRole.setId(id);
        BeanUtils.copyProperties(role, newRole, "id");
        Role saveRole = repository.save(newRole);
        return new ApiResponse<>(
                saveRole, false, 200, "Rol registrado correctamente"
        );
    }

    @Transactional(readOnly = true)
    public ApiResponse<List<Role>> getAll() {
        List<Role> roles = repository.findAll();
        if (roles.isEmpty()) {
            return new ApiResponse<>(
                    roles, true, 400, "No hay roles registrados"
            );
        } else {
            return new ApiResponse<>(
                    roles, false, 200, "Roles encontrados"
            );
        }
    }

    @Transactional(readOnly = true)
    public ApiResponse<Role> findById(String id) {
        Role role = repository.findById(id).orElse(null);
        if (role != null) {
            return new ApiResponse<>(
                    role, false, 200, "Rol encontrado"
            );
        } else {
            return new ApiResponse<>(
                    null, true, 400, "Rol no encontrado"
            );
        }
    }
}
