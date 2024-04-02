package mx.edu.utez.az3dtour.controller.auth;

import lombok.RequiredArgsConstructor;
import mx.edu.utez.az3dtour.controller.auth.dto.SignDto;
import mx.edu.utez.az3dtour.controller.auth.dto.SignedDto;
import mx.edu.utez.az3dtour.controller.user.dto.UserDto;
import mx.edu.utez.az3dtour.model.user.User;
import mx.edu.utez.az3dtour.service.auth.AuthService;
import mx.edu.utez.az3dtour.utils.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api-az/auth")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor

public class AuthController {
    private final AuthService service;

    @PostMapping("/create")
    //@PreAuthorize("hasRole('Admin')")
    public ResponseEntity<ApiResponse<User>> create (@RequestBody UserDto user) {
        try {
            ApiResponse<User> response = service.create(user);
            HttpStatus statusCode = response.isError() ? HttpStatus.BAD_REQUEST : HttpStatus.OK;
            return new ResponseEntity<>(
                    response,
                    statusCode
            );
        } catch (Exception e) {
            return new ResponseEntity<>(
                    new ApiResponse<>(
                            null, true, 500, e.getMessage()),
                    HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    @PostMapping("/signIn")
    public ResponseEntity<ApiResponse<SignedDto>> signIn (@RequestBody SignDto user) {
        try {
            ApiResponse<SignedDto> response = service.signIn(user);
            HttpStatus statusCode = response.isError() ? HttpStatus.BAD_REQUEST : HttpStatus.OK;
            return new ResponseEntity<>(
                    response,
                    statusCode
            );
        } catch (Exception e) {
            return new ResponseEntity<>(
                    new ApiResponse<>(
                            null, true, 500, e.getMessage()),
                    HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }
}
