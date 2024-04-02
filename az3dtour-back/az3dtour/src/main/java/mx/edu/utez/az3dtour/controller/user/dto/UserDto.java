package mx.edu.utez.az3dtour.controller.user.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;
import mx.edu.utez.az3dtour.model.role.Role;

@Data

public class UserDto {

    @NotNull(message = "El campo de nombre de usuario es obligatorio")
    @Size(min = 5, message = "El nombre de usuario debe tener al menos 5 caracteres")
    @Pattern(regexp = "^[a-zA-Z]+[a-zA-Z]+$", message = "El nombre de usuario no es válido")
    private String username;

    @NotNull(message = "El campo de contraseña es obligatorio")
    @Size(min = 8, message = "La contraseña debe tener al menos 8 caracteres")
    private String password;

    @NotNull(message = "El campo de role es obligatorio")
    private Role role;
}
