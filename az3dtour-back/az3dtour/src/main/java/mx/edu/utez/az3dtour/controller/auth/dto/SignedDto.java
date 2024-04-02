package mx.edu.utez.az3dtour.controller.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import mx.edu.utez.az3dtour.model.user.User;

@Data
@AllArgsConstructor

public class SignedDto {
    private String token;
    private User user;
}
